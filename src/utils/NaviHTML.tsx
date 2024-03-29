import { FaDungeon } from "react-icons/fa6";
import { LiaGripfire } from "react-icons/lia";
import { GoHomeFill } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";
import { GrContactInfo } from "react-icons/gr";

type HeaderHtmlType = {
  id: number,
  content: string,
  url: string,
  icon: React.ReactNode
}

export const headerHtml : HeaderHtmlType[] = [
  {
    id: 0,
    content: "Main",
    url: "/",
    icon: <GoHomeFill />
  },
  {
    id: 1,
    content: "Character",
    url: "/loby",
    icon: <HiUsers />
  },
  {
    id: 2,
    content: "About Us",
    url: "/about",
    icon: <GrContactInfo />
  },
  {
    id: 3,
    content: "Skills",
    url: "/skill",
    icon: <LiaGripfire />
  },
  {
    id: 4,
    content: "Dungeon",
    url: "/dungeon",
    icon: <FaDungeon />
  },
];