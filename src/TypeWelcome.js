import React from 'react'
import Typist from 'react-typist'
import './App.css'

function TypeWelcome() {
    return (
        <div>
        <Typist>
        <p  className="typingOne">Counter</p>
        <Typist.Delay ms={800} />
      
        <br />
        <p className="typingTwo">The Accounting Trial Balance Software</p>
        <Typist.Backspace count={50} delay={55500} />
        </Typist>  
        </div>
    )
}

export default TypeWelcome
