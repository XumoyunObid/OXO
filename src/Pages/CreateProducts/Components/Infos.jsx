import React from "react";

const Infos = ({ register }) => {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-4 my-6">
      <h2 className="text-xl font-bold">Siz bilan bog'lanish uchun</h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="location" className="text-sm text-myGray">
          Joylashuv
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Toshkent, Bektemir tumani"
          className="p-4 rounded-md bg-neutral"
          {...register("location", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name" className="text-sm text-myGray">
          Ism
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="p-4 rounded-md bg-neutral"
          {...register("name", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email" className="text-sm text-myGray">
          Email-manzil
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="p-4 rounded-md bg-neutral"
          {...register("email", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="phone" className="text-sm text-myGray">
          Telefon raqami
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="p-4 rounded-md bg-neutral"
          {...register("phone", { required: true })}
        />
      </div>
    </div>
  );
};

export default Infos;
