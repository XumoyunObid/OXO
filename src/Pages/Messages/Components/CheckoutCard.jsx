import React from "react";

const CheckoutCard = ({ title, date, price }) => {
  return (
    <div className="bg-white rounded-lg p-6 w-[640px]">
      <div className="grid grid-cols-4 gap-[80px]">
        <h1 className="text-lg font-semibold col-span-2">{title}</h1>
        <p className="text-lg text-myGray">{date}</p>
        <span className="text-lg text-secondary">{price}</span>
      </div>
    </div>
  );
};

export default CheckoutCard;
