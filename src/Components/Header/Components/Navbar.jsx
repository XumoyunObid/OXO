import { loadState } from "../../../Config/storage";
import ChatOutlineIcon from "../../../assets/Icons/ChatOutlineIcon";
import FavoriteHeartIcon from "../../../assets/Icons/FavoriteHeartIcon";
import Dropdown from "./Dropdown";
import UserIcon from "./../../../assets/Icons/UserIcon";
import Button from "../../../UI/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Hooks
  const user = loadState("user");
  const navigate = useNavigate();
  const { count } = useSelector((state) => state.productReducer);

  // Buttons
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateMessages = () => {
    navigate("/messages");
  };
  const navigateCreate = () => {
    navigate("/create-products");
  };
  const navigateWishlist = () => {
    navigate("/wishlist");
  };
  const navigateProfile = () => {
    navigate("/profile");
  };

  return (
    <ul className="flex items-center gap-6">
      <li>
        <button className="flex gap-2" onClick={navigateMessages}>
          <ChatOutlineIcon /> Xabarlar
        </button>
      </li>
      <li className="">
        <button className="flex gap-2 relative" onClick={navigateWishlist}>
          {!count == 0 && (
            <span className="absolute top-[-12px] text-sm left-3 px-[6px] text-white rounded-full bg-secondary flex items-center justify-center">
              {count}
            </span>
          )}
          <FavoriteHeartIcon /> Yoqtirganlar
        </button>
      </li>
      {user ? (
        <li>
          <button className="flex gap-2" onClick={navigateProfile}>
            <UserIcon /> Akkaunt
          </button>
        </li>
      ) : (
        ""
      )}
      <li>
        <Dropdown />
      </li>
      {user ? (
        <li>
          <Button variant="primary" onClick={navigateCreate}>
            E'lonlarni joylashtirish
          </Button>
        </li>
      ) : (
        <li>
          <Button variant="primary" onClick={navigateLogin}>
            Kirish
          </Button>
        </li>
      )}
    </ul>
  );
};

export default Navbar;
