import { useNavigate } from "react-router-dom";
import Button from "../../../UI/Button";
import img from "../../../assets/Images/lginSuccess.png";
import ArrowbackIcon from "./../../../assets/Icons/ArrowbackIcon";
const OnSuccess = ({ toggle, setToggle }) => {
  // Hooks
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="bg-neutral py-10 flex items-center justify-center ">
      <div className="shadow-md rounded-md flex flex-col relative justify-between p-9 w-[407px] h-[500px] bg-white">
        <button
          className="absolute top-9 left-9"
          onClick={() => setToggle(!toggle)}
        >
          <ArrowbackIcon />
        </button>
        <div className="flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <p className="text-sm font-bold text-center">
          Ma’lumotlaringiz muvaffaqiyatli qabul qilindi. Davom etish tugmasini
          bosing
        </p>
        <Button variant="primary" onClick={handleNavigate}>
          Davom etish
        </Button>
      </div>
    </div>
  );
};

export default OnSuccess;
