import { createEffect } from "./createEffect";
import { createMemo } from "./createMemo";
import { createSignal } from "./createSignal";

// const [count, setCount] = createSignal(0);

// createEffect(()=>{
//     console.log("The count is", count());
// })

// setCount(5);
// setCount(10);



console.log("1. Create");
const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Smith");
const [showFullName, setShowFullName] = createSignal(true);


const formatName = () => {
    console.log("formatName");
  //if (!showFullName()) return firstName();
  //return `${firstName()} ${lastName()}`
  return 'name'
}

createEffect(() => console.log("My name is1", displayedName()));
createEffect(() => console.log("My name is2", displayedName()));


const [displayedName, setDisplayedName] = createSignal();
createEffect(() => {
    setDisplayedName(formatName());
  console.log("set(fn())");
});



console.log("2. Set showFullName: false ");
setShowFullName(false);

console.log("3. Change lastName - no effect");
setLastName("Legend");

console.log("4. Set showFullName: true");
setShowFullName(true);

console.log("5. Change lastName - will effect");
setLastName("Oli");

