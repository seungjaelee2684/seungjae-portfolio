import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {

  const navigate = useNavigate();

  const idValue = process.env.REACT_APP_MY_ID;
  const passwordValue = process.env.REACT_APP_MY_PASSWORD;

  const [login, setLogin] = useState<{
    id: string,
    password: string
  }>({
    id: '',
    password: ''
  });
  const { id, password } = login;

  const onChangeLoginHandler = (e: any) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const onSubmitLoginHandler = (e: any) => {
    e.preventDefault();

    if ((id !== idValue) || (password !== passwordValue)) return alert('아이디 혹은 비밀번호가 다릅니다.\n다시 입력해주세요.');
    const now = new Date();
    const expired = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = `sj-lg=${now.toISOString()}; expires=${expired.toUTCString()}; path=/`;
    navigate('/jaelog');
  };

  return (
    <LoginPageLayout>
      <LoginContainer onSubmit={onSubmitLoginHandler}>
        <Title>
          SIGN IN
        </Title>
        <InputWrapper>
          <InputLabel>
            ID:
          </InputLabel>
          <InputTag
            type='text'
            name='id'
            value={id}
            placeholder='아이디'
            onChange={onChangeLoginHandler} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>
            PASSWORD:
          </InputLabel>
          <InputTag
            type='password'
            name='password'
            value={password}
            placeholder='패스워드'
            onChange={onChangeLoginHandler} />
        </InputWrapper>
        <LoginButton onClick={onSubmitLoginHandler}>
          LOGIN
        </LoginButton>
      </LoginContainer>
    </LoginPageLayout>
  )
};

const LoginPageLayout = styled.article`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222020;
`;

const LoginContainer = styled.form`
  width: 500px;
  min-height: 350px;
  border: 1px solid #b8b8b8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  user-select: none;
  padding: 60px;

  @media screen and (max-width: 500px) {
    width: 94%;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InputLabel = styled.label`
  min-width: 70px;
  font-size: 12px;
  font-weight: 600;
  text-align: start;
`;

const InputTag = styled.input`
  width: 100%;
  height: 28px;
  border: 1px solid #b8b8b8;
  display: flex;
  align-items: center;
  outline: none;
  border-radius: 4px;
  padding: 0px 12px;
  transition: all 0.3s;
  box-sizing: border-box;

  &::placeholder {
    color: #b8b8b8;
  }

  &:hover {
    border: 1px solid #525050;
  }

  &:focus {
    border: 1px solid #ee6e6e;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 34px;
  margin-top: 24px;
  border-radius: 4px;
  background-color: #ee6e6e;
  color: #ffffff;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ec8e8e;
  }

  &:active {
    background-color: #bb4d4d;
  }
`;

export default LoginPage;