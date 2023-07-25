import { createEffect } from "./createEffect";
import { createSingle } from "./createSignal";

const [count, setCount] = createSingle(0);

createEffect(()=>{
    console.log("The count is", count());
})

setCount(5);
setCount(10);

