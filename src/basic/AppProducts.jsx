import React, { useState } from 'react';
import './App.css'; // App.css 스타일 시트를 import

// Products 컴포넌트를 import
import Products from './components/Products';

// AppProducts 함수형 컴포넌트 정의
export default function AppProducts() {
    // 상태 변수(showProducts)와 해당 변수를 업데이트하는 함수(setShowProducts)를 useState 훅을 사용하여 생성
    const [showProducts, setShowProducts] = useState(true);

    // 컴포넌트 렌더링
    return (
        <div>
            {/* 
                조건부 렌더링:
                showProducts가 true일 때만 <Products /> 컴포넌트를 렌더링
                React JSX에서는 조건연산자를 사용할 때 ?와 :를 생략할 수 있다.
                JSX가 브라우저에서 실행될 때 ?, :를 자동으로 추가해준다.
            */}
            {showProducts && <Products />}

            {/* 
                버튼을 클릭하면 setShowProducts 함수를 호출하여 showProducts 상태를 반전시키는 이벤트 핸들러 설정
                버튼 텍스트는 'Toggle'로 설정
            */}
            <button onClick={() => setShowProducts(show => !show)}>Toggle</button>
        </div>
    );
}
