import { createContext, useState } from 'react';

// createContext 함수를 사용하여 'DarkModeContext'라는 Context를 생성한다.
// 이 Context는 다크모드 상태와 토글 함수를 저장하고 전파하는 데 사용된다.
export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    // useState hook을 사용하여 darkMode 상태를 생성하고 초기값으로 false를 설정
    // setDarkMode 함수는 darkMode 상태를 업데이트하는데 사용된다.
    const [darkMode, setDarkMode] = useState(false);

    // toggleDarkMode 함수는 현재 darkMode 상태를 반전시키는 함수이며
    // setDarkMode 함수를 인자로 받아 현재 상태를 반전시킨다.
    const toggleDarkMode = () => setDarkMode(mode => !mode);

    // DarkModeProvider 컴포넌트는 children prop을 받아 DarkModeContext.Provider에 전달한다.
    // DarkModeContext.Provider는 darkMode 상태와 toggleDarkMode 함수를 하위 컴포넌트에 전파한다.
    return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{ children }</DarkModeContext.Provider>;
}
