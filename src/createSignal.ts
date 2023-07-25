import { Observer, Observers, getCurrentObserver } from "./context";

function subscribe(runningEffect: Observer, signalObservers: Observers) {
    signalObservers.add(runningEffect);
    // create a back link to the signal observers. used in the cleanup
    runningEffect.dependencies.add(signalObservers);
}

export const createSingle = <V>(value: V) => {
  const subscribers = new Set<Observer>();

  const read = () => {
    const running = getCurrentObserver();
    // subscribe
    if (running) {
        subscribe(running, subscribers);
    }

    return value;
  };

  const write = (nextValue: V) => {
    value = nextValue;

    //notify subscribers
    for (const sub of [...subscribers]) {
      sub.execute();
    }
  };

  return [read, write] as const;
};
