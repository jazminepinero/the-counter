import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './App.css';


function Welcome() {
    // const props = useSpring({opacity: 2, from: {opacity: -55}})
    const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })


   
    return (
        <div onClick={() => toggle(!state)}>
        <animated.div
            className="welcome"
          style={{
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}>
          Welcome to Counter
        </animated.div>
      </div>
         // <animated.div className="welcome" style={props}>welcome to counter</animated.div>
        
         
    )
}

export default Welcome