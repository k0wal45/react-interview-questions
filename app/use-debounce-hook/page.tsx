"use client";
import React, { useEffect, useState } from "react";

const useDebounce = (text: string, delay: number) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return debounce;
};

const page = () => {
  const [value, setValue] = useState("");
  const debouncedText: any = useDebounce(value, 200);

  const onMutate = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 w-fit mx-auto text-center">
      <h1 className="text-5xl font-semibold">UseDebouce Hook</h1>
      <input
        type="text"
        placeholder="Search here..."
        className="border-2 p-2"
        value={value}
        onChange={onMutate}
      />
      <p className="text-xl ">Debounced text is: {debouncedText}</p>
    </div>
  );
};

export default page;
