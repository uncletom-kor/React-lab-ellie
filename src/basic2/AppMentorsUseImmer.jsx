import React from 'react';
import { useImmer } from 'use-immer';

// immer를 사용하려면 yarn을 이용해서 해당 immer와 use-immer 라이브러리를 추가하여야 한다.
// yarn add immer use-immer

export default function AppMentorsImmer() {
    //useState Hook API 대신 useImmer 라이브러리 API를 사용하여 상태를 업데이트하는 방법.

    //const [person, setPerson] = useState(initialPerson);
    const [person, updatePerson] = useImmer(initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

        updatePerson(person => {
            const mentor = person.mentors.find(m => m.name === prev);
            mentor.name = current;
        });
    };

    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        // updatePerson(person => person.mentors.push({ name, title }));

        updatePerson(person => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
        }));
    };

    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        updatePerson(person => {
            const index = person.mentors.findIndex(m => m.name === name);
            person.mentors.splice(index, 1);
        });
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
            <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
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