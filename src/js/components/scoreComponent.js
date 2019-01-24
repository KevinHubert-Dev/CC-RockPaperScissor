import * as redux from '../redux/redux.js'

/**
 * scoreComponent is used to render the scores of HumanVsBot and 
 * BotVsBot rock-paper-scissor-matches
 * @param {object} DOMElement DOMElement to render buttons in. (eg: document.getElementById())
 */
export const scoreComponent = function scoreComponent(DOMElement) {
  this.element = DOMElement;

  /* Rerender with each Redux-state-change */
  redux.store.subscribe(() => { this.render(redux.store.getState()); });
}

/**
 * Render DOM-elements of scoreComponent inside the DomElement passed in the constructor
 * @param {obj} currentReduxState 
 */
scoreComponent.prototype.render = function ({ score }) {
  const { humanVsBot, botVsBot } = score;
  this.element.innerHTML = `
    <h2 class='textCenter'>Score</h2>
    <div>
      <div>
        <h4>You
          <span class='game-scoring'> ${humanVsBot.human} : ${humanVsBot.bot} </span>
          <i class="fas fa-robot" style='color: #00897B'></i>
        </h4>
        <h5 class='textCenter'>(Draws ${humanVsBot.draw})</h5>
      </div>
      <div>
        <h4>
          <i class="fas fa-robot" style='color: #426FC5'></i>
          <span class='game-scoring'> ${botVsBot.bot1} : ${botVsBot.bot2} </span>
          <i class="fas fa-robot" style='color: #00897B'></i>
        </h4>
        <h5 class='textCenter'>(Draws ${botVsBot.draw})</h5>
      </div>
    </div>
  `
}

/** 
 * Initialize: Render component with current reduxState as param
*/
scoreComponent.prototype.init = function () {
  this.render(redux.store.getState());
}