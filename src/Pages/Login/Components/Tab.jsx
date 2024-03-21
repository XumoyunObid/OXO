import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Button from "../../../UI/Button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {

  // Login tab: for login and register
  let [categories] = useState({
    Kirish: [
      {
        id: 1,
        form: <LoginForm />,
        btn: "Kirish",
      },
    ],
    "Ro'yxatdan o'tish": [
      {
        id: 1,
        form: <RegisterForm />,
        btn: " Ro'yxatdan o'tish",
      },
    ],
  });

  return (
    <div className="w-full max-w-md p-8 sm:px-0 border rounded-xl shadow-md">
      <Tab.Group>
        <Tab.List className="flex p-8">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5",
                  "ring-none outline-none",
                  selected
                    ? "bg-white text-primary border-b-primary border-b-4"
                    : "text-myGray border-b-myGray border-b-4"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("rounded-xl bg-white", "outline-none")}
            >
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md">
                    {post.form &&
                      React.cloneElement(post.form, { btn: post.btn })}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
