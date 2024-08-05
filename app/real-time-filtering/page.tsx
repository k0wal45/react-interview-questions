"use client";
import React, { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Apricot",
  "Bannana",
  "Chery",
  "Cranberry",
  "Date",
  "Dragonfruit",
  "Elderberry",
  "Fig",
  "Grape",
  "Grapefruit",
];

const RealTimeFiltering = () => {
  const [value, setValue] = useState("");
  const [sortedFruits, setSortedFruits] = useState(fruits);

  type value = string;

  const onMutate = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const realTimeFilter = () => {
      let array: any = [];
      fruits.map((fruit: string, index: number) => {
        if (fruit.toLowerCase().startsWith(value.toLowerCase())) {
          array.push(fruit);
        }
      });
      setSortedFruits(array);
    };

    realTimeFilter();
  }, [value]);

  const fruitFataFiltered = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        className="border-2 p-2"
        value={value}
        onChange={onMutate}
      />
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Starts with value:</h2>
          <ul className="list-disc pl-6">
            {sortedFruits.map((fruit: string, index: number) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Includes value"</h2>

          <ul className="list-disc pl-6">
            {fruitFataFiltered.map((fruit: string, index: number) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RealTimeFiltering;
