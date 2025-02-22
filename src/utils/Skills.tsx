import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { AiOutlineLock } from "react-icons/ai";

type SkillListType = {
    id: number,
    name: string,
    content: React.ReactNode,
    color: string,
    mystack: boolean,
    percentage: number
};

export const skillList : SkillListType[] = [
    {
        id: 1,
        name: "HTML5",
        content: <FaHtml5 />,
        color: "#E34F26",
        mystack: true,
        percentage: 6
    },
    {
        id: 2,
        name: "CSS3",
        content: <IoLogoCss3 />,
        color: "#1572B6",
        mystack: true,
        percentage: 9
    },
    {
        id: 3,
        name: "JavaScript",
        content: <SiJavascript />,
        color: "#F7DF1E",
        mystack: true,
        percentage: 12
    },
    {
        id: 4,
        name: "TypeScript",
        content: <SiTypescript />,
        color: "#3178C6",
        mystack: true,
        percentage: 14
    },
    {
        id: 5,
        name: "React",
        content: <FaReact />,
        color: "#61DAFB",
        mystack: true,
        percentage: 32
    },
    {
        id: 6,
        name: "Redux",
        content: <SiRedux />,
        color: "#764ABC",
        mystack: true,
        percentage: 3
    },
    {
        id: 7,
        name: "Recoil",
        content: <SiRecoil />,
        color: "#3578E5",
        mystack: true,
        percentage: 4
    },
    {
        id: 8,
        name: "Styled\nComponents",
        content: <SiStyledcomponents />,
        color: "#DB7093",
        mystack: true,
        percentage: 10
    },
    {
        id: 9,
        name: "React\nQuery",
        content: <SiReactquery />,
        color: "#FF4154",
        mystack: true,
        percentage: 4
    },
    {
        id: 10,
        name: "Axios",
        content: <SiAxios />,
        color: "#5A29E4",
        mystack: true,
        percentage: 4
    },
    {
        id: 11,
        name: "Next.js",
        content: <SiNextdotjs />,
        color: "#000000",
        mystack: true,
        percentage: 2
    },
    {
        id: 12,
        name: "Locked",
        content: <AiOutlineLock />,
        color: "#b5b5b5",
        mystack: false,
        percentage: 0
    },
];