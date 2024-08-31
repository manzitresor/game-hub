import { useState } from "react"
import QUESTION from "../question.js";

export default function Quize() {
    const [selectAnswer, setSelectAnswer ] = useState([]);

    const activeQuestionIndex = selectAnswer.length;
    const shuffledAnswers = QUESTION[activeQuestionIndex].answers;
    shuffledAnswers.sort(() => Math.random() - 0.5)

    function handleSelectAnswer(selectedAnswer) {
        setSelectAnswer(prev => {
            return [...prev,selectAnswer]
        })
    }
  return (
    <div id="quiz">
       <div id="question">
        <h2>{ QUESTION[activeQuestionIndex].text }</h2>
        <ul id="answers">
            {shuffledAnswers.map(answer =>(
                <li key={answer} className="answer">
                     <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                </li>
            ))}
        </ul>
       </div>
    </div>
  )
}
