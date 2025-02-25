import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Background2 from '../../assets/images/backgroundWeb.webp';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

const Contact = () => {

    type contactInfoType = {
        title: string,
        content: string,
        icon: React.ReactNode,
        link: boolean
    };

    const contactInfo: contactInfoType[] = [
        { title: "GITHUB", content: "https://github.com/seungjaelee2684", icon: <FaGithub />, link: true },
        { title: "ADDRESS", content: "대구광역시 북구 매전로4길 9 매천센트럴파크 205동 401호", icon: <FaLocationDot />, link: false },
        { title: "PHONE", content: "010-6535-5635", icon: <FaPhoneAlt />, link: false },
        { title: "EMAIL", content: "sean2684@naver.com", icon: <IoMail />, link: false }
    ];

    const form = useRef<HTMLFormElement>(null);
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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
                    console.error(error);
                }
            );
    };

    return (
        <ContactOutWrapper id="contact" src={Background2}>
            <ContactContainer>
                <ContactInfoContainer>
                    {contactInfo?.map((item: contactInfoType, index: number) => {
                        return (
                            <LaneContainer key={index}>
                                <Icon>
                                    {item.icon}
                                </Icon>
                                <TextWrapper>
                                    <StrongText>
                                        {item.title}
                                    </StrongText>
                                    {(item.link)
                                        ? <LinkText onClick={() => window.open(item.content)}>
                                            {item.content}
                                        </LinkText>
                                        : <Text>
                                            {item.content}
                                        </Text>}
                                </TextWrapper>
                            </LaneContainer>
                        )
                    })}
                </ContactInfoContainer>
                <FormContainer id="contact" ref={form} onSubmit={sendEmail}>
                    <Title>LEAVE US MESSAGE</Title>
                    <DefaultInput
                        name='to_name'
                        value="to 이승재"
                        onChange={(e: any) => e.preventDefault()}
                    />
                    <ShortInput
                        name='from_name'
                        value={from_name}
                        placeholder="Your Name"
                        autoComplete='off'
                        onChange={onChangeHandler}
                    />
                    <ShortInput
                        type='email'
                        name='from_email'
                        value={from_email}
                        placeholder="Your E-mail"
                        autoComplete='off'
                        onChange={onChangeHandler}
                    />
                    <ContentInput
                        name='message'
                        value={message}
                        placeholder="Message"
                        autoComplete='off'
                        onChange={onChangeHandler}
                    />
                    <Button type='submit' value="Send" />
                </FormContainer>
            </ContactContainer>
        </ContactOutWrapper>
    )
};

const ContactOutWrapper = styled.div<{ src: string }>`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    color: #FEFEFE;
    position: relative;
`;

const ContactContainer = styled.section`
    width: 1320px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 1320px) {
        width: 96%;
    };

    @media screen and (max-width: 836px) {
        flex-direction: column;
        gap: 16px;
    };

    @media screen and (max-width: 500px) {
        gap: 10px;
    };
`;

const ContactInfoContainer = styled.div`
    width: 45%;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222020bc;
    padding: 20px;
    gap: 45px;
    box-sizing: border-box;

    @media screen and (max-width: 836px) {
        width: 100%;
        height: 300px;
        gap: 20px;
    };

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 200px;
        gap: 10px;
    };
`;

const LaneContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 836px) {
        gap: 16px;
    }
`;

const Icon = styled.div`
    font-size: 30px;

    @media screen and (max-width: 1320px) {
        font-size: 24px;
    }

    @media screen and (max-width: 836px) {
        font-size: 20px;
    }

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 12px;

    @media screen and (max-width: 836px) {
        gap: 10px;
    }
`;

const StrongText = styled.strong`
    font-size: 24px;
    text-align: start;
    line-height: 120%;
    letter-spacing: 4px;
    user-select: none;

    @media screen and (max-width: 1320px) {
        font-size: 18px;
    }

    @media screen and (max-width: 836px) {
        font-size: 14px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
        letter-spacing: 2px;
    }
`;

const LinkText = styled.a`
    font-size: 16px;
    font-weight: 400;
    text-align: start;
    line-height: 120%;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid;
    }

    @media screen and (max-width: 1320px) {
        font-size: 12px;
    }

    @media screen and (max-width: 836px) {
        font-size: 10px;
    }

    @media screen and (max-width: 500px) {
        font-size: 8px;
    }
`;

const Text = styled.div`
    font-size: 16px;
    font-weight: 400;
    text-align: start;
    line-height: 120%;

    @media screen and (max-width: 1320px) {
        font-size: 12px;
    }

    @media screen and (max-width: 836px) {
        font-size: 10px;
    }

    @media screen and (max-width: 500px) {
        font-size: 8px;
    }
`;

const FormContainer = styled.form`
    width: 35%;
    height: 500px;
    background-color: #FEFEFE;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    padding: 20px 30px;
    color: #222020;

    @media screen and (max-width: 836px) {
        width: 100%;
        height: 350px;
        gap: 10px;
    };

    @media screen and (max-width: 500px) {
        height: 250px;
        gap: 8px;
    };
`;

const Title = styled.label`
    font-size: 22px;
    line-height: normal;
    margin-bottom: 10px;
    color: #47418e;

    @media screen and (max-width: 836px) {
        font-size: 18px;
        margin-bottom: 8px;
    };

    @media screen and (max-width: 500px) {
        font-size: 14px;
    };
`;

const DefaultInput = styled.input`
    outline: none;
    box-sizing: border-box;
    padding: 12px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ADADAD;
    width: 100%;
    height: 38px;
    font-weight: 400;
    width: 100%;
    color: #ADADAD;
    cursor: default;

    @media screen and (max-width: 836px) {
        font-size: 12px;
        height: 32px;
    };

    @media screen and (max-width: 500px) {
        font-size: 10px;
        height: 24px;
    };
`;

const ShortInput = styled.input`
    outline: none;
    box-sizing: border-box;
    padding: 12px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ADADAD;
    width: 100%;
    height: 38px;
    font-weight: 400;

    &:hover {
        border-bottom: 1px solid #2186addc;
    }

    &:active {
        border-bottom: 1px solid #2186addc;
    }

    @media screen and (max-width: 836px) {
        font-size: 12px;
        height: 32px;
    };

    @media screen and (max-width: 500px) {
        font-size: 10px;
        height: 24px;
    };
`;

const ContentInput = styled.textarea`
    width: 100%;
    height: 100%;
    outline: none;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #ADADAD;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ADADAD;
`;

const Button = styled.input`
    min-width: 100%;
    min-height: 38px;
    border: none;
    outline: none;
    background-color: #47418e;
    color: #FEFEFE;
    font-size: 18px;
    font-weight: 700;
    line-height: 120%;
    margin-top: 20px;
    cursor: pointer;
`;

export default Contact;