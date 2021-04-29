export enum DifficultyEnum {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = 'hard'
}

//&difficulty=${}

export const fetchQuizQuistions = async (amount: number, difficulty: DifficultyEnum) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=27`;
    const data = await (await fetch(endpoint)).json()
    console.log(data)
}