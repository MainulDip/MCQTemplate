import { shuffleArray } from "./Utils";

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type QuestionState = Question & { options: string[] }

export enum DifficultyEnum {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = 'hard'
}

//&difficulty=${}

export const fetchQuizQuestions = async (amount: number, difficulty: DifficultyEnum): Promise<QuestionState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=27`;
    const data = await (await fetch(endpoint)).json()
    return data.results.map((question: Question) => (
        {
            ...question,
            options: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }
    ))
}