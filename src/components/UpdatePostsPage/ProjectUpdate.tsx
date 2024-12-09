import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/config/configureStore';
import { supabase } from '../../utils/Supabase';
import { Button, ButtonWrapper, DropdownLink, Expired, FormLane, Important, InsertFormContainer, LaneInput, TagButton, TagWrapper } from '../InsertPostPage/ProjectInsert';
import DropDownMenu from '../common/DropDownMenu';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { textLight } from '../../styles/colorToken';
import ReactQuill from 'react-quill';
import { formats, modules } from '../../utils/Editor';

interface ProjectUpdateProps {
  postId: string;
  isPractice: boolean;
  option: any;
  dropdownValue: string | null;
  setDropdownValue: React.Dispatch<React.SetStateAction<string | null>>;
  stackOption: any;
  stackValue: number[];
  setStackValue: React.Dispatch<React.SetStateAction<number[]>>;
};

const ProjectUpdate = ({
  postId,
  isPractice,
  option,
  dropdownValue,
  setDropdownValue,
  stackOption,
  stackValue,
  setStackValue
}: ProjectUpdateProps) => {

  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.darkMode);

  const [prevSelect, setPrevSelect] = useState<any>(null);
  const [contentData, setContentData] = useState<string>('');
  const [insertData, setInsertData] = useState<{
    title: string,
    start_date: string,
    end_date: string,
    role: string,
    url: string,
    description: string,
    member: number | string,
    work: string
  }>({
    title: '',
    start_date: '',
    end_date: '',
    role: '',
    url: '',
    description: '',
    member: 0,
    work: ''
  });
  const {
    title,
    start_date,
    end_date,
    role,
    url,
    description,
    member,
    work
  } = insertData;
  console.log('입력값', insertData);

  const onChangeInsertHandler = (e: any) => {
    const { name, value } = e.target;
    if (name === 'member') {
      const input = value.replace(/[^0-9]/g, '');
      setInsertData((prevState) => ({
        ...prevState,
        member: input
      }));
    } else {
      setInsertData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  };

  const onChangeContentHandler = (content: string) => {
    setContentData(content);
  };

  const onClickSaveHandler = (e: any) => {
    e.preventDefault();
    if (title.length <= 0) return alert('프로젝트 명을 입력해주세요.');
    if (!dropdownValue) return alert('소속를 선택해주세요.');
    if (stackValue.length <= 0) return alert('기술 스택을 선택해주세요.');
    if (start_date.length <= 0) return alert('시작일을 입력해주세요.');
    if (end_date.length <= 0) return alert('종료일을 입력해주세요.');
    if (!member) return alert('팀원 수를 입력해주세요.');
    if (url.length <= 0) return alert('링크를 입력해주세요.');
    if (role.length <= 0) return alert('역할을 입력해주세요.');
    if (work.length <= 0) return alert('담당 업무를 입력해주세요.');

    const uploadData = {
      ...insertData,
      content: contentData,
      connection: dropdownValue,
      stack: stackValue,
      type: 'projects'
    };

    const uploadFetch = async () => {
      const { data, error } = await supabase
        .from('projects')
        .update(uploadData)
        .eq('id', postId)
        .select();

      if (error) {
        alert('저장에 실패하였습니다.');
        throw error;
      };

      if (prevSelect !== dropdownValue) {
        const [prev, present] = await Promise.all([
          supabase.from('projects_connection').select('count').eq('connection', prevSelect).single(),
          supabase.from('projects_connection').select('count').eq('connection', dropdownValue).single()
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
            supabase.from('projects_connection').update({ count: prev.data.count - 1 }).eq('connection', prevSelect),
            supabase.from('projects_connection').update({ count: present.data.count + 1 }).eq('connection', dropdownValue)
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


      navigate(`/jaelog/projects`);
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
          .from('projects')
          .select('*')
          .eq('id', postId)
          .single();

        if (error) throw error;

        setInsertData({
          title: data.title,
          start_date: data.start_date,
          end_date: data.end_date,
          role: data.role,
          url: data.url,
          description: data.description,
          member: data.member,
          work: data.work
        });
        setContentData(data.content);
        setPrevSelect(data.connection);
        setDropdownValue(data.connection);
        setStackValue(data.stack);
        console.log('성공');
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error)
      };
    };

    updateData();
  }, []);

  console.log(stackValue);

  return (
    <InsertFormContainer>
      <FormLane>
        <Expired>
          프로젝트명
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='title'
          value={title}
          placeholder='프로젝트 명을 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          소속
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
          소속 추가/수정
        </DropdownLink>
      </FormLane>
      <FormLane>
        <Expired>
          기술스택
          <Important>
            *
          </Important>
        </Expired>
        <TagWrapper>
          {stackOption?.map((item: any, index: number) =>
            <TagButton
              key={index}
              $color={(stackValue.includes(item?.id)) ? '#ffffff' : textLight[theme]}
              $bgcolor={(stackValue.includes(item?.id)) ? '#ee6e6e' : 'transparent'}
              onClick={() => {
                if (stackValue.includes(item?.id)) {
                  const stacks = stackValue.filter((v: any) => v !== item?.id);
                  setStackValue(stacks);
                } else {
                  setStackValue([...stackValue, item?.id]);
                };
              }}>
              {item?.stack}
            </TagButton>
          )}
        </TagWrapper>
      </FormLane>
      <FormLane>
        <Expired>
          시작일
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='200px'
          name='start_date'
          value={start_date}
          placeholder="'.' 포함 [0000.00.00]"
          onChange={onChangeInsertHandler} />
        <Expired>
          종료일
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='200px'
          name='end_date'
          value={end_date}
          placeholder="'.' 포함 [0000.00.00]"
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          팀원수
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='200px'
          name='member'
          value={(member === 0) ? '' : member}
          placeholder='0명 (숫자만 입력 가능)'
          onChange={onChangeInsertHandler} />
        <Expired>
          명
        </Expired>
      </FormLane>
      <FormLane>
        <Expired>
          주요링크
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='url'
          value={url}
          placeholder='링크를 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          역할
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='role'
          value={role}
          placeholder='역할을 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          프로젝트 설명
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='description'
          value={description}
          placeholder='프로젝트에 대한 설명을 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          담당 업무
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='work'
          value={work}
          placeholder='담당한 업무에 대해 입력해주세요.'
          onChange={onChangeInsertHandler} />
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

export default ProjectUpdate;