import { useInView } from "react-intersection-observer";
import useGetProducts from "../Products/Service/Queries/usegetProducts";
import { useEffect } from "react";
import MainCard from "../../Components/Cards/MainCard";
import useGetSortedProducts from "./Service/Queries/usegetSortedProducts";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./../../UI/Button";

const Filter = () => {
  // Hooks
  const { datakey } = useParams();
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage } = useGetSortedProducts(datakey);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="bg-neutral">
      {data?.pages ? (
        <div className="py-8 container">
          <h1 className="text-2xl font-bold text-primary mb-9">
            Siz uchun maxsus
          </h1>
          <div className="grid grid-cols-5 gap-4">
            {data?.pages?.map((pages) =>
              pages?.map((obj) => {
                return <MainCard key={obj.id} {...obj} />;
              })
            )}
            {hasNextPage && (
              <div ref={ref}>{inView ? <h2>Loading...</h2> : ""}</div>
            )}
          </div>
        </div>
      ) : (
        <div className="container py-[80px] flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="text-4xl font-bold">Ma'lumot yo'q</h1>
            <Button variant="primary" onClick={() => navigate("/")}>
              Ortga qaytish
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
