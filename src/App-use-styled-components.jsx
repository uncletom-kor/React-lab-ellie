// 필요한 모듈과 구성 요소를 가져온다.
import './App.css'; // App.css 파일에서 스타일을 가져온다.
import Button1 from './components/Button1'; // Button1 컴포넌트를 가져온다.
import Button2 from './components/Button2'; // Button2 컴포넌트를 가져온다.
import styled, { css } from 'styled-components'; // styled-components 라이브러리를 가져온다.

// styled-components를 사용하여 스타일을 정의한다.
const Container = styled.div`
    display: flex; // 자식 요소를 가로로 배치한다.
`;

// 'Button' 스타일드 컴포넌트를 정의한다.
const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 2px solid #009cd5;
    color: #009cd5;
    margin: 0 0.5em;
    padding: 0.4em 0.5em;

    /* Button이 primary 속성을 가지고 있으면 배경색과 글자색을 변경한다. */
    ${props =>
        props.primary &&
        css`
            background: #009cd5;
            color: white;
        `}
`;

export default function App() {
    return (
        <>
            <Button1 />
            <Button2 />
            <Container>
                <Button>Normal Button</Button>
                {/*primary 스타일이 적용된 버튼을 렌더링한다. */}
                <Button primary>Primary Button</Button>
            </Container>
        </>
    );
}
