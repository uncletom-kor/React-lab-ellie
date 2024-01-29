import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';

// Products 컴포넌트 정의
export default function Products() {
    // 상태 변수들을 useState 훅을 사용하여 초기화
    const [checked, setChecked] = useState(false); // 체크박스의 상태 (할인 상품만 보이도록 필터링)
    const [loading, error, products] = useProducts({ isSalesOnly: checked });

    // 체크박스 상태를 반전시키는 이벤트 핸들러
    const handleChange = () => setChecked(prev => !prev);

    // Table을 이용한 표 스타일
    const cellStyle = {
        padding: '4px',
        border: '1px solid #ddd',
        textAlign: 'left',
    };

    //div를 이용한 데코 스타일
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const productContainerStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        width: '300px',
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '18px',
        margin: '8px 0',
    };

    const priceStyle = {
        fontSize: '16px',
        color: '#007bff',
    };

    // 로딩 중일 경우 Loading...을 반환
    if (loading) return <p>Loading...</p>;

    // 에러가 있는 경우 에러 메시지를 반환
    if (error) return <p>{error}</p>;

    // 정상적인 경우 체크박스, 레이블, 상품 목록을 렌더링
    return (
        <>
            {/* 체크박스 */}
            <input
                id="checkbox"
                type="checkbox"
                value={checked}
                onChange={handleChange}
            />
            {/* 레이블 */}
            <label htmlFor="checkbox">Show Only 🔥 Sale</label>
            {/* 상품 목록 */}
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>

            <table style={{ width: '50%' }}>
                <thead>
                    <tr>
                        <th style={cellStyle}>Product Name</th>
                        <th style={cellStyle}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td style={cellStyle}>{product.name}</td>
                            <td style={cellStyle}>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={containerStyle}>
                {products.map(product => (
                    <div
                        key={product.id}
                        style={productContainerStyle}>
                        <h3 style={titleStyle}>{product.name}</h3>
                        <p style={priceStyle}>{product.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
