import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
    return (
        //원하는 부분을 '<DarkModeProvider></DarkModeProvider>'로 감싼다.
        <DarkModeProvider>
            <Header />
            <Main />
            <Footer />
        </DarkModeProvider>
    );
}

function Header() {
    return <header className="header">Header</header>;
}

function Main() {
    return (
        <main className="main">
            Main
            <Profile />
            <Products />
        </main>
    );
}

function Profile() {
    return (
        <div>
            Profile
            <User />
        </div>
    );
}

function User() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div>
            User
            <p>DarkMode :{darkMode ? <span style={{ backgroundColor: 'black', color: 'white' }}>Turn on Dark Mode</span> : <span>Turn on Light Mode</span>}</p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </div>
    );
}

function Products() {
    return (
        <div>
            Products
            <ProductDetail />
        </div>
    );
}

function ProductDetail() {
    // useContext hook API를 사용하여 DarkModeContext에서
    // 현재 다크모드 상태(darkMode)와 toggleDarkMode 함수를 가져온다.
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    // 가져온 darkMode 상태에 따라 버튼의 텍스트를 동적으로 변경한다.
    // darkMode가 true이면 "Turn On Light Mode"를 표시하고,
    // false이면 "Turn On Dark Mode"를 표시한다.
    // 버튼을 클릭하면 toggleDarkMode 함수를 호출하여 다크모드를 토글한다.
    return (
        <div>
            Product Detail
            <p>DarkMode :{darkMode ? <span style={{ backgroundColor: 'black', color: 'white' }}>Turn on Dark Mode</span> : <span>Turn on Light Mode</span>}</p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </div>
    );
}

function Footer() {
    return <footer className="footer">Footer</footer>;
}
