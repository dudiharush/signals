export type Observers = Set<Observer>

export type Observer =  {
    execute: Function
    dependencies: Set<Observers>;
}

const context: Observer[] = [];

export const getCurrentObserver = () => {
    return context[context.length-1];
}

export const push = (reaction: Observer)=>{
    context.push(reaction);
}

export const pop = ()=>{
    context.pop();
}