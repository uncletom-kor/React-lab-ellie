import React, { useState } from 'react';

export default function AppMentorAllSolution() {
    // useState 초기 값을 'initialPerson'에서 가져온다.
    const [person, setPerson] = useState(initialPerson);

    // person.mentors 배열의 각 멘토 객체에 대해 이름을 변경하는 작업을 수행한다.
    // prev 변수에 저장된 이전 이름과 일치하는 멘토 객체를 찾아, 
    // current 변수에 저장된 새로운 이름으로 변경한다.
    // 이를 통해 person 객체의 mentors 배열에서 특정 멘토의 이름을 변경하는 
    // 기능을 구현할 수 있다.
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        setPerson(person => ({
            ...person,
            mentors: person.mentors.map(mentor => {
                if (mentor.name === prev) {
                    return { ...mentor, name: current };
                }
                return mentor;
            }),
        }));
    };

    // 새로운 멘토를 person 객체의 mentors 배열에 추가하는 기능을 구현.
    // 함수가 호출되면, 사용자로부터 멘토의 이름과 직함을 입력받는다.
    // 입력된 값은 각각 name과 title 변수에 저장된다.
    // setPerson 함수를 호출하여 person 객체를 업데이트합니다. 
    // 업데이트된 person 객체는 원래의 person 객체와 
    // 입력된 멘토 정보를 포함하는 새로운 mentor 객체를 합쳐진 형태이며
    // person.mentors 배열의 맨 앞에 입력된 멘토 정보를 가진 mentor 객체를 추가한다.
    // 이를 위해 스프레드 연산자(...)를 사용하여 원래의 mentors 배열을 복사하고, 
    // 새로운 mentor 객체를 추가한다.
    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        setPerson(person => ({
            ...person,
            mentors: [{ name, title }, ...person.mentors],
        }));
    };

    // person.mentors 배열에서 name이 입력된 값과 일치하지 않는 요소를 
    // 추출하여 새로운 배열을 생성하고, 
    // 이를 setPerson 함수를 통해 person 객체의 mentors 속성에 할당
    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        setPerson(person => ({
            ...person,
            mentors: person.mentors.filter(m => m.name !== name),
        }));
    };

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={ handleUpdate }>멘토의 이름을 바꾸기</button>
            <button onClick={ handleAdd }>멘토 추가하기</button>
            <button onClick={ handleDelete }>멘토 삭제하기</button>
        </div>
    );
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
};
