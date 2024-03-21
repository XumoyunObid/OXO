import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ExpandIcon from "../../../assets/Icons/ExpandIcon";

const category = [
  { name: "Bo'limni tanlang", unavailable: true },
  { name: "Ko'chmas mulk", value: "realestate" },
  { name: "Ish", value: "job" },
  { name: "Xobbi", value: "hobby" },
  { name: "Uy va Bog'", value: "garden" },
  { name: "Transport", value: "transport" },
  { name: "Elektr jihozlari", value: "texno" },
  { name: "Bolalar uchun", value: "forchildren" },
  { name: "Moda va stil", value: "fashion" },
  { name: "Xizmatlar", value: "service" },
  { name: "Hayvonlar", value: "animals" },
  { name: "Tekinga beraman", value: "free" },
  { name: "Ayirboshlash", value: "exchange" },
];

const ProductMainInfo = ({ register }) => {
  // Hooks
  const [selected, setSelected] = useState(category[0]);

  // Onchange function
  const handleSelect = (value) => {
    setSelected(value);
    register("datakey", { required: true, value: value?.value });
    register("category", { required: true, value: value?.name });
    console.log(value?.value);
  };

  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-4 my-6">
      <h2 className="text-xl font-bold">
        Bizga e'loningiz haqida gapirib bering
      </h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="title" className="text-sm text-myGray">
          Sarlavha kiriting
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Masalan Iphone 13 pro max"
          className="p-4 rounded-md bg-neutral"
          {...register("title", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="category" className="text-sm text-myGray">
          Rukn
        </label>
        {/* <Dropdown id="category" register={register} /> */}
        <div className=" w-full">
          <Listbox value={selected} onChange={handleSelect}>
            {/* <input
              type="hidden"
              id="category"
              {...register("category", { required: true })}
            /> */}
            
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default p-4 bg-neutral pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-gray-400 text-[16px]">
                  {selected.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ExpandIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {category.map((category, categoryIdx) => (
                    <Listbox.Option
                      key={categoryIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none p-4 ${
                          active ? "bg-primary/50 text-white" : "text-gray-900"
                        }`
                      }
                      value={category}
                      disabled={category.unavailable}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {category.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default ProductMainInfo;
