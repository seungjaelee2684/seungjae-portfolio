import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { supabase } from '../utils/Supabase';
import { HiMiniPencilSquare } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { GoPlus } from "react-icons/go";

const PostOptionUpdate = () => {

  const [option, setOption] = useState<any>({
    connection: null,
    category: null
  });
  const [addOption, setAddOption] = useState<any>({
    addConnection: null,
    addCategory: null
  });
  const { connection, category } = option;
  const { addConnection, addCategory } = addOption;

  const onClickAddHandler = (type: string) => {
    if (type === 'project') {
      if (addConnection) return alert('추가한 내용을 먼저 저장완료 해주시기 바랍니다.');
      setAddOption({ ...addOption, addConnection: '소속1' });
    } else {
      if (addCategory) return alert('추가한 내용을 먼저 저장완료 해주시기 바랍니다.');
      setAddOption({ ...addOption, addCategory: '카테고리1' });
    }
  };

  const onChangeAddHandler = (e: any) => {
    const { name, value } = e.target;
    setAddOption({
      ...addOption,
      [name]: value
    });
  };

  const onClickSaveHandler = (type: string) => {
    if ((type === 'project') && (addConnection !== null)) {
      const addFetch = async () => {
        try {
          const { data, error } = await supabase
            .from('projects_connection')
            .insert([
              { connection: addConnection }
            ])
            .select();

            if (error) {
              alert('저장에 실패하였습니다.\n다시 시도해주세요.');
              throw error
            };
        } catch (error) {
          alert('저장에 실패하였습니다.\n다시 시도해주세요.');
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      };

      const isAdd = window.confirm('저장을 완료하시겠습니까?');
      if (isAdd) addFetch();
    } else if ((type === 'practice') && (addCategory !== null)) {
      const addFetch = async () => {
        try {
          const { data, error } = await supabase
            .from('practices_category')
            .insert([
              { category: addCategory }
            ])
            .select();

            if (error) {
              alert('저장에 실패하였습니다.\n다시 시도해주세요.');
              throw error
            };
        } catch (error) {
          alert('저장에 실패하였습니다.\n다시 시도해주세요.');
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      };

      const isAdd = window.confirm('저장을 완료하시겠습니까?');
      if (isAdd) addFetch();
    };
  };

  const onClickDeleteHandler = (type: string, id: number) => {
    if (type === 'project') {
      const deleteFetch = async () => {
        try {
          const { error } = await supabase
            .from('projects_connection')
            .delete()
            .eq('id', id);
  
            if (error) {
              alert('삭제에 실패하였습니다.\n다시 시도해주세요.');
              throw error
            };
        } catch (error) {
          alert('삭제에 실패하였습니다.\n다시 시도해주세요.');
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      };
  
      const isDelete = window.confirm('삭제하시겠습니까?');
      if (isDelete) deleteFetch();
    } else {
      const deleteFetch = async () => {
        try {
          const { error } = await supabase
            .from('practices_category')
            .delete()
            .eq('id', id);
  
            if (error) {
              alert('삭제에 실패하였습니다.\n다시 시도해주세요.');
              throw error
            };
        } catch (error) {
          alert('삭제에 실패하였습니다.\n다시 시도해주세요.');
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      };
  
      const isDelete = window.confirm('삭제하시겠습니까?');
      if (isDelete) deleteFetch();
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [connection, category] = await Promise.all([
          supabase.from('projects_connection').select('*').order('created_at', { ascending: false }),
          supabase.from('practices_category').select('*').order('created_at', { ascending: false })
        ]);

        if (connection.error) throw connection.error;
        if (category.error) throw category.error;

        setOption({
          connection: connection.data,
          category: category.data
        });
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    fetchData();
  }, []);

  return (
    <OptionUpdateContainer>
      <ColumnLane>
        <ColumnTitle>
          소속 (프로젝트)
        </ColumnTitle>
        {connection?.map((item: any, index: number) =>
          <RowLane key={index}>
            <OptionTitle>
              {item?.connection}
            </OptionTitle>
            <IconWrapper>
              <IconBox>
                <HiMiniPencilSquare />
              </IconBox>
              <IconBox onClick={() => onClickDeleteHandler('project', item?.id)}>
                <GrClose />
              </IconBox>
            </IconWrapper>
          </RowLane>)}
        {(addConnection !== null)
          && <RowLane>
            <UpdateInput
              name='addConnection'
              value={addConnection}
              placeholder='새로운 소속을 입력해주세요.'
              autoComplete='off'
              onChange={onChangeAddHandler} />
            <IconWrapper>
              <IconBox onClick={() => setAddOption({ ...addOption, addConnection: null })}>
                <GrClose />
              </IconBox>
            </IconWrapper>
          </RowLane>}
        <AddRow onClick={() => onClickAddHandler('project')}>
          <GoPlus />
        </AddRow>
        <AddButton onClick={() => onClickSaveHandler('project')}>
          저장
        </AddButton>
      </ColumnLane>
      <ColumnLane>
        <ColumnTitle>
          카테고리 (공부)
        </ColumnTitle>
        {category?.map((item: any, index: number) =>
          <RowLane key={index}>
            <OptionTitle>
              {item?.category}
            </OptionTitle>
            <IconWrapper>
              <IconBox>
                <HiMiniPencilSquare />
              </IconBox>
              <IconBox onClick={() => onClickDeleteHandler('practice', item?.id)}>
                <GrClose />
              </IconBox>
            </IconWrapper>
          </RowLane>)}
        {(addCategory !== null)
          && <RowLane>
            <UpdateInput
              name='addCategory'
              value={addCategory}
              placeholder='새로운 카테고리를 입력해주세요.'
              autoComplete='off'
              onChange={onChangeAddHandler} />
            <IconWrapper>
              <IconBox onClick={() => setAddOption({ ...addOption, addCategory: null })}>
                <GrClose />
              </IconBox>
            </IconWrapper>
          </RowLane>}
        <AddRow onClick={() => onClickAddHandler('practice')}>
          <GoPlus />
        </AddRow>
        <AddButton onClick={() => onClickSaveHandler('practice')}>
          저장
        </AddButton>
      </ColumnLane>
    </OptionUpdateContainer>
  )
};

const OptionUpdateContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 60px;
`;

const ColumnLane = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 12px;
`;

const ColumnTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  user-select: none;
  margin: 20px 0px;
`;

const RowLane = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cacaca;
  padding: 16px;
`;

const OptionTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: #616161;
  background-color: transparent;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }
`;

const AddRow = styled.button`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #616161;
  border: 1px solid #cacaca;
  font-size: 24px;
  background-color: transparent;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
    border: 1px solid #ee6e6e;
  }
`;

const UpdateInput = styled.input`
  width: 80%;
  height: 34px;
  border: 1px solid #616161;
  outline: none;
  padding: 12px;
  font-size: 14px;
  
  &::placeholder {
    color: #cacaca;
  }

  &:hover {
    border: 1px solid #222020;
  }

  &:focus {
    border: 1px solid #ee6e6e;
  }
`;

const AddButton = styled.button`
  width: 100%;
  height: 38px;
  border-radius: 4px;
  background-color: #ee6e6e;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
`;

export default PostOptionUpdate;