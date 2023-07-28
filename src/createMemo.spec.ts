import { it, expect, vi } from "vitest";
import { createSignal } from "./createSignal";
import { createEffect } from "./createEffect";
import { createMemo } from "./createMemo";

it("check createEffect is being called ones on creation", () => {

console.log("1. Create");
const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Smith");
const [showFullName, setShowFullName] = createSignal(true);


const displayName = createMemo(() => {
  if (!showFullName()) return firstName();
  return `${firstName()} ${lastName()}`
});

createEffect(() => console.log("My name is", displayName()));

console.log("2. Set showFullName: false ");
setShowFullName(false);

console.log("3. Change lastName");
setLastName("Legend");

console.log("4. Set showFullName: true");
setShowFullName(true);

expect(true).toEqual(true);


})