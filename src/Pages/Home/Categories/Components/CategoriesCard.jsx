import React from "react";

const CategoriesCard = ({ img, name }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex items-center justify-center">
        <img src={img} alt="" />
      </div>
      <p className="text-sm text-center">{name}</p>
    </div>
  );
};

export default CategoriesCard;
