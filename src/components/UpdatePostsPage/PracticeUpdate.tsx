import React from 'react'

interface PracticeUpdateProps {
  postId: string;
  isPractice: boolean;
  option: any;
  dropdownValue: string | null;
  setDropdownValue: React.Dispatch<React.SetStateAction<string | null>>;
};


const PracticeUpdate = ({ postId, isPractice, option, dropdownValue, setDropdownValue }: PracticeUpdateProps) => {
  return (
    <div>PracticeUpdate</div>
  )
};

export default PracticeUpdate;