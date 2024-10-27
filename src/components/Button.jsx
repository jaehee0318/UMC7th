import React from 'react';
//클릭 이벤트와 버튼의 텍스트를 props로 받아 버튼 생성
//children의 경우, <Button> 태그 안에 있는 내용 전달 ex. 할 일 등록
const Button = ({onClick, children}) => {
    return (
        <button onClick = {onClick}>
            {children}
        </button>
    );
};

export default Button