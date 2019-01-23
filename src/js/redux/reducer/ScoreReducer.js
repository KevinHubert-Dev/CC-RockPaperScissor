// TODO: Add real BotAPI-logic currently only returns hardcoded values
import * as BotAPI from '../../logic/bot.js'

/* Dispatchable actions */
/* HVB = Human vs Bot */
export const INCR_HVB_HUMAN_POINT = 'INCR_HVB_HUMAN_POINT';
export const INCR_HVB_BOT_POINT = 'INCR_HVB_BOT_POINT';
export const INCR_HVB_DRAW = 'INCR_HVB_DRAW';

/* BVB = Bot vs Bot */
export const INCR_BVB_BOT1_POINT = 'INCR_BVB_BOT1_POINT';
export const INCR_BVB_BOT2_POINT = 'INCR_BVB_BOT2_POINT';
export const INCR_BVB_DRAW = 'INCR_BVB_DRAW';

export const RESET_SCORE = 'RESET_SCORE';

/* Init object to use when reducer get called for the first time */
const defaultScoreState = {
  botVsBot: {
    bot1: 0,
    bot2: 0,
    draw: 0
  },
  humanVsBot: {
    human: 0,
    bot: 0,
    draw: 0
  }
}

/**
 * ScoreReducer. Reducer-function to call when a action get dispatched
 * @param {*} state Current state of the store.
 * @param {*} action Action which was dispatched
 */
export const reducer = (state = defaultScoreState, action) => {
  switch (action.type) {
    case INCR_HVB_DRAW: {
      return {
        ...state,
        humanVsBot: {
          ...state.humanVsBot,
          draw: state.humanVsBot.draw + 1
        }
      }
    }
    /* Add 1 Point for Human in HumanVsBot-Scoring */
    case INCR_HVB_HUMAN_POINT: {
      const rtn = {
        ...state,
        humanVsBot: {
          ...state.humanVsBot,
          human: state.humanVsBot.human + 1
        }
      }
      return rtn;
    }
    /* Add 1 Point for Bot in HumanVsBot-Scoring */
    case INCR_HVB_BOT_POINT: {
      return {
        ...state,
        humanVsBot: {
          ...state.humanVsBot,
          bot: state.humanVsBot.bot + 1
        }
      }
    }
    /* Add 1 draw in HumanVsBot-Scoring */
    case INCR_BVB_DRAW: {

      return {
        ...state,
        botVsBot: {
          ...state.botVsBot,
          draw: state.botVsBot.draw + 1
        }
      }
    }
    /* Add 1 Point for Bot1 in BotVsBot-Scoring */
    case INCR_BVB_BOT1_POINT: {

      return {
        ...state,
        botVsBot: {
          ...state.botVsBot,
          bot1: state.botVsBot.bot1 + 1
        }
      }
    }
    /* Add 1 Point for Bot2 in BotVsBot-Scoring.  */
    case INCR_BVB_BOT2_POINT: {

      return {
        ...state,
        botVsBot: {
          ...state.botVsBot,
          bot2: state.botVsBot.bot2 + 1
        }
      }
    }
    /* Add 1 draw in BotVsBot-Scoring.  */
    case INCR_BVB_DRAW: {
      return {
        ...state,
        botVsBot: {
          ...state.botVsBot,
          draw: state.botVsBot.draw + 1
        }
      }
    }
    /* Reset score for Bot vs Bot and Human vs Bot. */
    case RESET_SCORE: {
      return {
        ...state,
        botVsBot: {
          bot1: 0,
          bot2: 0,
          draw: 0
        },
        humanVsBot: {
          human: 0,
          bot: 0,
          draw: 0
        }
      }
    }
    default: {
      return state;
    }
  }
}