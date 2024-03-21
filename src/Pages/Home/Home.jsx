import React, { useState } from "react";
import Search from "../../Components/Search/Search";
import Categories from "./Categories/Categories";
import Products from "../Products/Products";
import useSearchAllProducts from "../../Components/Search/Service/Queries/useSerachProducts";
import useDebounce from "./useDebounce";
import MainCard from "../../Components/Cards/MainCard";

const Home = () => {
  // Hooks
  const [value, setValue] = useState("");
  const search = useDebounce(value);
  const { data, isLoading } = useSearchAllProducts(search);

  
  return (
    <div className="bg-neutral">
      <Search setValue={setValue} />
      {data && (
        <>
          <Categories />
          <div className="container py-6">
            {!value ? (
              <h1 className="text-2xl font-bold">Siz uchun maxsus</h1>
            ) : (
              <h1 className="text-2xl font-bold">E'lonlar</h1>
            )}
            <ul className="grid grid-cols-5 gap-6 py-4">
              {data?.map((item) => (
                <li key={item.id}>
                  <MainCard {...item} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
