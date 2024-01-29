import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/PersonReducer';

export default function AppMentorsButton() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    // useCallback 함수의 사용
    // useCallback은 React의 훅(hook) 중 하나로, 
    // 참조가 변경되지 않는 콜백 함수를 생성하는 데 사용 됨.
    // 콜백 함수는 컴포넌트에서 이벤트 핸들러나 타이머 등에 사용되며 
    // 일반적으로 콜백 함수는 컴포넌트가 리렌더링될 때마다 새로 생성된다. 
    // 하지만 useCallback을 사용하면 콜백 함수가 변경되지 않는 경우에는 
    // 새로 생성되지 않고 재사용된다.
    // useCallback의 첫 번째 인자는 콜백 함수이며 이 함수는 인자를 받지 않을 수도 있고, 
    // 여러 개의 인자를 받을 수도 있다.
    // 두 번째 인자는 deps 배열이고 deps 배열에 있는 값이 변경될 때마다 
    // 콜백 함수가 새로 생성된다. 
    // deps 배열을 빈 배열([])로 설정하면 콜백 함수는 
    // 컴포넌트가 처음 마운트될 때 한 번만 생성되고, 이후에는 변경되지 않는다.
    // 이벤트 핸들러로 사용될 때는 성능 향상을 위해 useCallback을 사용하는 것이 좋다. 
    // 이렇게 하면 컴포넌트가 리렌더링될 때마다 
    // 콜백 함수가 새로 생성되는 것을 방지할 수 있다.

    // 아래의 코드에서는 'handleUpdate'라는 콜백 함수를 생성하고, 
    // useCallback을 사용하여 deps 배열을 빈 배열로 설정했다. 
    // 이렇게 하면 'handleUpdate' 함수는 컴포넌트가 처음 마운트될 때 한 번만 생성되고, 
    // 이후에는 변경되지 않는다.
    const handleUpdate = useCallback(() => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({ type: 'updated', prev, current });
    }, []);

    const handleAdd = useCallback(() => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispatch({ type: 'added', name, title });
    }, []);

    const handleDelete = useCallback(() => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        dispatch({ type: 'deleted', name });
    }, []);

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
            <Button
                text="멘토 이름 바꾸기"
                onClick={handleUpdate}
            />
            <Button
                text="삭제하기"
                onClick={handleDelete}
            />
            <Button
                text="멘토 추가하기"
                onClick={handleAdd}
            />
        </div>
    );
}


// memo는 React의 훅(hook) API 중 하나로, 컴포넌트의 성능을 향상 시키는 데 사용된다.
// 컴포넌트가 리렌더링 될 때마다 render 함수가 호출된다. 
// 하지만 render 함수에서 반환하는 결과가 이전과 동일한 경우에는 
// 컴포넌트가 다시 랜더링하지 않아야 합니다.

// memo는 render 함수의 결과를 캐시하고, 이전 결과와 비교하여 
// 동일한 경우에는 컴포넌트를 다시 그리지 않는다. 
// 이렇게 하면 불필요한 리렌더링을 방지하여 성능을 향상 시킬 수 있다.

// 아래의 코드에서는 Button 컴포넌트에서 memo를 사용하고 있다. 
// memo를 사용하면 Button 컴포넌트가 리렌더링 될 때마다 
// console.log가 호출되는 것을 방지할 수 있다.

// memo를 사용할 때는 useMemo와 마찬가지로 deps 배열을 지정할 수 있다. 
// deps 배열에 있는 값이 변경되면 컴포넌트가 다시 리-랜더링된다. 
// deps 배열을 빈 배열([])로 설정하면 컴포넌트는 항상 다시 그려진다.

const Button = memo(({ text, onClick }) => {
    console.log('Button', text, 're-rendering 😜');

    // useMemo는 React의 훅(hook) 중 하나로,
    // 계산 비용이 많이 드는 값을 캐시하고 재사용하는 데 사용 됨.
    // 주로 상태나 props의 변화에 따라 자주 계산되는 값을 캐시하는 데 사용되며
    // useMemo를 사용하면 컴포넌트가 불필요하게 리렌더링되는 것을 방지할 수 있다.

    // 두 번째 인자는 deps 배열이며,
    // deps 배열에 있는 값이 변경될 때마다 계산 함수가 다시 실행된다.
    // deps 배열을 빈 배열([])로 설정하면 계산 함수는 컴포넌트가 처음 마운트될 때
    // 한 번만 실행된다.

    // 아래의 문에서는 useMemo를 사용하여 calculateSomething이라는 계산 함수를 실행하고,
    // 결과를 result 변수에 저장한다.
    // deps 배열을 빈 배열로 설정했기 때문에 calculateSomething 함수는
    // 컴포넌트가 처음 마운트될 때 한 번만 실행된다.
    const result = useMemo(() => calculateSomething(), []);

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                margin: '0.4rem',
            }}>
            {`${text} ${result}`}
        </button>
    );
});

function calculateSomething() {
    for (let i = 0; i < 10000; i++) {
        console.log('😆');
    }
    return 10;
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
