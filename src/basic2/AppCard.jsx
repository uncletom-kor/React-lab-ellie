import React from 'react';
import Avatar from './components/Avatar';
import Card from './components/Card';

export default function AppCard() {
    return (
        <>
            <Card>
                <p>Card1</p>
            </Card>

            <Card>
                <h1>Card2</h1>
                <p>설명</p>
            </Card>

            <Card>
                <article>
                    <Avatar
                        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        name="Bobby"
                        size={150}
                    />
                </article>
            </Card>
            <Card>
                <Avatar
                    image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
                    name="July"
                    size={150}
                />
            </Card>
        </>
    );
}
