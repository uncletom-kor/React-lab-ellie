import React, { useState } from 'react';

export default function AppForm() {
    /*
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    위 구문은 아래와 동일한 구문이다.
    하나의 객체(Object)로 관리하는 것이 좋다.
    */

    const [form, setFrom] = useState({ name: '', email: '' });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
        console.log(form.name);
        console.log(form.email);
    };

    // react에서는 폼에서 변경이 일어났을 때 컴포넌트 상에도 메칭이 되도록
    // 업데이트 해 주어야 한다.
    const handleChange = e => {
        const { name, value } = e.target;
        setFrom({ ...form, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="email">이메일:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}
