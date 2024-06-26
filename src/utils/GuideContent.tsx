type GuideContentType = {
  id: string,
  content: string[]
};

export const guideContent: GuideContentType[] = [
  {
    id: "loby",
    content: [
      "게임을 시작하기 전,\n원하시는 캐릭터를 먼저 선택해주세요!",
      "마음에 드는 캐릭터를 누른 후,\n아래에 활성화되는 버튼을 눌러 캐릭터에 접속할 수 있습니다.",
    ]
  },
  {
    id: "about",
    content: [
      "행동특성 아이콘에 마우스를 올려\n캐릭터의 특성을 확인해보세요!",
      "이름 옆 돋보기 아이콘을 눌러 캐릭터의 정보를 확인할 수 있습니다.",
      "모든 정보를 확인했다면 아래에\n'스킬 장착하러 가기' 버튼을 눌러 다음 단계로 넘어가주세요."
    ]
  },
  {
    id: "skill",
    content: [
      "스킬 아이콘을 누르면 장착스킬의 퍼센트가 올라갑니다.",
      "모든 스킬을 장착해 100%를 완성시켰을 때,\n'스킬 장착 완료' 버튼을 눌러 다음으로 넘어가주세요.",
    ]
  },
  {
    id: "dungeon",
    content: [
      "던전 카드(프로젝트)에 마우스를 올리면 카드가 회전을 해요!",
      "카드를 누르면 해당 던전(프로젝트)의\n정보를 확인해볼 수 있습니다.",
      "원하는 던전을 선택해 게임을 시작해보세요!"
    ]
  },
];