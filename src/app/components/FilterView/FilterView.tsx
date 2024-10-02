"use client";
import React, { useState } from "react";
import CardMobil from "./components/CardMobil";
import Card1 from "@/public/assets/images/Car.png";

const FilterView = () => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      FilterView
      <div className="grid grid-cols-4 gap-4">
        <CardMobil
          favorite={favorite}
          handleFavorite={handleFavorite}
          carTitle="Koennght"
          carType="Sport"
          carImage={Card1}
        />
      </div>
    </div>
  );
};

export default FilterView;
