import React from 'react';

// 입력 필드의 현재 값과 변경 이벤트를 props로 받아 입력 필드 생성
const Input = ({value, onChange}) => {
    return (
        <input
            type="text"
            value={value} //현재 입력값을 props로 받아서 설정
            onChange = {onChange} //입력값이 변경될 때 실행할 함수
        />
    );
};

export default Input