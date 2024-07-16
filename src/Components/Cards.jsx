import React from "react";
import Card from "./Card";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineBuildingLibrary,
} from "react-icons/hi2";
import { HiSpeakerphone } from "react-icons/hi";
import { TbWorldCheck } from "react-icons/tb";
import { ImStatsBars2 } from "react-icons/im";
import { IoKey } from "react-icons/io5";

const cardData = [
  {
    icon: HiOutlineBuildingLibrary,
    title: "Solution",
  },
  {
    icon: HiOutlineClipboardDocumentList,
    title: "Service",
  },
  {
    icon: HiSpeakerphone,
    title: "Support",
  },
  {
    icon: TbWorldCheck,
    title: "Analysis",
  },
  {
    icon: ImStatsBars2,
    title: "Marketing",
  },
  {
    icon: IoKey,
    title: "Research",
  },
];

const Cards = () => {
  return (
    <section className="cards flex flex-wrap items-center justify-center px-12 py-16 gap-5 bg-[#242424]">
      {cardData.map((currElem, currIndex) => {
        return <Card text={currElem.title} Icon={currElem.icon} />;
      })}
    </section>
  );
};

export default Cards;
