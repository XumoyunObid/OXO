import React, { useState } from "react";
import { Switch, Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Price = ({register}) => {
  // Hooks
  const [enabled, setEnabled] = useState(false);
  let [categories] = useState({
    Narxli: [],
    Bepul: [],
    Ayirboshlash: [],
  });

  
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-4 my-6">
            <div className="w-full max-w-md px-2 sm:px-0">
              <Tab.Group>
                <Tab.List className="flex gap-5">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          "w-full py-2.5 rounded-lg text-sm font-medium",
                          selected
                            ? "bg-primary text-white shadow"
                            : "text-primary bg-neutral shadow"
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
              </Tab.Group>
            </div>
            <div className="flex flex-col gap-2 max-w-md">
              <label htmlFor="price" className="text-sm text-myGray">
                Narx
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="0"
                  className="p-4 rounded-md bg-neutral w-3/4"
                  {...register("price", { required: true })}
                />
                <label htmlFor="currency" className="py-5 hidden">
                  Curremcy
                </label>
                <input
                  type="text"
                  id="currency"
                  placeholder="So'm"
                  className="p-4 rounded-md bg-neutral w-1/4"
                />
              </div>
              
              <div className="flex items-center max-w-md justify-between">
                <p className="text-base ">Savdolashish</p>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? "bg-primary" : "bg-primary"}
    relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-4" : "translate-x-0"}
      pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </div>
            </div>
          </div>
  );
};

export default Price;
