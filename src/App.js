import React, { Component, useState } from 'react';

export function App() {
    const [input,setInput] = useState('');
    const [output,setOutput] = useState('');
    
    return (
        <div className={'main-body'}>
            <div className={'section'}>
                <input onChange={e => setInput(e.target.value)} />
            </div>
            <div className={'section'}>
                <input />
            </div>
        </div>
    );
}


