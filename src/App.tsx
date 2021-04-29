import React, { useState } from "react";
import "./global.scss";
import QuestionCard from "./components/QuestionCard";
import {fetchQuizQuistions, DifficultyEnum} from './API'

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  fetchQuizQuistions(10, DifficultyEnum.EASY)

  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};

  return (
    <div className="App flex flex-col min-h-screen justify-items-center">
      <header className="App-header mx-auto mt-16 text-white">
        <h1 className="text-center text-2xl lg:text-6xl px-4 lg:px-0">
          Quiz Template | React & Context
        </h1>
        <button className="start" onClick={startTrivia}></button>
        <p className="score">Score:</p>
        <p className="loading">Loading Questions...</p>

        {/* <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          answers={questions[number].answers}
          callback={checkAnswer}
          question={questions[number].question}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
        /> */}
        <button className="nex" onClick={nextQuestion}>
          Next Question
        </button>
      </header>
    </div>
  );
}

export default App;
