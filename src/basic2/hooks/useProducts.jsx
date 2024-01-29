import { useEffect, useState } from 'react';
// customer hook API 예제
// 데이터를 서버로 부터 불러오는 과정을 hooks API로 분리 함.
// hooks를 만들 때는 'use'를 접두사로 둘 것을 권장한다. 
export default function useProducts({isSalesOnly}) {
    // 상태 변수들을 useState 훅을 사용하여 초기화
    const [loading, setLoading] = useState(false); // 데이터 로딩 중 여부
    const [error, setError] = useState(); // 데이터 로딩 중 에러 여부
    const [products, setProducts] = useState([]); // 불러온 상품 목록

    // useEffect 훅을 사용하여 컴포넌트 마운트 및 checked 상태 변경 시에만
    // 데이터를 불러오는 효과 구현
    useEffect(() => {
        // 데이터 로딩 중 상태로 설정
        setLoading(true);
        // 에러 상태 초기화
        setError(undefined);

        // fetch를 통해 데이터를 비동기적으로 불러옴
        fetch(`data/${isSalesOnly ? 'sale_' : ''}products.json`)
            .then(res => res.json()) // JSON 형식으로 변환
            .then(data => {
                // 데이터 성공적으로 불러온 경우
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                console.log('data', data);
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

        // useEffect의 종속성 배열에 salesOnly prop을 설정하여 
        // 해당 상태가 변경될 때만 효과가 실행되도록 함
    }, [isSalesOnly]);  

    return [ loading, error, products ];
}