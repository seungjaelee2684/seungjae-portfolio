import React, { useEffect, useState } from 'react'
import { Button, ButtonWrapper, DropdownLink, Expired, FormLane, Important, InsertFormContainer, LaneInput } from '../InsertPostPage/ProjectInsert';
import DropDownMenu from '../common/DropDownMenu';
import { FaRegPenToSquare } from 'react-icons/fa6';
import ReactQuill from 'react-quill';
import { formats, modules } from '../../utils/Editor';
import { supabase } from '../../utils/Supabase';
import { useNavigate } from 'react-router-dom';

interface PracticeUpdateProps {
  postId: string;
  isPractice: boolean;
  option: any;
  dropdownValue: string | null;
  setDropdownValue: React.Dispatch<React.SetStateAction<string | null>>;
};


const PracticeUpdate = ({ postId, isPractice, option, dropdownValue, setDropdownValue }: PracticeUpdateProps) => {

  const navigate = useNavigate();

  const [prevSelect, setPrevSelect] = useState<any>(null);
  const [titleData, setTitleData] = useState<string>('');
  const [contentData, setContentData] = useState<string>('');

  const onChangeContentHandler = (content: string) => {
    setContentData(content);
  };

  const onClickSaveHandler = (e: any) => {
    e.preventDefault();
    if (titleData.length <= 0) return alert('프로젝트 명을 입력해주세요.');
    if (!dropdownValue) return alert('소속를 선택해주세요.');

    const uploadData = {
      title: titleData,
      content: contentData,
      category: dropdownValue,
      type: 'practices'
    };

    const uploadFetch = async () => {
      const { data, error } = await supabase
        .from('practices')
        .update(uploadData)
        .eq('id', postId)
        .select();

      if (error) {
        alert('저장에 실패하였습니다.');
        throw error;
      };

      if (prevSelect !== dropdownValue) {
        const [prev, present] = await Promise.all([
          supabase.from('practices_category').select('count').eq('category', prevSelect).single(),
          supabase.from('practices_category').select('count').eq('category', dropdownValue).single()
        ]);

        if (prev.error) {
          alert('저장에 실패하였습니다.');
          throw prev.error;
        };
        if (present.error) {
          alert('저장에 실패하였습니다.');
          throw present.error;
        };

        try {
          const [prevResult, presentResult] = await Promise.all([
            supabase.from('practices_category').update({ count: prev.data.count - 1 }).eq('category', prevSelect),
            supabase.from('practices_category').update({ count: present.data.count + 1 }).eq('category', dropdownValue)
          ]);

          if (prevResult.error) {
            alert('저장에 실패하였습니다.');
            throw prevResult.error;
          };
          if (presentResult.error) {
            alert('저장에 실패하였습니다.');
            throw presentResult.error;
          };
        } catch (error) {
          alert('오류가 발생했습니다.');
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      };


      navigate(`/jaelog/practices`);
    };

    const isUpload = window.confirm('저장하시겠습니까?');

    if (isUpload) {
      uploadFetch();
    };
  };

  useEffect(() => {
    const updateData = async () => {
      if (!postId) return;
      try {
        const { data, error } = await supabase
          .from('practices')
          .select('*')
          .eq('id', postId)
          .single();

        if (error) throw error;

        setTitleData(data.title);
        setContentData(data.content);
        setPrevSelect(data.category);
        setDropdownValue(data.category);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error)
      };
    };

    updateData();
  }, []);

  return (
    <InsertFormContainer>
      <FormLane>
        <Expired>
          제목
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          value={titleData}
          placeholder='제목을 입력해주세요.'
          onChange={(e: any) => setTitleData(e.target.value)} />
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
          카테고리 추가/수정
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
          value={contentData}
          onChange={onChangeContentHandler}
          modules={modules}
          formats={formats}
          style={{
            width: '100%',
            height: '500px'
          }} />
      </FormLane>
      <ButtonWrapper>
        <Button onClick={onClickSaveHandler}>
          저장
        </Button>
      </ButtonWrapper>
    </InsertFormContainer>
  )
};

export default PracticeUpdate;