import React, { useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import ArrowbackIcon from "./../../assets/Icons/ArrowbackIcon";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useGetProducts from "../Products/Service/Queries/usegetProducts";
import { loadState } from "../../Config/storage";
import Map from "./Components/Map";
import SingleLocationIcon from "./../../assets/Icons/SingleLocationIcon";
import add from "../../assets/Images/add.png";
import {
  addProduct,
  removeProduct,
} from "../../Redux/Reducers/products-reducer";
import FavoriteIcon from "../../assets/Icons/FavoriteIcon";
import FavoriteHeartIcon from "../../assets/Icons/FavoriteHeartIcon";
import EyeIcon from "./../../assets/Icons/EyeIcon";
import FlagIcon from "./../../assets/Icons/FlagIcon";
import PhoneIcon from "./../../assets/Icons/PhoneIcon";
import Button from "./../../UI/Button";
import AttachIcon from "./../../assets/Icons/AttachIcon";
import MainCard from "../../Components/Cards/MainCard";
import useGetUsers from "./Service/Queries/useGetUsers";

const ProductsDetail = () => {
  // Google Map API
  const apiKey = "AIzaSyCbeipeG3sG9LNmaLS_9QyRg9WHSwT1JvE";

  // Hooks
  const user = loadState("user");
  const [wishBtn, setWishBtn] = useState(false);
  const [show, setshow] = useState(true);
  const { data } = useGetProducts();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Datas
  const product = data?.pages[0].find((product) => product.id == id);
  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    setWishBtn(products.some((el) => el.id === id));
  }, [products, id]);

  // Buttons
  const handleShow = () => {
    setshow(!show);
  };
  const navigateHome = () => {
    navigate("/");
  };
  const handleLike = () => {
    dispatch(addProduct(product));
    setWishBtn(true);
  };
  const handleDislike = () => {
    dispatch(removeProduct(product));
    setWishBtn(false);
  };

  // Function to get products created bt user
  const pr = data?.pages.flatMap((item) =>
    item.filter((pg) => pg.name == user.name)
  );
  return (
    <div className="bg-neutral">
      <div className="container">
        <Search />
        <button
          className="flex items-centertext-lg font-semibold my-8"
          onClick={navigateHome}
        >
          <ArrowbackIcon /> Orqaga
        </button>
        <div className="flex gap-6">
          <div className="w-2/3 rounded-lg bg-white">
            <img
              className="rounded-lg h-full m-auto"
              src={product?.img}
              alt=""
            />
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="bg-white rounded-lg py-6 px-4">
              <h2 className="text-xl font-semibold">Foydalanuvchi</h2>
              <div className="flex items-start gap-5 py-5">
                <img className="rounded-full w-10 h-10" src={user.img} alt="" />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm">Ro’yxatdan o’tgan sanasi 2020</p>
                  <span className="text-myGray text-sm">Online</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg py-2 px-4 ">
              <div className="flex gap-6 mb-3">
                <div className="w-10 h-10">
                  <SingleLocationIcon />
                </div>
                <div>
                  <h2 className="text-xl">Manzil: {user.location}</h2>
                  <p className="text-myGray">Sizdan 9 km uzoqlikda</p>
                </div>
              </div>
              <Map apiKey={apiKey} />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-6 py-6">
          <div className="w-2/3 flex flex-col gap-6">
            <div className="bg-white rounded-lg p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3>Joylashtirildi bugun 21:22</h3>
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
              <h1 className="text-4xl font-semibold">{product?.title}</h1>
              <span className="text-2xl text-secondary font-bold">
                {product?.price} UYE
              </span>
              {product?.area ? (
                <div className="grid grid-cols-4 gap-4">
                  <Button variant="secondary" className="flex items-center">
                    Maydoni: {product?.area} <sup>kv/2</sup>{" "}
                  </Button>
                  <Button variant="secondary">Remont: {product?.remont}</Button>
                  <Button variant="secondary">Qavat: {product?.floors}</Button>
                  <Button variant="secondary">WC: {product?.wc}</Button>
                </div>
              ) : (
                ""
              )}
              <div className="w-full">
                <h2 className="text-2xl font-semibold py-4">Tavsifi</h2>
                <p className="text-wrap break-words">{product?.about}</p>
              </div>
              <div className="flex items-center justify-between py-5 border-t-4 border-myGray mt-10">
                <p className="text-lg">ID: {product?.id}</p>
                <p className="flex items-center text-lg">
                  <EyeIcon /> Ko'rishlar: 137
                </p>
                <p className="flex items-center text-secondary">
                  <FlagIcon /> Shikoyat qilish
                </p>
              </div>
            </div>
            <div className="flex flex-col p-8 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-5 py-5">
                  <img
                    className="rounded-full w-10 h-10"
                    src={user.img}
                    alt=""
                  />
                  <div>
                    <p className="font-semibold">{product?.name}</p>
                    <p className="text-sm">Ro’yxatdan o’tgan sanasi 2020</p>
                    <span className="text-myGray text-sm">Online</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="flex">
                    <PhoneIcon />{" "}
                    {show ? <p>XXX XXX XXX</p> : `${product?.phone}`}
                  </span>
                  <Button variant="secondary" onClick={handleShow}>
                    Ko'rsatish
                  </Button>
                </div>
              </div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="9"
                className="bg-neutral rounded-lg p-4"
                placeholder="Xabaringizni yozing ..."
              ></textarea>
              <div className="flex items-center justify-between pt-6">
                <button className="flex items-center gap-3">
                  <AttachIcon /> Fayl biriktirish
                </button>
                <Button variant="primary" onClick={handleShow}>
                  Yuborish
                </Button>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <img src={add} alt="" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Muallifning boshqa e'lonlari</h2>
          <div className="grid grid-cols-5 gap-6 py-6">
            {pr?.map((item) => (
              <MainCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
