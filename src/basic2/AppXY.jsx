import React, { useState } from 'react';
import './AppXY.css';

//상태를 객체 형태로 보관하고 업데이트 하는 예제
export default function AppXY() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    return (
        <div
            className="container"
            onPointerMove={e => {
                //setPosition({ x: e.clientX, y: e.clientY });

                //만약 수평으로만 이동이 가능하게 하려면
                //setPosition(prev => ({ x: e.clientX, y: prev.y }));

                //만약 수직으로만 이동이 가능하게 하려면
                //setPosition(prev => ({ x: prev.x, y: e.clientY }));

                //모든 값은 이전 값을 그대로 적용하고 x값만 업데이트하려면
                setPosition(prev => ({ ...prev, x: e.clientX }));
            }}>
            <div
                className="pointer"
                style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            />
        </div>
    );
}
