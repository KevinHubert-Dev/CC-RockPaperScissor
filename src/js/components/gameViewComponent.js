import * as redux from '../redux/redux.js'
import * as BotAPI from '../logic/bot.js'

/**
 * gameViewComponent renders the current rock-paper-scissor-game and information about the last winner. 
 * @param {object} DOMElement DOMElement to render in. (e.g.: document.getElementById('...'))
 */
let gameViewComponent = function gameViewComponent(DOMElement) {
  this.element = DOMElement;

  /* subscribes to the redux.store to automatically rerender on changes */
  redux.store.subscribe(() => { this.render(redux.store.getState()); });
}

/**
 * Render choices of the last rock-paper-scissor-match
 * @param {int} choice1 rendered on the left-side: 0 rock, 1 paper, 2 scissor (more info: "choice"-obj in bot.js)
 * @param {int} choice2 Same as choice1 but rendered on the right-side. 
 */
gameViewComponent.prototype.renderChoice = function (choice1, choice2) {
  return `<div class="choicebox horizontal-mirrored">
                <i class="${BotAPI.getChoiceIcon(choice1)}"></i>
            </div>
            <div class="choicebox">
                <i class="${BotAPI.getChoiceIcon(choice2)}"></i>
            </div>`
}

/**
 * Alternative renderResultExplaination which use up to three nested ternary-operators instead of switch-case.
 * Shorter but worse to understand and no default-case. TODO: Would like to get others opinion
 */
gameViewComponent.prototype.renderResultExplainationAlternative = function (lastResult) {
  return `
      <h2 class='textCenter'>${lastResult.type === BotAPI.gameModus.HUMAN_VS_BOT
    ? lastResult.winner === 0 ? 'Draw' : lastResult.winner === 1 ? 'You won' : 'You lost'
    : lastResult.winner === 0 ? 'Draw' : lastResult.winner === 1 ? 'Bot 1 won' : 'Bot 2 won'}
      </h2>
    <h3 class='textCenter'>${lastResult.explaination}</h3>
  `
}

/**
 * Render the explaination of the result to descripe who won and why.
 * @param {obj} lastResult Object which contain information about the gameModus (HumanVsHuman or BotVsBot),
 * the winner and an explaination why the winner has won
 */
gameViewComponent.prototype.renderResultExplaination = function (lastResult) {
  let winnerText = '';
  if (lastResult.type === BotAPI.gameModus.HUMAN_VS_BOT) {
    switch (lastResult.winner) {
      case 0: winnerText = 'Draw'; break;
      case 1: winnerText = 'You won'; break;
      case 2: winnerText = 'You lost'; break;
      default: throw Error(`Unexpected value(${lastResult.winner}) for variable lastResult.winner`)
    }
  } else {
    switch (lastResult.winner) {
      case 0: winnerText = 'Draw'; break;
      case 1: winnerText = 'Bot 1 won'; break;
      case 2: winnerText = 'Bot 2 won'; break;
      default: throw Error(`Unexpected value(${lastResult.winner}) for variable lastResult.winner`)
    }
  }

  return `
    <h1 class='textCenter'>${winnerText}</h1>
    <h3 class='textCenter'>${lastResult.explaination}</h3>
  `
}

/**
 * Render DOM-elements of gameplayView inside the DomElement passed in the constructor
 * @param {obj} currentReduxState 
 */
gameViewComponent.prototype.render = function ({ game }) {
  if (game.lastResult) {
    /* Only render when a game has been played */
    this.element.innerHTML = `
            <div class='gameArea'>
            ${
      game.lastResult.type === BotAPI.gameModus.HUMAN_VS_BOT
        ? this.renderChoice(game.humanVsBot.humanChoice, game.humanVsBot.botChoice) /* Last game vs HumanVsBot */
        : this.renderChoice(game.botVsBot.bot1Choice, game.botVsBot.bot2Choice) /* Last game vs BotVsBot */
      }
            </div>
            ${this.renderResultExplaination(game.lastResult)}
        `
  } else {
    this.element.innerHTML = '<p class="noGamePlayerYet">No game played yet</p>'
  }
}

/** 
 * Initialize: Render component with current reduxState as param
*/
gameViewComponent.prototype.init = function () {
  this.render(redux.store.getState());
}

/* Create new gameViewComponent instance and initialize it */
const game = new gameViewComponent(document.getElementById("game"))
game.init()