import { createSignal } from "./createSignal";
import { createEffect } from "./createEffect";

export const createMemo = (fn: Function) => {
  const [s, set] = createSignal();
  createEffect(() => {
    set(fn());
  });
  return s;
};
