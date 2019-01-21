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
    state = reducer(state, action)
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


