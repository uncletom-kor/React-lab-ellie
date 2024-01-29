
import React from "react";

export default function Card({ children }) {
    return (
        <div
            style={{
                backgroundColor: 'gray',
                borderRadius: '20px',
                color: 'white',
                minHeight: '200px',
                maxWidth: '200px',
                margin: '1rem',
                padding: '1rem',
                textAlign: 'center',
            }}>
            {children}
        </div>
    );
}