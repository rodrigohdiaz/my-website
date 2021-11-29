import React, { useState } from 'react';
import Menu from './Menu'
import './styles/landing.css'


function Welcome() {

    const [name, setName] = useState('')

    return (
        <div>
        <input 
        className= 'input'
        type= 'text'
        onChange={e => setName(e.target.value)}
        placeholder= 'please, type your name' 
        />
            <h1>Hi {name} and welcome to my site!</h1>
            <p>I hope you enjoy your experience here.</p>
            <Menu />
        </div>
    )
}

export default Welcome


