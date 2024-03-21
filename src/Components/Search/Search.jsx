import React, { useState } from "react";
import SearchIcon from "../../assets/Icons/SearchIcon";
import LocationOutlineIcon from "./../../assets/Icons/LocationOutlineIcon";
import Button from "./../../UI/Button";

const Search = ({setValue}) => {

  const [show, setShow] = useState(false);
  return (
    <div className="bg-neutral py-8">
      <div className="container flex gap-3 justify-between w-full">
        <div className="flex items-center rounded-lg border border-gray-500 w-full">
          <div className="flex py-[14px] pl-4 items-center gap-2 w-3/5 border-r border-gray-500">
            <SearchIcon />
            <input
              onFocus={() => setShow(true)}
              type="text"
              placeholder="198 182 natija bo‘yicha "
              className="outline-none bg-transparent w-full"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="flex py-[14px] px-4 items-center gap-2 w-2/5">
            <LocationOutlineIcon />
            <input
              type="text"
              placeholder="Butun O‘zbekiston "
              className="outline-none bg-transparent w-full"
            />
          </div>
        </div>
        <Button variant="primary" className="px-12">
          Izlash
        </Button>
      </div>
    </div>
  );
};

export default Search;
