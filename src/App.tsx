import React, { useState, useEffect } from "react";
import "./global.scss";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, DifficultyEnum, QuestionState } from "./Api";

import { GlobalStyle } from "./app.style";

import { shuffleArray } from "./Utils";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
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
  const [status, setStatus] = useState<Boolean>(true);

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
    if (!gameOver) {
      console.log("checkAnswers");
      //user answers
      const userAnswer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === userAnswer;
      if (correct) {
        setScore((prev) => prev + 1);
        //save answer in the array for user answers
        const answerObject: AnswerObject = {
          question: questions[number].question,
          answer: userAnswer,
          correct,
          correctAnswer: questions[number].correct_answer,
        };
        // setStatus((prev) => !prev);
        // console.log(status);
        // console.log(userAnswer);
        setUserAnswers((prev) => {
          console.log(...prev);
          return [...prev, answerObject];
        });
        // console.log("hi");
      }
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(number + 1);
    }
  };
  const prevQuestion = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    // startTrivia();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App flex flex-col min-h-screen justify-items-center">
        <header className="App-header mx-auto mt-16 text-white">
          <h1 className="text-center text-2xl lg:text-6xl px-4 lg:px-0 mb-4">
            Quiz Template | React & Context
          </h1>
          <div className="text-center">
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
              <button className="start" onClick={startTrivia}>
                Start || Re-Start
              </button>
            ) : null}
            {!gameOver ? <p className="score">Score: {score}</p> : null}

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
          </div>

          {!gameOver &&
            !loading &&
            // userAnswers.length !== number + 1 &&
            number + 1 !== TOTAL_QUESTIONS && (
              <button className="nex" onClick={nextQuestion}>
                Next Question
              </button>
            )}
          {!gameOver &&
            !loading &&
            // userAnswers.length !== number + 1 &&
            number > 0 && (
              <button className="nex" onClick={prevQuestion}>
                Previous Question
              </button>
            )}
        </header>
      </div>
    </>
  );
}

export default App;
