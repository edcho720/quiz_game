import React from 'react'

function Question(props) {

    // const styles = props.selected ? "selected" : "unselected"

  return (
            <div>
                <div className="quest">{props.each.question}</div>
                <ul className="unselected">
                     {props.each.correct_answer && <li selected={props.selected} onClick={props.handleClick}>{props.each.correct_answer}</li>}
                     {props.each.incorrect_answers[0] && <li selected={props.selected} onClick={props.handleClick}>{props.each.incorrect_answers[0]}</li>}
                     {props.each.incorrect_answers[1] && <li selected={props.selected} onClick={props.handleClick}>{props.each.incorrect_answers[1]}</li>}
                     {props.each.incorrect_answers[2] && <li selected={props.selected} onClick={props.handleClick}>{props.each.incorrect_answers[2]}</li>}
                </ul>
                <hr />
             </div> 
  )
}

export default Question;