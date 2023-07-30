import { it, expect, vi } from "vitest";
import { createSignal } from "./createSignal";
import { createEffect } from "./createEffect";
import { createMemo } from "./createMemo";

it("check createEffect is being called ones on creation", () => {
  console.log("1. Create");
  const firstNameSignal = createSignal("John");
  const lastNameNameSignal = createSignal("Smith");
  const getFirstNameSpy = vi.spyOn(firstNameSignal, '0');
  const getLastNameSpy = vi.spyOn(lastNameNameSignal, '0');

  const [firstName, setFirstName] = firstNameSignal;
  const [lastName, setLastName] = lastNameNameSignal;

  const [showFullName, setShowFullName] = createSignal(true);

  const calculateDisplayName = () => {
    if (!showFullName()) return firstName();
    return `${firstName()} ${lastName()}`;
  };

  const displayName = createMemo(calculateDisplayName);

  createEffect(() => console.log("My name is", displayName()));

  expect(getFirstNameSpy).toBeCalledTimes(1);
  expect(getLastNameSpy).toBeCalledTimes(1);

  console.log("2. Set showFullName: false ");
  setShowFullName(false);
  expect(getFirstNameSpy).toBeCalledTimes(2);
  expect(getLastNameSpy).toBeCalledTimes(1);


  console.log("3. Change lastName");
  setLastName("Legend");
  expect(getFirstNameSpy).toBeCalledTimes(2);
  expect(getLastNameSpy).toBeCalledTimes(1);

  console.log("4. Set showFullName: true");
  setShowFullName(true);
  expect(getFirstNameSpy).toBeCalledTimes(3);
  expect(getLastNameSpy).toBeCalledTimes(2);

});
