import React from "react";
import FooterLogo from "./../../assets/Icons/FooterLogo";
import { data } from "./data/footer-data";
import { Link } from "react-router-dom";
import AppStore from "./../../assets/Icons/AppStore";
import PlayStore from "./../../assets/Icons/PlayStore";

const Footer = () => {
  return (
    <div className="bg-primary pt-8">
      <div className="container">
        <div className="flex items-start justify-between">
          <FooterLogo />
          <ul className="flex flex-col gap-3 items-start">
            {data.slice(0, 8).map((item) => (
              <li key={item.id}>
                <Link className="text-white" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 items-start">
            {data.slice(8, 14).map((item) => (
              <li key={item.id}>
                <Link className="text-white" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 items-start">
            <li>
              <AppStore />
            </li>
            <li>
              <PlayStore />
            </li>
          </ul>
        </div>
        <div className="container mt-6 py-8 border-t-2 border-myGray text-white">
          © 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan
          foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz
          mumkin.
        </div>
      </div>
    </div>
  );
};

export default Footer;
