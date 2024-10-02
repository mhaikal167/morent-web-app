import Image from "next/image";
import React from "react";
import ImageAds from "@/public/assets/images/image-ads.png";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
const AdsView = () => {
  return (
    <div className="grid grid-cols-2 border gap-10 ">
      <div className="h-96 min-w-full bg-gradient-to-br from-info-400 via-info-600 to-info-800 rounded-lg flex items-center justify-center text-white text-xl">
        <div className="h-fit w-full py-2 px-4">
          <div className="w-1/3 grid grid-cols-1 gap-2">
            <Text textSize={"3xl"} weight={"semiBold"} className="text-white">
              The Best Platform for Car Rental{" "}
            </Text>
            <Text weight={"semiBold"} className="text-white">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </Text>
            <Button>Rental Now</Button>
          </div>
          <div className="flex items-center justify-center">
            <Image src={ImageAds} alt="Image Ads 1" width={400} height={100} />
          </div>
        </div>
      </div>
      <div className="h-96 min-w-full bg-gradient-to-br from-primary-400 via-primary-600 to-primary-800 rounded-lg flex items-center justify-center text-white text-xl">
        <div className="h-fit w-full py-2 px-4">
          <div className="w-1/3 grid grid-cols-1 gap-2">
            <Text textSize={"3xl"} weight={"semiBold"} className="text-white">
              The Best Platform for Car Rental{" "}
            </Text>
            <Text weight={"semiBold"} className="text-white">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </Text>
            <Button variant="info">Rental Now</Button>
          </div>
          <div className="flex items-center justify-center">
            <Image src={ImageAds} alt="Image Ads 1" width={400} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsView;
