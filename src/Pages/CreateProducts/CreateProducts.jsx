import React, { useState } from "react";
import Button from "../../UI/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Price from "./Components/Price";
import Infos from "./Components/Infos";
import AboutProduct from "./Components/AboutProduct";
import ProductMainInfo from "./Components/ProductMainInfo";
import useCreateProduct from "./Service/Mutations/useCreateProduct";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import AdditionalInfo from "./Components/AdditionalInfo";
import { loadState } from "../../Config/storage";

// const validationSchema = z.object({
//   name: z.string().min(2, { message: "Ism kiritish majburiy!" }),
//   title: z.string().min(4, { message: "Sarlavha kiritish majburiy!" }),
//   category: z.string().min(3, { message: "Rukn tanlang!" }),
//   datakey: z.string().min(0, { message: "" }),
//   price: z.string().min(0, { message: "Narx kiriting!" }),
//   about: z
//     .string()
//     .min(80, { message: "Eng kami 80 ta belgili tavsif yozing!" }),
//   email: z
//     .string()
//     .min(4, { message: "Email kiritish majburiy!" })
//     .email({ message: "Email-manzilda @ ishlatilinishi kerak!" }),
//   img: z.string().url({ message: "Iltimos URL kiriting!" }),
//   location: z.string().min(2, { message: "Joylashuv kiritish majburiy!" }),
//   phone: z.string().min(11, {
//     message: "Telefon raqam kamida 11 ta raqamdan iborat bo'lishi kerak!",
//   }),
// });

const CreateProducts = () => {
  // User
  const user = loadState("user");

  // Re-directing to login
  if (!user) return <Navigate to="/" replace />;

  // Hooks
  const [show, setShow] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const { mutate } = useCreateProduct();

  // Buttons
  const handleShow = () => {
    setShow(!show);
  };
  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        console.log(data);
        toast.success("E'lon joylandi");
        reset();
      },
      onError: (err) => {
        console.log(err);
        reset();
      },
    });
  };

  return (
    <div className="bg-neutral py-12">
      <div className="container">
        <form onSubmit={handleSubmit(submit)}>
          <h1 className="text-2xl font-bold">E'lon berish</h1>
          <ProductMainInfo register={register} />
          <AboutProduct register={register} />
          <Price register={register} />
          <Button variant="primary" type="button" onClick={handleShow}>
            Qo'shimcha ma'lumot
          </Button>
          {show ? <AdditionalInfo register={register} /> : ""}
          <Infos register={register} />
          <Button type="submit" variant="primary">
            E'lon joylash
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
