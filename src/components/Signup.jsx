import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

const schema = yup.object().shape({
    email: yup
        .string()
        .email('유효한 이메일 형식이어야 합니다.')
        .required('이메일을 반드시 입력해주세요.'),
    password: yup
        .string()
        .min(8, '비밀번호는 8자 이상이어야 합니다.')
        .max(16, '비밀번호는 16자 이하여야 합니다.')
        .required('비밀번호를 입력해주세요.'),
    passwordCheck: yup
        .string()
        .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
        .required('비밀번호 검증 또한 필수 입력요소입니다.'),
});

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched", 
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <PageContainer>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Title>회원가입</Title>
                <Input
                    type="email"
                    placeholder="이메일을 입력해주세요!"
                    {...register('email')}
                />
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                
                <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요!"
                    {...register('password')}
                />
                {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                
                <Input
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요!"
                    {...register('passwordCheck')}
                />
                {errors.passwordCheck && <ErrorText>{errors.passwordCheck.message}</ErrorText>}
                
                <SubmitButton type="submit" disabled={!isValid} isValid={isValid}>
                    제출
                </SubmitButton>
            </FormContainer>
        </PageContainer>
    );
};

export default SignUpPage;

// 스타일 컴포넌트 정의
const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const FormContainer = styled.form`
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
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin: 5px 0;
`;

const SubmitButton = styled.button`
    margin-top: 20px;
    padding: 12px;
    width: 100%;
    background-color: ${({ isValid }) => (isValid ? "#ff4d4d" : "gray")};
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: ${({ isValid }) => (isValid ? "pointer" : "not-allowed")};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ isValid }) => (isValid ? "#ff1a1a" : "gray")};
    }
`;
