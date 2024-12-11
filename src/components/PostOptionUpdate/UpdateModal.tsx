import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config/configureStore';
import { commonBgColor, commonTextColor, textLight } from '../../styles/colorToken';
import { AddButton } from '../../pages/PostOptionUpdate';
import { supabase } from '../../utils/Supabase';
import { GrClose } from 'react-icons/gr';

interface UpdateModalProps {
    update: any;
    setUpdate: React.Dispatch<React.SetStateAction<any>>;
    success: boolean;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateModal = ({ update, setUpdate, success, setSuccess }: UpdateModalProps) => {

    const theme = useSelector((state: RootState) => state.darkMode);
    const { id, type, text } = update;

    const onSubmitUpdateHandler = (e: any) => {
        e.preventDefault();
        if (!id || !type || !text || text?.length <= 0) return;

        const updateFetch = async () => {
            try {
                const { error } = await supabase
                    .from(`${type}_${(type === 'projects') ? 'connection' : 'category'}`)
                    .update((type === 'projects') ? { connection: text } : { category: text })
                    .eq('id', id);

                if (error) {
                    alert('저장에 실패하였습니다.');
                    throw error
                };
                
                setSuccess(!success);
                setUpdate({ id: null, type: null, text: null });
            } catch (error) {
                alert('오류가 발생하였습니다.');
                console.error("Error fetching paginated data from Supabase: ", error);
            };
        };

        const isUpdate = window.confirm('이대로 수정을 완료하시겠습니까?');
        if (isUpdate) updateFetch();
    };

    return (
        <Background onClick={() => setUpdate({ id: null, type: null, text: null })}>
            <ModalContainer
                onClick={(e: any) => e.stopPropagation()}
                onSubmit={onSubmitUpdateHandler}
                $bgcolor={commonBgColor[theme]}>
                <CloseButton
                    $color={commonTextColor[theme]}
                    $hover={textLight[theme]}
                    onClick={() => setUpdate({ id: null, type: null, text: null })}>
                    <GrClose size={24} />
                </CloseButton>
                <ModalTitle $color={commonTextColor[theme]}>
                    {(type === 'projects') ? '프로젝트' : '공부'}
                </ModalTitle>
                <ModalInput
                    $color={commonTextColor[theme]}
                    value={text}
                    placeholder='이름을 입력해주세요.'
                    onChange={(e: any) => setUpdate({ ...update, text: e.target.value })} />
                <AddButton onClick={onSubmitUpdateHandler}>
                    수정 완료
                </AddButton>
            </ModalContainer>
        </Background>
    )
};

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 25;
    background-color: #00000080;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.form<{ $bgcolor: string }>`
    width: 450px;
    height: 250px;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: relative;
    gap: 24px;
    box-shadow: 0px 0px 8px 0px #00000080;
    background-color: ${(props) => props.$bgcolor};
`;

const ModalTitle = styled.label<{ $color: string }>`
    font-size: 24px;
    font-weight: 700;
    padding-left: 8px;
    color: ${(props) => props.$color};
`;

const ModalInput = styled.input<{ $color: string }>`
    width: 100%;
    height: 38px;
    outline: none;
    padding: 0px 12px;
    border: 1px solid;
    color: ${(props) => props.$color};
    font-size: 14px;
    border-radius: 4px;
    background-color: transparent;
`;

const CloseButton = styled.button<{ $color: string, $hover: string }>`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$color};
    background-color: transparent;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.$hover};
    }
`;

export default UpdateModal;