import React from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/use-form.js';
import { validateLogin } from '../utils/validate.js';

const LoginPage = () => {
    const login = useForm({
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin
    });

    const handlePressLogin = () => {
        console.log(login.values.email, login.values.password);
    };

    return (
        <PageContainer>
            <LoginContainer>
                <Title>로그인</Title>
                <Input 
                    error={login.touched.email && login.errors.email}
                    type="email" 
                    placeholder="이메일을 입력해주세요!"
                    {...login.getTextInputProps('email')}
                />
                {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}
                <Input 
                    error={login.touched.password && login.errors.password}
                    type="password" 
                    placeholder="비밀번호를 입력해주세요!"
                    {...login.getTextInputProps('password')}
                />
                {login.touched.password && login.errors.password && <ErrorText>{login.errors.password}</ErrorText>}
                <LoginButton onClick={handlePressLogin}>로그인</LoginButton>
            </LoginContainer>
        </PageContainer>
    );
};

export default LoginPage;

const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #111;
    padding: 40px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 24px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    margin: 10px 0;
    padding: 12px;
    width: 100%;
    border: ${(props) => (props.error ? '2px solid red' : '1px solid #ccc')};
    border-radius: 4px;
    font-size: 16px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin: 5px 0;
`;

const LoginButton = styled.button`
    margin-top: 20px;
    padding: 12px;
    width: 100%;
    background-color: #ff4d4d;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #ff1a1a;
    }
`;