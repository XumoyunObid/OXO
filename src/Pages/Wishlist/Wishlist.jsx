import React from "react";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import MainCard from "../../Components/Cards/MainCard";
import { useSelector } from "react-redux";

const Wishlist = () => {
  // Hooks
  const { products } = useSelector((state) => state.productReducer);

  // Re-directing to login
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="container py-[80px]">
        {products.length ? (
          <div>
            <h1 className="text-2xl font-bold py-3">Saralanganlar</h1>
            <div className="flex items-start justify-between">
              <div className="grid grid-cols-5 gap-6">
                {products?.map((item) => (
                  <MainCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <span>
              <i className="fa-solid fa-cart-arrow-down text-5xl text-primary"></i>
            </span>
            <h1 className="text-4xl font-semibold">
              Saralanganlar hozircha yo'q
            </h1>
            <p>Ammo siz qo'shishingiz mumkin</p>
            <Button variant="primary" onClick={toHome}>
              Bosh sahifa
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
