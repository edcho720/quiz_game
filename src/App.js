import Cover from "./Cover"
import React from "react"
// import Question from "./Question"
import {nanoid} from "nanoid"

function App() {

  const [quizData, setQuizData] = React.useState([]) // initialize with an empty box to fill
  const [test, setTest] = React.useState(true);




  React.useEffect(function(){
     fetch("https://opentdb.com/api.php?amount=5")
         .then(res => res.json())
         .then(data => setQuizData(data.results.map( each => {
          return {...each, selected: false, id: nanoid(), answers: [each.correct_answer, each.incorrect_answers[0], each.incorrect_answers[1], each.incorrect_answers[2]]}
          })));
 }, [test]);

 console.log(quizData)

function startGame() {
  setTest(prevTest => !prevTest)
}

function select(id) {
  console.log(id) // stuck here, don't know how to catch which specific answer is being selected..
  // the id generated by nanoid is for the entire block of answers so isn't enough to differentiate..
  // How can i target each anser selection to toggle its selected property??
  
  // setQuizData(prevQuizData => prevQuizData.map( choice => {
  //   return choice.id === id ? {...prevQuizData, selected: !choice.selected} : choice;
  // }));
}

console.log(quizData)

 const questions = quizData.map( each => {
     return  (
        <div>
            <div className="quest">{each.question}</div>
            <ul className="unselected">

                <li 
                  selected={each.selected} 
                  onClick={()=>select(each.id)}
                  
                  type={each.type}
                  >{each.answers[0]}</li>

                <li 
                  selected={each.selected} 
                  onClick={()=>select(each.id)}
                  
                  type={each.type}
                >{each.answers[1]}</li>

                {each.answers[2] && <li 
                  selected={each.selected} 
                  onClick={()=>select(each.id)}
                  
                  type={each.type}
                >{each.answers[2]}</li>}

                {each.answers[3] &&<li 
                  selected={each.selected} 
                  onClick={()=>select(each.id)}
                  
                  type={each.type}
                >{each.answers[3]}</li>}
            </ul>
            <hr />
        </div> 
     )
 });

  return (
    <div className="main">
      {!test && 
        <Cover handleClick={startGame}/>
      }
      {test && 
        <div className="quiz-container">
          {questions}
          <div className="button-box"><button className="submit-button">Check Answers</button></div>
          <div className="button-box">You scored {}/{} correct answers<button className="submit-button">Play Again</button></div>
        </div>
      }
    </div>
  );
}

export default App;
