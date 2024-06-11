import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Background2 from '../../assets/images/backgroundWeb.jpg';
import { MainBackground } from '../../pages/SitePage';

const Contact = () => {

    const form = useRef<HTMLFormElement>(null);
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    console.log(publicKey);

    const [inputValue, setInputValue] = useState<any>({
        to_name: "이승재",
        from_name: "",
        from_email: "",
        message: ""
    });
    const { to_name, from_name, from_email, message } = inputValue;

    const onChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    };

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm("silverfrog", "template_w5pdeyj", form.current, publicKey)
            .then(
                () => {
                    alert("메일 전송이 완료되었습니다!");
                },
                (error: any) => {
                    alert("메일 전송 실패...!");
                    console.log(error, publicKey);
                }
            );
    };

    return (
        <MainBackground id="contact" src={Background2}>
            <FormContainer id="contact" ref={form} onSubmit={sendEmail}>
                <Title>CONTACT</Title>
                <FirstContainer>
                    <Wrapper>
                        <Label>To</Label>
                        <DefaultInput
                            name='to_name'
                            value={to_name}
                            onChange={(e: any) => e.preventDefault()}
                             />
                    </Wrapper>
                    <Wrapper>
                        <Label>From your name</Label>
                        <ShortInput
                            name='from_name'
                            value={from_name}
                            placeholder="이름을 입력해주세요."
                            autoComplete='off'
                            onChange={onChangeHandler}
                             />
                    </Wrapper>
                    <Wrapper>
                        <Label>E-mail</Label>
                        <ShortInput
                            type='email'
                            name='from_email'
                            value={from_email}
                            placeholder="회신 받을 이메일을 입력해주세요."
                            autoComplete='off'
                            onChange={onChangeHandler}
                             />
                    </Wrapper>
                    <Button type='submit' value="Send" />
                </FirstContainer>
                <Wrapper style={{ width: "100%", height: "100%" }}>
                    <Label>Content</Label>
                    <ContentInput
                        name='message'
                        value={message}
                        placeholder="메일 내용을 입력해주세요."
                        autoComplete='off'
                        onChange={onChangeHandler}
                         />
                </Wrapper>
            </FormContainer>
        </MainBackground>
    )
};

const FormContainer = styled.form`
    width: 1320px;
    height: 400px;
    border-radius: 16px;
    background-color: #222020bc;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    padding: 20px;

    @media screen and (max-width: 1320px) {
        width: 96%;
    };
`;

const Title = styled.h1`
    font-size: 26px;
    line-height: normal;
`;

const FirstContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: end;
    gap: 20px;

    @media screen and (max-width: 836px) {
        flex-direction: column;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 12px;
`;

const Label = styled.label`
    font-size: 16px;
    line-height: 120%;
`;

const DefaultInput = styled.input`
    outline: none;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #ADADAD;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    font-weight: 600;
    width: 100%;
    color: #ADADAD;
    cursor: default;
`;

const ShortInput = styled.input`
    outline: none;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #ADADAD;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    font-weight: 600;

    &:hover {
        border: 1px solid #2186addc;
    }

    &:active {
        border: 1px solid #2186addc;
    }
`;

const ContentInput = styled.textarea`
    width: 100%;
    height: 100%;
    outline: none;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #ADADAD;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
`;

const Button = styled.input`
    min-width: 140px;
    height: 48px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #47418e;
    color: #FEFEFE;
    font-size: 18px;
    font-weight: 700;
    line-height: 120%;
    cursor: pointer;
`;

export default Contact;