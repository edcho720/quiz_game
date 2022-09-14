import React from 'react'

function Cover(props) {
  return (
        <div className="display">
            <h1>Quiz Game</h1>
            <h3>Test your IQ</h3>
            <button className="start-button" onClick={props.handleClick}>Start Quiz</button>
        </div>
  )
}

export default Cover