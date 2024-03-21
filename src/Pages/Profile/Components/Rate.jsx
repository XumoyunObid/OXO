import React from "react";
import ArrowbackIcon from "../../../assets/Icons/ArrowbackIcon";
import DeleteIcon from "./../../../assets/Icons/DeleteIcon";
import { useNavigate } from "react-router-dom";
import Button from "../../../UI/Button";

const Rate = () => {
  // Hooks
  const navigate = useNavigate();

  // Buttons

  const navigateBack = () => {
    navigate("/profile");
  };
  return (
    <div className="bg-neutral py-6 flex items-center justify-center">
      <div className="bg-white rounded-md p-8 w-[410px]">
        <div className="flex items-center justify-between">
          <button onClick={navigateBack}>
            <ArrowbackIcon />
          </button>
          <h1 className="text-2xl font-bold">Fikr bildirish</h1>
          <span className="flex items-center gap-2 text-secondary">
            Tozalash <DeleteIcon />
          </span>
        </div>
        <div className="py-4 flex flex-col gap-3">
          <p>Sizga eng ko'p nima yoqdi?</p>
          <textarea
            name="rate"
            id="rate"
            cols="45"
            rows="7"
            className="rounded-md border-2 p-3"
          ></textarea>
        </div>
        <Button variant="primary" className="w-full" onClick={navigateBack}>
          Davom etish
        </Button>
      </div>
    </div>
  );
};

export default Rate;
