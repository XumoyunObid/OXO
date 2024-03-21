import React from "react";
import useGetBanner from "./Service/Queries/useGetBanner";
import { loadState } from "../../Config/storage";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import YoutubeIcon from "./../../assets/Icons/YoutubeIcon";
import TelegramIcon from "../../assets/Icons/telegramIcon";
import TikTokIcon from "./../../assets/Icons/TikTokIcon";
import InstaIcon from "./../../assets/Icons/InstaIcon";
import Button from "../../UI/Button";
import { MessagesTab } from "./Components/MessagesTab";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  // Hooks
  const { data } = useGetBanner();
  const navigate = useNavigate();

  // Getting image from array
  const img = data?.map((item) => {
    return item?.img;
  });

  // Re-directing to login
  const user = loadState("user");
  if (!user) {
    navigate("/");
  }

  return (
    <div>
      <div className="flex items-center justify-center relative">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="container">
        <div className="absolute bottom-[47%] flex gap-4 items-center">
          <div className="rounded-full flex items-center w-[160px] h-[160px] justify-center bg-white p-2">
            <img className="rounded-full" src={user?.img} alt="" />
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-3xl">{user?.name}</h1>
            <ul className="flex items-center gap-6">
              <li>
                <FacebookIcon />
              </li>
              <li>
                <YoutubeIcon />
              </li>
              <li>
                <TikTokIcon />
              </li>
              <li>
                <TelegramIcon />
              </li>
              <li>
                <InstaIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-[100px] pb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Xabarlar</h1>
            <div className="flex items-center gap-14">
              <div className="flex flex-col gap-2">
                <p>Sizning hisobingiz: 0 so’m</p>
                <p>Mavjud bonuslaar: 0 so’m</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="secondary">Hamyonni to'ldirish</Button>
                <Button variant="primary">Paket sotib olish</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MessagesTab />
    </div>
  );
};

export default Messages;
