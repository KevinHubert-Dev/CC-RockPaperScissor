import * as redux from '../redux/redux.js'
import * as ScoreReducer from '../redux/reducer/ScoreReducer.js'
import * as BotAPI from '../logic/bot.js'

/**
 * menuComponent is used to render all buttons which are needed
 * to play rock-paper-scissor in HumanVsBot- and BotVsBot-mode 
 * and a button to reset the score 
 * @param {object} DOMElement DOMElement to render buttons in. (e.g.: document.getElementById('...'))
 */
let menuComponent = function menuComponent(DOMElement) {
  this.element = DOMElement;
}

/**
 * Render menuComponent inside DomElement passed inside the constructor
 */
menuComponent.prototype.render = function () {
  this.element.innerHTML = `
    <div class='flexContainer'>
      <button class='flex-1' id='rockBtn' type='button'><i class="far fa-hand-rock"></i><p>Rock</p></button>
      <button class='flex-1' id='paperBtn' type='button'><i class="far fa-hand-paper"></i><p>Paper</p></button>
      <button class='flex-1' id='scissorBtn' type='button'><i class="far fa-hand-scissors"></i><p>Scissor</p></button>
      <button class='flex-1' id='randomBtn' type='button'><i class="fas fa-robot"></i><p>PC vs. PC</p></button>
      <button class='flex-1' id='resetScoreBtn' type='button'><i class="fas fa-undo"></i><p>Reset Score</p></button>
    </div>
    `
}

/** 
 * Initialize: Render component first and add eventListeners to recognize interactions
*/
menuComponent.prototype.init = function () {
  this.render()

  /* Add eventListener to dispatch RESET_SCORE action */
  const resetScoreBtn = this.element.querySelector('#resetScoreBtn')
  resetScoreBtn.addEventListener('click', () => {
    console.log("resetScoreBtn clicked")
    redux.store.dispatch({ type: ScoreReducer.RESET_SCORE })
  })

  /* Add eventListener - to start a game based on the human-choose (scissor, rock, paper) */
  const scissorBtn = this.element.querySelector('#scissorBtn')
  scissorBtn.addEventListener('click', () => {
    console.log("scissorBtn clicked")
    redux.HumanVsBotSelectionAction(BotAPI.choices.SCISSOR)
  })

  const rockBtn = this.element.querySelector('#rockBtn')
  rockBtn.addEventListener('click', () => {
    console.log("rockBtn clicked")
    redux.HumanVsBotSelectionAction(BotAPI.choices.ROCK)
  })

  const paperBtn = this.element.querySelector('#paperBtn')
  paperBtn.addEventListener('click', () => {
    console.log("paperBtn clicked")
    redux.HumanVsBotSelectionAction(BotAPI.choices.PAPER)
  })

  /* Add eventLister - to start BotVsBot game */
  const randomBtn = this.element.querySelector('#randomBtn')
  randomBtn.addEventListener('click', () => {
    console.log("randomBtn clicked")
    redux.BotVsBotSelectionAction()
  })

}

/* Create new menuComponent instance and initialize it */
const menu = new menuComponent(document.getElementById("menu"))
menu.init()