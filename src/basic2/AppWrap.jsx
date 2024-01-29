import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    name="Bobby"
                    size={150}
                />
                <p>안녕하세요!</p>
            </Navbar>
            <Navbar>
                <Avatar
                    image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
                    name="Tommy"
                    size={150}
                />
                <p>Hello!</p>
            </Navbar>
        </div>
    );
}

function Navbar({ children }) {
    return <header style={{ backgroundColor: 'yellow' }}>{ children }</header>;
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
            <p>{name}</p>
        </div>
    );
}
