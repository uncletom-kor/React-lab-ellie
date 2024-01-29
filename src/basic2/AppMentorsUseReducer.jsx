import React, { useReducer } from 'react';
import personReducer from './reducer/PersonReducer';

export default function AppMentor() {
    //useState Hook API 대신 useReducer Hook API를 사용하여 상태를 업데이트하는 방법.

    //const [person, setPerson] = useState(initialPerson);
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

        // dispatch 호출(type과 prev, current 값 전달)
        dispatch({ type: 'updated', prev, current });
    };

    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);

        // dispatch 호출(type과 name, title 값 전달)
        dispatch({ type: 'added', name, title });
    };

    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);

        // dispatch 호출(type과 name 값 전달)
        dispatch({ type: 'deleted', name });
    };

    const handleNoJob = () => {
        const name = prompt(`하고싶은게 뭐야?`);

        // dispatch 호출(type과 name 값 전달)
        dispatch({ type: 'notDoingAnything', name });
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
            <button onClick={handleNoJob}>아무것도 하지않기</button>
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
