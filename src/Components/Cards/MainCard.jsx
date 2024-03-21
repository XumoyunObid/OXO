import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteHeartIcon from "../../assets/Icons/FavoriteHeartIcon";
import FavoriteIcon from "./../../assets/Icons/FavoriteIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
} from "../../Redux/Reducers/products-reducer";

const MainCard = (props) => {
  // ID
  const id = props.id;
  
  // Hooks
  const [wishBtn, setWishBtn] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    setWishBtn(products.some((el) => el.id === id));
  }, [products, id]);


// Buttons
  const handleLike = () => {
    dispatch(addProduct(props));
    setWishBtn(true);
  };
  const handleDislike = () => {
    dispatch(removeProduct(props));
    setWishBtn(false);
  };

  return (
    <div className="rounded-lg w-[210px] h-[306px] bg-white">
      <div className="w-full flex items-center justify-center">
        <Link to={`/products/${props.id}`}>
          {" "}
          <img
            src={props.img}
            alt="main-card"
            className="rounded-t-lg h-[146px] object-fill"
          />
        </Link>
      </div>
      <div className="py-2 px-[10px] flex flex-col gap-3 items-start">
        <Link to={`/products/${props.id}`}>
          {" "}
          <h2 className="text-sm">{props.title}</h2>
        </Link>
        <span className="text-xl font-bold text-secondary">
          {props.price} UYE
        </span>
        <p className="text-sm text-myGray">{props.location}</p>
        <div className="flex w-full justify-between items-center">
          <p className="text-sm text-myGray">Bugun 12:27</p>
          {wishBtn ? (
            <button onClick={handleDislike}>
              <FavoriteIcon />
            </button>
          ) : (
            <button onClick={handleLike}>
              <FavoriteHeartIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
