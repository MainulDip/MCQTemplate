import React, { useState, useEffect } from "react";
import "./global.scss";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, DifficultyEnum, QuestionState } from "./Api";

import { shuffleArray } from "./Utils";

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // const questionsbulk = fetchQuizQuestions(
  //   TOTAL_QUESTIONS,
  //   DifficultyEnum.EASY
  // );
  // questionsbulk.then((res) => console.log(res));

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      DifficultyEnum.EASY
    );
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    console.log(newQuestions);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const userAnswer = e.currentTarget.value
  };
  const nextQuestion = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    // startTrivia();
  }, []);

  return (
    <div className="App flex flex-col min-h-screen justify-items-center">
      <header className="App-header mx-auto mt-16 text-white">
        <h1 className="text-center text-2xl lg:text-6xl px-4 lg:px-0">
          Quiz Template | React & Context
        </h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start || Re-Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score:</p> : null}

        {loading ? <p className="loading">Loading Questions...</p> : null}

        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            answers={questions[number].options}
            callback={checkAnswer}
            question={questions[number].question}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
          />
        )}

        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS && (
            <button className="nex" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </header>
    </div>
  );
}

export default App;
