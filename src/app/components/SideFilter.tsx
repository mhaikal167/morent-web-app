"use client";

import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { memo, useState } from "react";

const TypeTab = () => {
  return (
    <div>
      <Text textSize={"xs"} weight={"semiBold"} className="text-secon-300 py-3">
        TEXT
      </Text>
      <div className="grid grid-col-1 gap-3">
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`Sport (${22})`}</Text>
        </div>
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`SUV (${22})`}</Text>
        </div>
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`MPV (${22})`}</Text>
        </div>
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`Sedan (${22})`}</Text>
        </div>
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`Coupe (${22})`}</Text>
        </div>
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`Hatchback (${22})`}</Text>
        </div>
      </div>
    </div>
  );
};

const CapacityTab = () => {
  return (
    <div>
      <Text
        textSize={"xs"}
        weight={"semiBold"}
        className="text-secon-300 py-3 mt-6"
      >
        CAPACITY
      </Text>
      <div className="grid grid-col-1 gap-3">
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`2 Person (${22})`}</Text>
        </div>
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`4 Person (${22})`}</Text>
        </div>
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`6 Person (${22})`}</Text>
        </div>
        <div className="flex gap-2 items-center " id="type">
          <input
            type="checkbox"
            defaultChecked={false}
            className="checkbox checkbox-primary w-4 h-4 rounded-md"
          />
          <Text
            textSize={"text_sm"}
            weight={"semiBold"}
            className="text-secon-400"
          >{`8 or More (${22})`}</Text>
        </div>
      </div>
    </div>
  );
};

const PriceTab = () => {
  const [rangeValue, setRangeValue] = useState(50);

  // Event handler untuk menangani perubahan nilai slider
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(event.target.value));
  };
  return (
    <div className="w-full mt-6">
      <input
        type="range"
        min="0"
        max="150"
        value={rangeValue}
        onChange={handleSliderChange}
        className="border border-white w-full"
      />
      <br />
      <Text textSize={"xl"} weight={"semiBold"} className="text-secon-400">
        {` Max. $${rangeValue}.00`}
      </Text>
    </div>
  );
};

const SideFilter = memo(() => {
  return (
    <form className="bg-white border min-h-full mt-16 px-4 py-6 w-64 form-control">
      <TypeTab />
      <CapacityTab />
      <PriceTab />
      <Button className="mt-6">Submit Filter</Button>
    </form>
  );
});
SideFilter.displayName = "SideFilter";

export default memo(SideFilter);
