import * as observerStack from "./observerStack";

function cleanup(running: observerStack.Observer) {
  running.dependencies.forEach((dep) => {
    dep.delete(running);
  });
  running.dependencies.clear();
}

export const createEffect = (fn: Function) => {
  const effect: observerStack.Observer = {
    execute() {
      cleanup(effect);
      observerStack.push(effect);
      try {
        fn();
      } finally {
        observerStack.pop();
      }
    },
    dependencies: new Set<observerStack.Observers>(),
  };

  effect.execute();
};
