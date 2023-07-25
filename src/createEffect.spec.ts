import { it, expect, vi } from "vitest";
import { createSingle } from "./createSignal";
import { createEffect } from "./createEffect";

it("check createEffect is being called ones on creation", () => {
  const [count] = createSingle(0);

  const mockCb = vi.fn();

  createEffect(() => {
    mockCb();
    console.log("The count is", count());
  });

  expect(mockCb).to.toHaveBeenCalledOnce()
});

it("check createEffect is being called twice: on creation, and one update", () => {
  const [count, setCount] = createSingle(0);

  const mockCb = vi.fn();
  createEffect(() => {
    mockCb();
    console.log("The count is", count());
  });

  setCount(5);
  expect(mockCb).to.toHaveBeenCalledTimes(2);
});
