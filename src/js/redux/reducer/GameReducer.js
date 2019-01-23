// TODO: Add real BotAPI-logic currently only returns hardcoded values
import * as BotAPI from '../../logic/bot.js'

/* Dispatchable actions */
export const HUMAN_CHOICE_CHANGED = 'HUMAN_CHOICE_CHANGED'
export const BVB_RANDOM_CHOICES = 'BVB_RANDOM_CHOICES'

/* Init object to use when reducer get called for the first time */
const defaultGameState = {
  humanVsBot: {
    humanChoice: undefined,
    botChoice: undefined,
    result: undefined
  },
  botVsBot: {
    bot1Choice: undefined,
    bot2Choice: undefined,
    result: undefined
  }
}

/**
 * GameReducer. Reducer-function to call when a action get dispatched
 * @param {*} state Current state of the store.
 * @param {*} action Action which was dispatched
 */
export const reducer = (state = defaultGameState, action) => {
  switch (action.type) {
    /* Set choice of player and randomly generate a bot-choice. Human vs bot functionality. */
    case HUMAN_CHOICE_CHANGED: {
      const botChoice = BotAPI.getRandomChoice();
      const result = BotAPI.getWinner(action.choice, botChoice)

      return {
        ...state,
        humanVsBot: {
          humanChoice: action.choice,
          botChoice,
        },
        lastResult: {
          ...result,
          type: BotAPI.gameModus.HUMAN_VS_BOT
        }
      }
    }
    /* Randomly get a choice for both bots. => Bot vs bot functionality. */
    case BVB_RANDOM_CHOICES: {
      const bot1Choice = BotAPI.getRandomChoice()
      const bot2Choice = BotAPI.getRandomChoice()
      const result = BotAPI.getWinner(bot1Choice, bot2Choice)

      return {
        ...state,
        botVsBot: {
          bot1Choice,
          bot2Choice,
        },
        lastResult: {
          ...result,
          type: BotAPI.gameModus.BOT_VS_BOT
        }
      }
    }
    default: {
      return state;
    }
  }
}