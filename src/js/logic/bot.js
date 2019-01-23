
/* Constants which improve code-readablity using const-names instead of magic-numbers */
export const gameModus = {
    HUMAN_VS_BOT: 0,
    BOT_VS_BOT: 1,
}

export const choices = {
    ROCK: 0,
    PAPER: 1,
    SCISSOR: 2,
}

export const results = {
    DRAW: 0,
    PLAYER1WON: 1,
    PLAYER2WON: 2
}


/* Get font-awesome class for rock-, paper-, scissor- hand-icon 
 * @param {int} choice 0 rock, 1 paper, 2 scissor (Use const "choice"-obj)
 */
export const getChoiceIcon = (choice) => {
    switch (choice) {
        case choices.ROCK:
            return 'far fa-hand-rock'
        case choices.PAPER:
            return 'far fa-hand-paper'
        case choices.SCISSOR:
            return 'far fa-hand-scissors'
        default:
            return undefined;
    }
}

/* All combinations of a two-player rock-paper-scissor-match as a array
 * [
 *   [0 = int: Choice 1 (Use const "choice"-obj)
 *    1 = int: Choice 2 (Use cost "choice"-obj)
 *    2 = int: Who has won: Draft = 0, Choice1 = 1, Choice2 = 2
 *    3 = string: Explaination of the result (english)
 *   ],  
 *   ...
 * ]
 */
const combinations = [
    [choices.ROCK, choices.ROCK, results.DRAW, "Draw"],
    [choices.PAPER, choices.PAPER, results.DRAW, "Draw"],
    [choices.SCISSOR, choices.SCISSOR, results.DRAW, "Draw"],
    [choices.PAPER, choices.ROCK, results.PLAYER1WON, "Paper wraps up rock"],
    [choices.ROCK, choices.SCISSOR, results.PLAYER1WON, "Rock grids scissor"],
    [choices.SCISSOR, choices.PAPER, results.PLAYER1WON, "Scissor cuts paper"],
    [choices.ROCK, choices.PAPER, results.PLAYER2WON, "Paper wraps up rock"],
    [choices.SCISSOR, choices.ROCK, results.PLAYER2WON, "Rock grids scissor"],
    [choices.PAPER, choices.SCISSOR, results.PLAYER2WON, "Scissor cuts paper"]
]

/** 
 * Get random integer
 * @param {int} min Minimum value to return (incl.)
 * @param {int} max Maximum value to return (incl.)
 */
const getRandom = (min = 0, max = 1) => {
    if (min > max) {
        throw Error('min should be less or equal to max')
    }
    return Math.floor(Math.random() * ((max - min) + 1)) + min
}

export const getRandomChoice = () => {
    return getRandom(0, Object.keys(choices).length - 1);
}

/**
 * Returns obj which indicated the winner and contains the explaination:
 * e.g: { winner: 1, explaination: "Scissor cuts paper" } (Use const "results"-obj to get winner)
 * @param {int} player1Choice 0 rock, 1 paper, 2 scissor (Use const "choice"-obj)
 * @param {int} player2Choice 0 rock, 1 paper, 2 scissor (Use const "choice"-obj)
 */
export const getWinner = (player1Choice, player2Choice) => {
    const matchingCombination = combinations.find(comb => {
        return comb[0] === player1Choice && comb[1] === player2Choice
    })

    if (!matchingCombination) {
        throw Error(`No combination found for player1Choice(${player1Choice}) and player2Choice(${player2Choice}) `)
    }
    
    return {
        winner: matchingCombination[2],
        explaination: matchingCombination[3]
    }
}