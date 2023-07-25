import { Observer, Observers, addObserver, removeLastObserver } from "./context";

function cleanup(running: Observer) {
    running.dependencies.forEach(dep=>{
        dep.delete(running);
    })
    running.dependencies.clear();
  }

export const createEffect = (fn: Function) => {
    const effect: Observer = {
        execute() {
            cleanup(effect);
            addObserver(effect)
            try{
                fn();
            }finally{
                removeLastObserver();
            }
        },
        dependencies: new Set<Observers>()
      };

      effect.execute();
}