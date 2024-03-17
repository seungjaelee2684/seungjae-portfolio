import { BsMinecartLoaded } from "react-icons/bs";
import { GiSmallFishingSailboat, GiSpiderWeb } from "react-icons/gi";

export const charactorStatus = [
  {
    id: 1,
    size: 0,
    color: "#294b94",
    icon: <GiSmallFishingSailboat />,
    title: "신중한 탐험가\n(Cautious Explorer)",
    content: "탐험을 즐기면서도 새로운 것을 탐험하는데에 있어\n신중하게 고민하려는 성향.",
  },
  {
    id: 2,
    size: -2,
    color: "#237014",
    icon: <GiSpiderWeb />,
    title: "견고한 인내자\n(Robust Patience)",
    content: "문제가 닥쳐와도 쉽게 포기하지 않으며,\n끈질기게 달라붙고 인내할 수 있는 능력.",
  },
  {
    id: 3,
    size: -4,
    color: "#999b13",
    icon: <BsMinecartLoaded />,
    title: "불굴의 리프터\n(Indomitable Lifter)",
    content: "궂은 일을 꺼려하지 않고,\n혼자서 많은 일을 처리해야 하는 상황을 반김.\n문제해결을 스스로 헤쳐나가려고 노력하는 성향.",
  }
];