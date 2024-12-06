import React, { useMemo, useState } from 'react'
import styled from 'styled-components';
import { Button, ButtonWrapper, DropdownLink, Expired, FormLane, Important, InsertFormContainer, LaneInput, LaneTextarea } from './ProjectInsert';
import DropDownMenu from '../common/DropDownMenu';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from '../../utils/Editor';
import { supabase } from '../../utils/Supabase';
import { FaRegPenToSquare } from 'react-icons/fa6';

interface PracticeInsertProps {
  isPractice: boolean;
  option: any;
  dropdownValue: string | null;
  setDropdownValue: React.Dispatch<React.SetStateAction<string | null>>;
};

const PracticeInsert = ({ isPractice, option, dropdownValue, setDropdownValue }: PracticeInsertProps) => {

  const [insertData, setInsertData] = useState<{
    title: string,
    content: string
  }>({
    title: '',
    content: ''
  });
  const {
    title,
    content
  } = insertData;
  console.log('입력값', insertData);

  const onChangeTitleHandler = (e: any) => {
    setInsertData({
      ...insertData,
      title: e.target.value
    });
  };

  const onChangeContentHandler = (content: string) => {
    setInsertData({
      ...insertData,
      content: content
    });
  };

  const onSubmitUploadHandler = (e: any) => {
    e.preventDefault();
    if (title.length <= 0) return alert('제목을 입력해주세요.');
    if (!dropdownValue) return alert('카테고리를 선택해주세요.');
    const uploadData = {
      ...insertData,
      category: dropdownValue,
      type: (isPractice) ? 'practices' : 'projects'
    };

    const isUpload = window.confirm('저장하시겠습니까?');

    const uploadFetch = async () => {
      try {
        const { data, error } = await supabase
          .from('practices')
          .insert([uploadData])
          .select();

        if (error) {
          alert('저장에 실패하였습니다.');
          throw error;
        };
      } catch (error) {
        alert('저장에 실패하였습니다.');
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    if (isUpload) {
      uploadFetch();
    };
  };

  return (
    <InsertFormContainer onSubmit={onSubmitUploadHandler}>
      <FormLane>
        <Expired>
          제목
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='title'
          value={title}
          placeholder='제목을 입력해주세요.'
          onChange={onChangeTitleHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          카테고리
          <Important>
            *
          </Important>
        </Expired>
        <DropDownMenu
          option={option}
          value={dropdownValue}
          setValue={setDropdownValue}
          type={isPractice} />
        <DropdownLink href='/jaelog/option/update'>
          <FaRegPenToSquare />
          소속 업데이트
        </DropdownLink>
      </FormLane>
      <FormLane>
        <Expired>
          세부 내용
          <Important>
            *
          </Important>
        </Expired>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={onChangeContentHandler}
          modules={modules}
          formats={formats}
          style={{
            width: '100%',
            height: '500px'
          }} />
        {/* <LaneTextarea
          name='content'
          value={content}
          placeholder='내용을 입력해주세요.'
           /> */}
      </FormLane>
      <ButtonWrapper>
        <Button onClick={onSubmitUploadHandler}>
          저장
        </Button>
      </ButtonWrapper>
    </InsertFormContainer>
  )
};

export default PracticeInsert;