import React, { useState } from "react";

const AboutProduct = ({ register }) => {
  // Hooks
  const [wordCount, setWordCount] = useState(0);

  // Onchange function
  const handleTextareaChange = (event) => {
    const text = event.target.value;
    setWordCount(text.length);
  };

  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-4 my-6">
      <h2 className="text-xl font-bold">
        Bizga e'loningiz haqida gapirib bering
      </h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="img" className="text-sm text-myGray">
          Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar
          tartibini ularning ustiga bosib va olib o’tish bilan
          o’zgartirishingiz mumkin.
        </label>
        <input
          type="text"
          name="img"
          id="img"
          placeholder="https:// ..."
          className="p-4 rounded-md bg-neutral"
          {...register("img", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="about" className="text-sm text-myGray">
          Tavsif
        </label>
        <textarea
          name="about"
          id="about"
          placeholder="E'lon haqida batafsil"
          className="p-4 rounded-md bg-neutral"
          onChange={handleTextareaChange}
          rows={10}
          {...register("about", { required: true })}
        />
        <p className="flex justify-between text-myGray items-center">
          Yana kamida 80 ta belgi yozing <span>{wordCount}/9000</span>
        </p>
      </div>
    </div>
  );
};

export default AboutProduct;
