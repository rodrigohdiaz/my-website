import React from 'react';
import Menu from './Menu'

function Welcome() {

    return (
        <div>
        <input type='text' placeholder='please, type your name'></input>
        <button>Enter</button>
            <h1>Welcome to my site</h1>
            <p>I hope you enjoy your experience here.</p>
            <Menu />
        </div>
    )
}

export default Welcome


