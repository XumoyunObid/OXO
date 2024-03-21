import React from "react";
import { loadState } from "../../Config/storage";
import FacebookIcon from "./../../assets/Icons/FacebookIcon";
import Pinterest from "./../../assets/Icons/Pinterest";
import DribbleIcon from "./../../assets/Icons/DribbleIcon";
import TelegramIcon from "./../../assets/Icons/telegramIcon";
import Button from "../../UI/Button";
import FavoriteHeartIcon from "../../assets/Icons/FavoriteHeartIcon";
import useGetProducts from "../Products/Service/Queries/usegetProducts";
import MainCard from "../../Components/Cards/MainCard";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // Hooks
  const user = loadState("user");
  const data = useGetProducts();
  const navigate = useNavigate();

  // Function to get products created by user
  const pr = data?.data?.pages.flatMap((item) =>
    item.filter((pg) => pg.name == user.name)
  );

  // Buttons

  const navigateRate = () => {
    navigate("/rate");
  };

  return (
    <div className="bg-neutral py-10">
      <div className="container flex flex-col gap-9">
        <div className="p-6 rounded-lg bg-white  flex items-center justify-between">
          <div>
            <div className="flex">
              <div className="flex items-center justify-center">
                <img
                  src={user?.img}
                  alt=""
                  className="w-[80px] h-[80px] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2 items-start pl-6">
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-sm text-myGray">9:13 da online edi</p>
                <p className="text-sm text-myGray">
                  2024-yil iyun oyidan OXO da
                </p>
              </div>
            </div>
            <ul className="flex items-center gap-6 pt-4">
              <li>
                <FacebookIcon />
              </li>
              <li>
                <Pinterest />
              </li>
              <li>
                <DribbleIcon />
              </li>
              <li>
                <TelegramIcon />
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="primary" onClick={navigateRate}>
              Fikr bildirish
            </Button>
            <Button variant="neutral" className="flex items-center gap-2">
              <FavoriteHeartIcon />
              Obuna bo'lish
            </Button>
          </div>
        </div>
        <div>
          <h1 className="tetx-2xl font-bold">Sizning e'lonlaringiz</h1>
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

export default Profile;
