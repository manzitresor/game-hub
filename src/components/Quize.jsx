import { useState } from "react"
import QUESTION from "../question.js";
import quizCompletedImg from "../assets/quiz-complete.png"

export default function Quize() {
    const [selectAnswer, setSelectAnswer ] = useState([]);

    const activeQuestionIndex = selectAnswer.length;
    const quizIsCompled = activeQuestionIndex === QUESTION.length;

    function handleSelectAnswer(selectedAnswer) {
        setSelectAnswer(prev => {
            return [...prev,selectedAnswer]
        })
    }

    if (quizIsCompled) {
        return(
            <div id="summary">
                <img src={quizCompletedImg} alt="quize complete" />
                <h2>Quiz completed</h2>
            </div>
        )
    }

    const shuffledAnswers = QUESTION[activeQuestionIndex].answers;
    shuffledAnswers.sort(() => Math.random() - 0.5);

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
