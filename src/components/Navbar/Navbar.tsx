"use client";
import Image from "next/image";
import { memo } from "react";
import Love from "@/public/assets/svg/Love.svg";
import Link from "next/link";
import ButtonIcon from "../Button/ButtonIcon";
import Setting from "@/public/assets/svg/setting.svg";
import Notification from "@/public/assets/svg/notification.svg";
import Search from "@/public/assets/svg/search.svg";
import Filter from "@/public/assets/svg/filter.svg";
const Navbar = memo(() => {
  const handleFilter = () => {
    console.log("Clicked");
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-10 navbar bg-white ">
      <div className="px-5 flex-1">
        <Link
          href={"/"}
          className="cursor-pointer text-xl text-primary-500 font-bold mr-12"
        >
          MORENT
        </Link>
        <div className="form-control w-1/3">
          <label className="input input-bordered flex items-center gap-2 h-10 rounded-full bg-white">
            <Image
              src={Search}
              alt="svg"
              width={20}
              height={18}
              layout="intrinsic"
              className="object-contain"
            />
            <input
              type="text"
              className="grow"
              placeholder="Search something here"
            />
            <button
              role="button"
              className="cursor-pointer"
              onClick={handleFilter}
            >
              <Image
                src={Filter}
                alt="svg"
                width={20}
                height={18}
                layout="intrinsic"
                className="object-contain"
              />
            </button>
          </label>
        </div>
      </div>
      <div className="flex-none gap-5 mx-8">
        <ButtonIcon>
          <Image
            src={Love}
            alt="svg"
            width={20}
            height={18}
            layout="intrinsic"
            className="object-contain"
          />
        </ButtonIcon>
        <ButtonIcon>
          <Image
            src={Notification}
            alt="svg"
            width={24}
            height={24}
            layout="intrinsic"
            className="object-contain"
          />
        </ButtonIcon>
        <ButtonIcon>
          <Image
            src={Setting}
            alt="svg"
            width={24}
            height={24}
            layout="intrinsic"
            className="object-contain"
          />
        </ButtonIcon>
        <ButtonIcon>
          <Image
            src={Love}
            alt="svg"
            width={20}
            height={18}
            layout="intrinsic"
            className="object-contain"
          />
        </ButtonIcon>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default memo(Navbar);
