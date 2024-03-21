import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Button from "../../../UI/Button";
import ExpandIcon from "../../../assets/Icons/ExpandIcon";
import img from "../../../assets/Images/nothing.png";
import kupon from "../../../assets/Images/coupon.png";
import CheckoutCard from "./CheckoutCard";
import SearchIcon from "../../../assets/Icons/SearchIcon";
import useGetProducts from "../../Products/Service/Queries/usegetProducts";
import { loadState } from "../../../Config/storage";
import MainCard from "../../../Components/Cards/MainCard";

export function MessagesTab() {
  // Hooks
  const user = loadState("user");
  const data = useGetProducts();

  // Function for getting products created by user
const pr = data?.data?.pages.flatMap((item) =>
  item.filter((pg) => pg.name == user.name)
);

  return (
    <Tab.Group>
      <Tab.List className="flex items-center justify-between container py-4">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "border-b-2 border-secondary text-primary outline-none active:outline-none"
                  : "bg-white text-myGray outline-none active:outline-none"
              }
            >
              E'lonlar
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "border-b-2 border-secondary text-primary outline-none active:outline-none"
                  : "bg-white text-myGray outline-none active:outline-none"
              }
            >
              Xabarlar
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "border-b-2 border-secondary text-primary outline-none active:outline-none"
                  : "bg-white text-myGray outline-none active:outline-none"
              }
            >
              To'lovlar tarixi
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "border-b-2 border-secondary text-primary outline-none active:outline-none"
                  : "bg-white text-myGray outline-none active:outline-none"
              }
            >
              Sozlamalar
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "border-b-2 border-secondary text-primary outline-none active:outline-none"
                  : "bg-white text-myGray outline-none active:outline-none"
              }
            >
              Promokod
            </button>
          )}
        </Tab>
        {/* ...  */}
      </Tab.List>
      <div className="bg-neutral h-[100vh]">
        <Tab.Panels className=" container py-8 flex">
          <Tab.Panel>
            <h1>Sizning e'lonlaringiz</h1>
            <div className="grid grid-cols-5 gap-6 py-6">
              {pr?.map((item) => (
                <MainCard key={item.id} {...item} />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex">
            <div>
              <Tab.Group>
                <Tab.List className="flex items-center gap-10">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "border-b-2 border-secondary text-primary font-semibold outline-none active:outline-none"
                            : "bg-neutral text-myGray outline-none active:outline-none"
                        }
                      >
                        Aktiv suhbatlar
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "border-b-2 border-secondary text-primary font-semibold outline-none active:outline-none"
                            : " text-myGray outline-none active:outline-none bg-neutral"
                        }
                      >
                        Yuborilganlar
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "border-b-2 border-secondary text-primary font-semibold outline-none active:outline-none"
                            : "bg-neutral text-myGray outline-none active:outline-none"
                        }
                      >
                        Arxivlangan
                      </button>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels className="bg-neutral py-6">
                  <Tab.Panel>
                    <p className="text-myGray">Suhbatlarni filtrlash</p>
                    <Button
                      variant="secondary"
                      className="flex items-center justify-between"
                    >
                      Aktiv suhbatlar <ExpandIcon />
                    </Button>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
            <div className="">
              <div className="flex items-center justify-center">
                <img src={img} alt="" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-center">
                  Hali hech qanday xabar yo'q
                </h2>
                <p>
                  Barcha yuborilgan va qabul qilingan xabarlar shu yerda
                  saqlanadi.
                </p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="container py-8">
            <h2 className="text-2xl font-bold">To'lovlar</h2>
            <div className="flex flex-col gap-4 py-6">
              <CheckoutCard
                title={"Reklama"}
                date={"22.03.2022"}
                price={"5 200 uzs"}
              />
              <CheckoutCard
                title={"Qo'shimcha xizmatlar"}
                date={"22.03.2022"}
                price={"14 754 uzs"}
              />
            </div>
          </Tab.Panel>
          <Tab.Panel>Sozlamalar</Tab.Panel>
          <Tab.Panel>
            <Tab.Group>
              <Tab.List className="flex items-center gap-10">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "border-b-2 border-secondary text-primary font-semibold outline-none active:outline-none"
                          : "bg-neutral text-myGray outline-none active:outline-none"
                      }
                    >
                      Cashback
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "border-b-2 border-secondary text-primary font-semibold outline-none active:outline-none"
                          : " text-myGray outline-none active:outline-none bg-neutral"
                      }
                    >
                      Kupon
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels className="bg-neutral py-6">
                <Tab.Panel className="w-[715px]">
                  <div className="flex items-center justify-between gap-3 w-[715px]">
                    <div className="p-3 flex w-full items-center gap-1 bg-white rounded-lg border-2">
                      <SearchIcon />
                      <input
                        type="text"
                        placeholder="To'lovlar qidiruvi"
                        className="outline-none w-full bg-white"
                      />
                    </div>
                    <Button variant="primary">Qidiruv</Button>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="flex flex-col gap-4">
                    <img src={kupon} alt="" />
                    <img src={kupon} alt="" />
                    <img src={kupon} alt="" />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Tab.Panel>
          {/* ... */}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}
