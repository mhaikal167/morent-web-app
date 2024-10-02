"use client";

import { memo } from "react";
import SideFilter from "./SideFilter";
import AdsView from "./AdsView";
import FilterView from "./FilterView/FilterView";

const Dashboard = () => {
  return (
    <main className="flex h-screen">
      <SideFilter />
      <div
        className="mt-20 mx-12 w-full border border-red-50"
        id="rightcontent"
      >
        <AdsView />
        <FilterView />
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
      </div>
    </main>
  );
};

export default memo(Dashboard);
