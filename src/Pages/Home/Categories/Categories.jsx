import React from "react";
import useGetCategories from "../Service/Queries/useGetCategories";
import CategoriesCard from "./Components/CategoriesCard";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data } = useGetCategories();
  return (
    <div className="bg-white">
      <div className="container pt-8 pb-14">
        <h1 className="text-2xl font-bold mb-6">Kategoriyalar</h1>
        <div className="grid grid-cols-9 gap-9">
          {data?.map((item) => (
            <Link key={item.id} to={`/category/${item.datakey}`}>
              <CategoriesCard {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
