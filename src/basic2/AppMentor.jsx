import React, { useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: '엘리',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어개발자',
        },
    });
    
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt(`what's your name?`);
                    setPerson(person => ({ ...person, name: name }));
                    // ...person : person object의 값을 모두 가져옴
                    // name: name = 이름을 업데이트 함 (키와 변수명이 같은 경우 name 만 기술해도 됨)
                }}>
                이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const name = prompt(`what's your mentor's name?`);
                    setPerson(person => ({ ...person, mentor: { ...person.mentor, name } }));
                }}>
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt(`what's your mentor's title?`);
                    setPerson(person => ({ ...person, mentor: { ...person.mentor, title} }));
                }}>
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}
