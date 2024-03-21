import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../UI/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { saveState } from "../../../Config/storage";
import useRegister from "../Service/Mutations/useRegister";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const validationSchema = z.object({
  email: z
    .string()
    .min(4, { message: "Email kiritish majburiy!" })
    .email({ message: "To'g'ri email kiriting!" }),
  password: z
    .string()
    .min(6, { message: "Parol uchun minimum 4 ta son kiriting" })
    .max(8, { message: "Parol uchun maksimal 8 ta son kiriting" }),
});

const RegisterForm = ({ btn }) => {
  // Hooks
  const { mutate } = useRegister();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema) });

  // Form submit
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        saveState("user", res.user);
        Cookies.set("token", res.accessToken);
        console.log(res);
        reset();
        navigate("/edit-profile");
      },
      onError: (err) => {
        console.log(err);
        reset();
      },
    });
  };
  return (
    <form
      className="px-8 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="email" className="text-sm text-myGray">
          Email
        </label>
        {!errors.email ? (
          <input
            type="text"
            placeholder="jonhdoe@gmail.com"
            name="email"
            className="border-2 p-4 rounded-lg bg-white"
            {...register("email", { required: true })}
          />
        ) : (
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            name="email"
            className="border-2 p-4 rounded-lg outline-secondary"
            {...register("email", { required: true })}
          />
        )}
        {errors.email && (
          <p className="text-secondary text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="password" className="text-sm text-myGray">
          Parol
        </label>
        {!errors.password ? (
          <input
            type="password"
            placeholder="******"
            name="password"
            className="border-2 p-4 rounded-lg"
            {...register("password", { required: true })}
          />
        ) : (
          <input
            type="password"
            placeholder="******"
            name="password"
            className="border-2 p-4 rounded-lg outline-secondary"
            {...register("password", { required: true })}
          />
        )}
        {errors.password && (
          <p className="text-secondary text-sm">{errors.password.message}</p>
        )}
      </div>
      <Button variant="primary">{btn}</Button>
    </form>
  );
};

export default RegisterForm;
