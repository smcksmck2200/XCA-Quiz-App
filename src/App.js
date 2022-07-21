import React, { useState } from "react";

export default function App() {

  const questions = [
    {
      questionChoice: "Which is not an OOP programming language?",
      answerChoice: [
        { answerText: 'C++', correctAnswer: true },
        { answerText: 'C', correctAnswer: false },
        { answerText: 'Python', correctAnswer: true },
        { answerText: 'Java', correctAnswer: true },
      ],
    },
    {
      questionChoice: "What is the internet?",
      answerChoice: [
        { answerText: 'a net inside of a net', correctAnswer: false },
        { answerText: 'a musical group', correctAnswer: false },
        { answerText: 'an interconnected system of public webpages', correctAnswer: false },
        { answerText: 'a worldwide system of computer networks', correctAnswer: true },
      ],
    }
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = (correctAnswer) => {

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('use have reach the end of the quiz');
    }
  };
  return (
    <div className="app">
      
      <div className="question-section">
    
        <span>Question {currentQuestion + 1}</span>/{questions.length}
      
        <div className="question-text">{questions[currentQuestion].questionChoice}</div>
      </div>
      
      <div className='answer-section'>
        {questions[currentQuestion].answerChoice.map((answerChoice) => (
          <button onClick={() => handleClick(answerChoice.correctAnswer)}>{answerChoice.answerText}</button>
        ))}
      </div>
    </div>
  )
}
