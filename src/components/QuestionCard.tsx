import React from "react";
import { AnswerObject } from "../App";

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
    <div>
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
            <div key={i} className="my-4">
              <button
                className="w-full px-4 py-2 border rounded-sm bg-t-contrast text-xl"
                disabled={!!userAnswer}
                value={answer}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
