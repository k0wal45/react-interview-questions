"use client";

import { useState } from "react";

// while in input autoformat make 1234567 -> (123)456-7, only numbers
// upon enetering 1234 should automatically format as (123)4
// upon entering 1234567 it should automaticly format as (123)456-7

const page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const maxLengthOfPhoneNumber = 10;

  const handleChange = (e: any) => {
    const currentValue = e.target.value;
    const numbers = currentValue.replace(/[^0-9]/g, "");
    const size = numbers.length;
    console.log(size);

    if (size > maxLengthOfPhoneNumber)
      return alert("Max length of a phone number is 10");

    const formatedPhoneNumber = [];

    for (let i = 0; i < size; i++) {
      if (size > 3 && i === 0) {
        formatedPhoneNumber.push("(");
      }

      formatedPhoneNumber.push(numbers[i]);

      if (size > 3 && i === 2) {
        formatedPhoneNumber.push(")");
      }
      if (size > 6 && i === 5) {
        formatedPhoneNumber.push("-");
      }
    }

    setPhoneNumber(formatedPhoneNumber.join(""));
  };

  return (
    <div className="mx-auto flex justify-center items-center gap-2">
      <input
        type="text"
        onChange={handleChange}
        className="border-2 p-2"
        placeholder="Phone Number"
        value={phoneNumber}
      />
      <button
        onClick={() => setPhoneNumber("")}
        className=" border-2 rounded-sm text-sm px-2 py-1 size-fit"
      >
        Reset
      </button>
    </div>
  );
};

export default page;
