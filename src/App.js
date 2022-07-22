import React, { useState } from "react";

export default function App() {

  const questions = [
    {
      questionChoice: "Which is NOT considered an OOP programming language?",
      answerChoice: [
        { answerText: 'C++', correctAnswer: false },
        { answerText: 'C', correctAnswer: true },
        { answerText: 'Python', correctAnswer: false },
        { answerText: 'Java', correctAnswer: false },
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
    },
    {
      questionChoice: "How many ways are there to add CSS to a HTML document?",
      answerChoice: [
        { answerText: '1', correctAnswer: false },
        { answerText: '2', correctAnswer: false },
        { answerText: '3', correctAnswer: true },
        { answerText: '4', correctAnswer: false },
      ],
    },

    {
      questionChoice: "Which is NOT considered one of the 5 basic programming elements?",
      answerChoice: [
        { answerText: 'input', correctAnswer: false },
        { answerText: 'looping and conditionals', correctAnswer: false },
        { answerText: 'enviromental setup', correctAnswer: true },
        { answerText: 'variables and data strucutures', correctAnswer: false },
        { answerText: 'mathematical operations', correctAnswer: false },
      ],
    },
    {
      questionChoice: "What year was the internet born?",
      answerChoice: [
        { answerText: '1983', correctAnswer: true },
        { answerText: '1982', correctAnswer: false },
        { answerText: '1975', correctAnswer: false },
        { answerText: '1981', correctAnswer: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [displayCount, setdisplayCount] = useState(false);
  const [count, setCount] = useState(0)

  const handleClick = (correctAnswer) => {
    if (correctAnswer) {
      setCount(count + 1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setdisplayCount(true);
    }
  };

  return (
    <div className="app">
      {displayCount ? (
        <div className="display-score">
          {count} out of {questions.length} questions were answered correctly!
        </div>
      ) : (
        <>
          <div className="question-section">
            <span>Question {currentQuestion + 1}</span>/{questions.length}

            <div className="question-text">{questions[currentQuestion].questionChoice}</div>
          </div>

          <div className='answer-section'>
            {questions[currentQuestion].answerChoice.map((answerChoice) => (
              <button onClick={() => handleClick(answerChoice.correctAnswer)}>{answerChoice.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
