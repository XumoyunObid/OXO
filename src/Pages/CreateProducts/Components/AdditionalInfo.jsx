import React from "react";

const AdditionalInfo = ({ register }) => {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-4 my-6">
      <h2 className="text-xl font-bold">Qo'shimcha ma'lumotlar</h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="floors" className="text-sm text-myGray">
          Uyning qavatlari
        </label>
        <input
          type="text"
          name="floors"
          id="floors"
          placeholder="Joylashuv"
          className="p-4 rounded-md bg-neutral"
          {...register("floors", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="area" className="text-sm text-myGray">
          Umumiy maydoni
        </label>
        <input
          type="text"
          name="area"
          id="ares"
          placeholder="20 kv/2"
          className="p-4 rounded-md bg-neutral"
          {...register("area", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="wc" className="text-sm text-myGray">
          Sanuzel
        </label>
        <input
          type="text"
          name="wc"
          id="wc"
          placeholder="Ajralgan"
          className="p-4 rounded-md bg-neutral"
          {...register("wc", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="kitchenarea" className="text-sm text-myGray">
          Oshxona maydoni
        </label>
        <input
          type="text"
          name="kitchenarea"
          id="kitchenarea"
          placeholder="Joylashuv"
          className="p-4 rounded-md bg-neutral"
          {...register("kitchenarea", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="order" className="text-sm text-myGray">
          Tartibi
        </label>
        <input
          type="text"
          name="order"
          id="order"
          placeholder="Tartibi"
          className="p-4 rounded-md bg-neutral"
          {...register("order", { required: true })}
        />

      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="remont" className="text-sm text-myGray">
          Remont
        </label>
        <input
          type="text"
          name="remont"
          id="remont"
          placeholder="Remont"
          className="p-4 rounded-md bg-neutral"
          {...register("remont", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="livingarea" className="text-sm text-myGray">
          Yashash maydoni
        </label>
        <input
          type="text"
          name="livingarea"
          id="livingarea"
          placeholder="77 kv/2"
          className="p-4 rounded-md bg-neutral"
          {...register("livingarea", { required: true })}
        />

      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="year" className="text-sm text-myGray">
          Qurilgan yili
        </label>
        <input
          type="text"
          name="year"
          id="year"
          placeholder="2024"
          className="p-4 rounded-md bg-neutral"
          {...register("year", { required: true })}
        />

      </div>
      <div>
        <h2 className="text-xl font-bold">Kvartirada bor</h2>
        <div className="flex justify-between py-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="internet" />
              <label htmlFor="internet">Internet</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="cellphone" />
              <label htmlFor="cellphone">Telefon</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="fridge" />
              <label htmlFor="fridge">Muzlatkich</label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="tv" />
              <label htmlFor="tv">Televizor</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="conditioner" />
              <label htmlFor="conditioner">Konditsioner</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="cabeltv" />
              <label htmlFor="cabeltv">Kabelli TV</label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="washmachine" />
              <label htmlFor="washmachine">Kir yuvish mashinasi</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="kitchen" />
              <label htmlFor="kitchen">Oshxona</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="balcony" />
              <label htmlFor="balcony">Balkon</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
