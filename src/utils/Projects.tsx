import PEEPPO from '../assets/images/PEEPPO/PEEPPO.png';
import ARIA from '../assets/images/ARIA/ARIA.png';
import ALDDALDDAL from '../assets/images/ALDDALDDAL/ALDDALDDAL.png';
import ZEFIT from '../assets/images/zefit/ZEFIT.png';

export const projectDto = [
    {
        id: 1,
        project: "(주)제핏",
        thumbnail: ZEFIT,
        period: "2024.08 ~ 2024.11",
        information: "비임상 CRO 회사",
        introduce: "제브라피쉬 전문 CRO로 혁신적인 진단장비를 활용하여\n전임상단계의 신약후보물질의 발굴을 돕는 비임상 CRO 회사",
        url: "https://zefit-front.vercel.app",
        skill: "Next.js, TypeScript,\nRecoil, Supabase",
        part: "기존 사이트 개편에 필요한 기획, 웹디자인, 프론트엔드 개발 및 DB설계를 담당",
        game: [
            {
                id: "프로젝트 소개",
                content: "제브라피쉬 전문 CRO로 혁신적인 진단장비를 활용하여 전임상단계의 신약후보물질의 발굴을 돕는 비임상 CRO 회사입니다."
            },
            {
                id: "업적",
                content: "기존 PHP기반의 사이트를 Next.js로 마이그레이션 작업을 기획했습니다.\n많은 정보를 담는 사이트 특성 상 가독성과 UX를 중점으로 웹디자인을 하였습니다.\nStatic파일을 이용해 데이터를 관리하던 방식에서 문의 메일, 공지사항과 같은 상황을 고려해 DB를 이용해 관리하는 방식으로 변경하였습니다.\n필요했던 관리자 기능을 추가하고 사용자의 경험을 피드백 받아 수정하고 개선하는 작업을 거쳤습니다."
            }
        ]
    },
    {
        id: 2,
        project: "ARIA(아리아)",
        thumbnail: ARIA,
        period: "2023.12 ~ 2024.04",
        information: "글로벌 일러스트 학원",
        introduce: "다양한 그림 스타일과 강사들을 통해 학습을 제공하는 다국적 학원 플랫폼",
        url: "https://www.aria-academy.com",
        skill: "React, TypeScript,\nAxios, React-Query, Recoil, Styled-Components",
        part: "전반적인 서비스 구상과 웹페이지의 디자인, 기능 개발 및 운영을 담당",
        game: [
            {
                id: "프로젝트 소개",
                content: "다양한 그림 스타일과 강사들을 통해 학습을 제공하는 다국적 학원 플랫폼입니다."
            },
            {
                id: "업적",
                content: "전반적인 서비스 구상과 웹페이지의 디자인, 기능 개발 및 운영을 담당하였습니다.\n일러스트 학원의 특성을 살려 형식적인 틀을 갖춰 디자인함과 동시에 단조롭지 않게 UI를 구상하였습니다.\n사용자의 피드백을 통해 끊임없이 고민하고 수정하여 UX경험을 개선해왔습니다.\n검색엔진최적화(SEO)를 통해 검색엔진의 상단에 표출될 수 있도록 노력하였습니다."
            },
            {
                id: "트러블슈팅_01",
                content: "이미지 슬라이드 구현 중 현재 이미지가 fade-out되는 애니메이션 효과가 나타나지 않고 갑자기 사라지는 문제 발생\nstate를 한 개가 아니라 현재 이미지와 이전 이미지, 이 두 가지로 저장하고 관리하기로 결정\n현재 등장해야하는 이미지와 이전에 등장했던 이미지를 담아 관리하는 state를 만들어 계획한 대로 이미지들을\nuseEffect()와 setTimeout() 을 이용해 fade-in, fade-out 효과를 나눠서 보이도록 설정하여 해결완료!"
            },
            {
                id: "트러블슈팅_02",
                content: "이미지 자료가 많다 보니 처음 사이트를 입장할 때 첫 페이지 로딩 시간이 길어지는 문제 발생\nReact는 싱글 페이지 애플리케이션(SPA, Single Page Application) 방식이기 때문에 발생한 것, react-router-dom에 존재하는 lazy() 함수를 사용하기로 결정\nlazy() 함수를 사용함으로써 모든 페이지가 아닌 해당 컴포넌트만이 로드되게 하여 첫 페이지 입장 시 로딩 시간을 크게 단축시킴으로써 실제 Lighthouse 검사의 성능을 60에서 74로 향상!"
            },
        ]
    },
    {
        id: 3,
        project: "PEEPPO(핍포)",
        thumbnail: PEEPPO,
        period: "2023.07 ~ 2023.09",
        information: "물물거래 플랫폼",
        introduce: "유저 간 물물교환 및 경매시스템을 이용한 물물 거래 플랫폼",
        url: "https://github.com/seungjaelee2684/PEEPPO-front-end",
        skill: "React, TypeScript,\nAxios, React-Query, Recoil, Styled-Components,\nWebSocket, Stomp",
        part: "물물교환 및 경매시스템과 레이팅/평가게임 시스템들의 화면 제작과\n기능 구현을 담당",
        game: [
            {
                id: "프로젝트 소개",
                content: "유저 간 물물교환 및 경매시스템을 이용한 물물 거래 플랫폼입니다."
            },
            {
                id: "업적",
                content: "물물교환 및 경매시스템과 레이팅/평가게임 시스템들의 화면 제작과 기능 구현을 담당하였습니다.\n핵심적인 기능들이 직관성이 떨어진다는 유저들의 피드백을 반영하여 내비게이션바의 디자인을 개선한 바 있습니다.\n레이팅 게임 부분의 에러 및 상태 메세지를 추가하여 게임 이용에 불편함이 없게 구현하였습니다."
            },
            {
                id: "트러블슈팅_01",
                content: "실시간 알림을 위해 SSE통신 연결을 시도하던 중 연결시도가 무한정으로 일어나는 이슈가 발생.\nstate에 response값이 저장이 되면서 state값이 변화가 일어나 useEffect훅에 의해 컴포넌트가 무한정으로 리렌더링이 됨\n같은 컴포넌트내에 state를 이용하면 무한 렌더링에 빠질 수 있기에 전역으로 사용하기로 결정"
            },
        ]
    },
    {
        id: 4,
        project: "ALDDALDDAL(알딸딸)",
        thumbnail: ALDDALDDAL,
        period: "2023.06 ~ 2023.06",
        information: "칵테일 레시피 공유 플랫폼",
        introduce: "모두가 함께 레시피를 공유할 수 있는 칵테일 플랫폼",
        url: "https://github.com/seungjaelee2684/project-alddalddal-front",
        skill: "React, JavaScript,\nAxios, React-Query, Styled-Components",
        part: "로그인/회원가입, 메인페이지 내 칵테일 리스트의 화면 구성과\n마이페이지, 댓글 기능 구현을 담당",
        game: [
            {
                id: "프로젝트 소개",
                content: "모두가 함께 레시피를 공유할 수 있는 칵테일 플랫폼입니다."
            },
            {
                id: "업적",
                content: "로그인/회원가입, 메인페이지 내 칵테일 리스트의 화면 구성과 마이페이지, 댓글 기능 구현을 담당하였습니다.\n기존 와이어프레임에선 존재하지 않던 댓글의 필터, 헤더에 유저 닉네임 표출, 마이페이지 및 로그인/회원가입페이지의 디자인 요소를 추가, 수정하여 사용자의 UX/UI경험을 개선하였습니다."
            },
        ]
    },
];