import Card from "@/components/Card/Card";
import Text from "@/components/Text/Text";
import Image, { StaticImageData } from "next/image";
import React from "react";
import LoveOutline from "@/public/assets/svg/love-outline.svg";
import LoveRed from "@/public/assets/svg/love-red.svg";

interface CardMobilProps {
  favorite: boolean;
  handleFavorite: () => void;
  carTitle: string;
  carType: string;
  carImage: StaticImageData;
}

const CardMobil = ({
  favorite,
  handleFavorite,
  carTitle,
  carType,
  carImage,
}: CardMobilProps) => {
  return (
    <Card
      hasHeader
      headerContent={
        <div className="flex justify-between items-center pt-2 w-full px-4">
          <div>
            <Text textSize={"xl"} weight={"bold"} className="text-secon-500">
              {carTitle}
            </Text>
            <Text
              textSize={"text_sm"}
              weight={"bold"}
              className="text-secon-300"
            >
              {carType}
            </Text>
          </div>
          <Image
            src={favorite ? LoveOutline : LoveRed}
            width={24}
            height={24}
            alt="icon"
            className="cursor-pointer"
            onClick={handleFavorite}
          />
        </div>
      }
    >
      <div className="relative">
        <Image
          src={carImage}
          alt="Car 1"
          width={288}
          height={112}
          className=""
        />
        <div className="absolute w-full border bottom-0 bg-gradient-to-t from-white to-transparent h-16 opacity-90 blur-lg"></div>
      </div>
    </Card>
  );
};

export default CardMobil;
