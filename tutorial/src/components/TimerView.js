import React from 'react'

export default function TimerView(props) {
    console.log(props)
    return (
        <div>
            <span>Seconds passed: {props.timer.secondsPassed}</span>
            <button onClick={props.timer.increaseTimer}>Increased</button>
        </div>
    )
}
