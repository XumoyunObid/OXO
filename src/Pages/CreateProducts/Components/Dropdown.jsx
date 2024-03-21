// import { Fragment, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import ExpandIcon from "../../../assets/Icons/ExpandIcon";

// const category = [
//   { name: "Bo'limni tanlang", unavailable: true },
//   { name: "Ko'chmas mulk", value: "realestate" },
//   { name: "Ish", value: "job" },
//   { name: "Xobbi", value: "hobby" },
//   { name: "Uy va Bog'", value: "garden" },
//   { name: "Transport", value: "transport" },
//   { name: "Elektr jihozlari", value: "texno" },
//   { name: "Bolalar uchun", value: "forchildren" },
//   { name: "Moda va stil", value: "fashion" },
//   { name: "Xizmatlar", value: "service" },
//   { name: "Hayvonlar", value: "animals" },
//   { name: "Tekinga beraman", value: "free" },
//   { name: "Ayirboshlash", value: "exchange" },
// ];

// const Dropdown = ({ register }) => {
//   const [selected, setSelected] = useState(category[0]);

//   return (
//     <div className=" w-full">
//       <Listbox value={selected} onChange={setSelected}>
//         <input
//           type="hidden"
//           id="category"
//           {...register("category", { required: true })}
//         />
//         <div className="relative mt-1">
//           <Listbox.Button className="relative w-full cursor-default p-4 bg-neutral pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//             <span className="block truncate text-gray-400 text-[16px]">
//               {selected.name}
//             </span>
//             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//               <ExpandIcon
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </span>
//           </Listbox.Button>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
//               {category.map((category, categoryIdx) => (
//                 <Listbox.Option
//                   key={categoryIdx}
//                   className={({ active }) =>
//                     `relative cursor-default select-none p-4 ${
//                       active ? "bg-primary/50 text-white" : "text-gray-900"
//                     }`
//                   }
//                   value={category}
//                   disabled={category.unavailable}
//                 >
//                   {({ selected }) => (
//                     <>
//                       <span
//                         className={`block truncate ${
//                           selected ? "font-medium" : "font-normal"
//                         }`}
//                       >
//                         {category.name}
//                       </span>
//                     </>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//     </div>
//   );
// };

// export default Dropdown;
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

const Dropdown = ({ register }) => {
  // Hooks
  const [selected, setSelected] = useState(category[0]);

  // Onchange function
  const handleSelect = (value) => {
    setSelected(value);
    register("category", { required: true, value: value.value });
  };

  return (
    <div className=" w-full">
      <Listbox value={selected} onChange={handleSelect}>
        <input
          type="hidden"
          id="category"
          {...register("category", { required: true })}
        />
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
  );
};

export default Dropdown;
