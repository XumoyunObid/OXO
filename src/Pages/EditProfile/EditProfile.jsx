import React, { useState } from "react";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { saveState } from "../../Config/storage";
import usePatchUser from "./Service/Mutation/usePatchUser";
import OnSuccess from "../Login/Components/onSuccess";

const validationSchema = z
  .object({
    name: z.string().min(2, { message: "Ism kiritish majburiy!" }),
    img: z.string().url({ message: "Iltimos URL kiriting!" }),
    email: z.string().min(6, { message: "Email manzil kiritng!" }),
    location: z.string().min(2, { message: "Joylashuv kiritish majburiy!" }),
    password: z
      .string()
      .min(6, { message: "Parol uchun minimum 4 ta son kiriting" })
      .max(8, { message: "Parol uchun maksimal 8 ta son kiriting" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Parol uchun minimum 4 ta son kiriting" })
      .max(8, { message: "Parol uchun maksimal 8 ta son kiriting" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Parol to'g'ri kelmadi!",
  });

const EditProfile = () => {
  // Hooks
  const { mutate } = usePatchUser();
  const [toggle, setToggle] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema) });

  // From submit
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        saveState("user", data);
        console.log(data);
        reset();
        setToggle(!toggle);
      },
      onError: (err) => {
        console.log(err);
        reset();
      },
    });
  };
  return (
    <>
      {!toggle ? (
        <div className="bg-neutral py-10 flex items-center justify-center">
          <div className="shadow-md rounded-md p-9 w-[750px] bg-white">
            <form
              className="flex flex-col gap-4 items-start"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-2xl font-bold">Profil ma'lumotlari</h1>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="img" className="text-sm text-myGray">
                  Surat yuklash
                </label>
                <input
                  type="text"
                  placeholder="Surat"
                  name="img"
                  className="border-2 border-myGray rounded-lg p-4"
                  {...register("img", { required: true })}
                />
                {errors.img && (
                  <p className="text-secondary text-sm">{errors.img.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-sm text-myGray">
                  Ismingiz
                </label>
                <input
                  type="text"
                  placeholder="Islombek"
                  name="name"
                  className="border-2 border-myGray rounded-lg p-4"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-secondary text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="location" className="text-sm text-myGray">
                  Joylashuv
                </label>
                <input
                  type="text"
                  placeholder="Andijon"
                  name="location"
                  className="border-2 border-myGray rounded-lg p-4"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <p className="text-secondary text-sm">
                    {errors.location.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-sm text-myGray">
                  Email-manzil
                </label>
                <input
                  type="email"
                  placeholder="jonhdoe@gmail.com"
                  name="email"
                  className="border-2 border-myGray rounded-lg p-4"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-secondary text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="password" className="text-sm text-myGray">
                  Parolni kiriting
                </label>
                <input
                  type="password"
                  placeholder="******"
                  name="password"
                  className="border-2 border-myGray rounded-lg p-4"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-secondary text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm text-myGray"
                >
                  Parolni qayta kiriting
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="******"
                  className="border-2 border-myGray rounded-lg p-4"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <p className="text-secondary text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <Button variant="primary" className="w-full">
                Saqlash
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <OnSuccess toggle={toggle} setToggle={setToggle} />
      )}
    </>
  );
};

export default EditProfile;
