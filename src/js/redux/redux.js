import * as GameReducer from './reducer/GameReducer.js'
import * as ScoreReducer from './reducer/ScoreReducer.js'

/**
 * Combine multiple independed reducers-functions to a single reducer-function.
 * All reducers will be called when a action get dispatched and return their output into a specific object-property 
 * @param {object} state Current state of the store 
 * @param {object} action Action which was dispatched
 */
const combinedReducer = (state = {}, action) => {
  const x = {
    score: ScoreReducer.reducer(state.score, action),
    game: GameReducer.reducer(state.game, action)
  }
  return x;
}


/**
 * Create a redux-like-store which contains the state and provides all function to:
 * - get the state of the store
 * - dispatch an action
 * - subscribe store-changes
 * - unsubscribe store-changes
 * @param {function} reducer Reducer function to call then an action get dispatched. 
 * Function will receive the current state and the dispatched action 
 */
function createStore(reducer) {
  let state;
  let listeners = [];

  /** 
   * Get the current state. Object returned by the reducer.
  */
  const getState = () => {
    return state;
  }

  /**
   * Add listener (callback-function) which should be called when the state of redux changes.
   * @param {function} listenerToAdd Function to call. 
   */
  const subscribe = (listenerToAdd) => {
    console.log("Subscriber added", listenerToAdd)
    listeners.push(listenerToAdd)
  }

  /**
   * Remove listener (callback-function) from the list of subscribed listeners
   * @param {function} listenerToRemove Function to remove. 
   */
  const unsubscribe = (listenerToRemove) => {
    listeners = listeners.filter(listener => listener !== listenerToRemove)
  }

  /**
   * Dispatch an action of a specfic type which will be processed by 1-n reducers.
   * @param {object} action Object which contain the type of action to dispatch and additional parameters required by the reducer-functions.
   * e.g. { type: <ACTION>, ...param } 
   */
  const dispatch = (action) => {
    console.log("Redux-state", state)
    state = reducer(state, action)
    console.log("Following listeners will be called", listeners)
    listeners.forEach(listener => listener())
  }

  return {
    getState,
    dispatch,
    subscribe,
    unsubscribe
  }

}

/* Create store based on all reducers combined */
export const store = createStore(combinedReducer)

// Intialize Store with default states.
store.dispatch({})


/**
 * Dispatches action to play a HumanVsBot rock-paper-scissors match.
 * Afterwards the win/draw will be added to the score.
 * @param {int} choice Numeric value 0-2 which indicates the 'rock'-, 'paper'- or 'scissor'-selection of the human-player. Specified in BotAPI.js -> choices 
 */
export const HumanVsBotSelectionAction = (choice) => {
  store.dispatch({
    type: GameReducer.HUMAN_CHOICE_CHANGED,
    choice
  })

  /* Get winner and dispatch action to add win/draw to HumanVsBot-score  */
  const winnerValue = store.getState().game.lastResult.winner
  switch (winnerValue) {
    case 0: store.dispatch({ type: ScoreReducer.INCR_HVB_DRAW }); break;
    case 1: store.dispatch({ type: ScoreReducer.INCR_HVB_HUMAN_POINT }); break;
    case 2: store.dispatch({ type: ScoreReducer.INCR_HVB_BOT_POINT }); break;
    default: throw Error("Unknown winner option. Expected 0-2 instead got", winnerValue)
  }
}

/**
 * Dispatches actions to play a BotVsBot rock-paper-scissors match (randomly).
 * Afterwards the win/draw will be added to the score.
 * @param {int} choice Numeric value 0-2 which indicates the 'rock'-, 'paper'- or 'scissor'-selection. Specified in BotAPI.js -> choices 
 */
export const BotVsBotSelectionAction = () => {
  store.dispatch({ type: GameReducer.BVB_RANDOM_CHOICES })

  /* Get winner and dispatch action to add win/draw to BotVSBot-score  */
  const winnerValue = store.getState().game.lastResult.winner
  switch (winnerValue) {
    case 0: store.dispatch({ type: ScoreReducer.INCR_BVB_DRAW }); break;
    case 1: store.dispatch({ type: ScoreReducer.INCR_BVB_BOT1_POINT }); break;
    case 2: store.dispatch({ type: ScoreReducer.INCR_BVB_BOT2_POINT }); break;
    default: throw Error("Unknown winner option. Expected 0-2 instead got", winnerValue)
  }
}