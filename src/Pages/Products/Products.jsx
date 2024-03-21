import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useGetProducts from "./Service/Queries/usegetProducts";
import MainCard from "../../Components/Cards/MainCard";

const Products = () => {
  // Hooks
  const { data, fetchNextPage, hasNextPage } = useGetProducts();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  
  return (
    <div className="bg-neutral">
      <div className="py-8 container">
        <h1 className="text-2xl font-bold text-primary mb-9">
          Siz uchun maxsus
        </h1>
        <div className="grid grid-cols-5 gap-4">
          {data?.pages?.map((pages) =>
            pages?.map((obj) => <MainCard key={obj.id} {...obj} />)
          )}
          {hasNextPage && (
            <div ref={ref}>{inView ? <h2>Loading...</h2> : ""}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
