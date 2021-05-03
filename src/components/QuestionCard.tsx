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

      <div className="flex items-center answer-ui">
        <p
          className="question text-xl"
          dangerouslySetInnerHTML={{ __html: question }}
        ></p>
        <div className="answer-options">
          {answers.map((answer, i) => (
            <div key={i} className="my-4">
              <button
                className="w-full px-4 py-2 border rounded-sm hover:bg-gray-900"
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
