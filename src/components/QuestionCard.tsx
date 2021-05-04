import React from "react";
import { AnswerObject } from "../App";
import { ButtonWrapper, Wrapper } from "./questionCard.style";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number mb-7">
        Question: {questionNum} / {totalQuestions}
      </p>

      <div className="flex items-center answer-ui rounded-sm bg-t-contrast-no-h py-12 px-2 ">
        <p
          className="question text-2xl border-r rounded-sm bg-t-contrast-no-h px-4 py-24"
          dangerouslySetInnerHTML={{ __html: question }}
        ></p>
        <div className="answer-options">
          {answers.map((answer, i) => (
            <ButtonWrapper
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
              key={i}
              className="my-4"
            >
              <button
                className="w-full px-4 py-2 border rounded-sm bg-t-contrast text-xl"
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </ButtonWrapper>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
