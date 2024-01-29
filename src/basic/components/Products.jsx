import React, { useEffect, useState } from 'react';

// Products 컴포넌트 정의
export default function Products() {
    // 상태 변수들을 useState 훅을 사용하여 초기화
    const [loading, setLoading] = useState(false); // 데이터 로딩 중 여부
    const [error, setError] = useState(); // 데이터 로딩 중 에러 여부
    const [products, setProducts] = useState([]); // 불러온 상품 목록
    const [checked, setChecked] = useState(false); // 체크박스의 상태 (할인 상품만 보이도록 필터링)

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

    // useEffect 훅을 사용하여 컴포넌트 마운트 및 checked 상태 변경 시에만
    // 데이터를 불러오는 효과 구현
    useEffect(() => {
        // 데이터 로딩 중 상태로 설정
        setLoading(true);
        // 에러 상태 초기화
        setError(undefined);

        /* 아래 fetch구문을 풀어서 기술하면 다음과 같다.
        let dataPath;
        if (checked) {
            dataPath = 'data/sale_products.json'; // 할인 상품 데이터 경로
        } else {
            dataPath = 'data/products.json'; // 전체 상품 데이터 경로
        }

        fetch(dataPath) 
        */

        // fetch를 통해 데이터를 비동기적으로 불러옴
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then(res => res.json()) // JSON 형식으로 변환
            .then(data => {
                // 데이터 성공적으로 불러온 경우
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                // 불러온 데이터를 상태에 업데이트
                setProducts(data);
            })
            .catch(e => {
                // 에러 발생 시 에러 상태 업데이트
                setError('에러가 발생했음!');
            })
            .finally(() => {
                // 데이터 로딩 완료 시 로딩 상태 업데이트
                setLoading(false);
            });

        // useEffect의 정리 함수 - 컴포넌트 언마운트 시 정리 작업 수행
        return () => {
            console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        };
    }, [checked]); // useEffect의 종속성 배열에 checked를 설정하여 해당 상태가 변경될 때만 효과가 실행되도록 함

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
