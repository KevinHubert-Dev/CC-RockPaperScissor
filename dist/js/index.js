!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWinner=t.getRandomChoice=t.getChoiceIcon=t.results=t.choices=t.gameModus=void 0;t.gameModus={HUMAN_VS_BOT:0,BOT_VS_BOT:1};var r={ROCK:0,PAPER:1,SCISSOR:2};t.choices=r;var o={DRAW:0,PLAYER1WON:1,PLAYER2WON:2};t.results=o;t.getChoiceIcon=function(e){switch(e){case r.ROCK:return"far fa-hand-rock";case r.PAPER:return"far fa-hand-paper";case r.SCISSOR:return"far fa-hand-scissors";default:return}};var c=[[r.ROCK,r.ROCK,o.DRAW,"Both chose rock"],[r.PAPER,r.PAPER,o.DRAW,"Both chose paper"],[r.SCISSOR,r.SCISSOR,o.DRAW,"Both chose scissor"],[r.PAPER,r.ROCK,o.PLAYER1WON,"Paper wraps up rock"],[r.ROCK,r.SCISSOR,o.PLAYER1WON,"Rock grids scissor"],[r.SCISSOR,r.PAPER,o.PLAYER1WON,"Scissor cuts paper"],[r.ROCK,r.PAPER,o.PLAYER2WON,"Paper wraps up rock"],[r.SCISSOR,r.ROCK,o.PLAYER2WON,"Rock grids scissor"],[r.PAPER,r.SCISSOR,o.PLAYER2WON,"Scissor cuts paper"]];t.getRandomChoice=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e>t)throw Error("min should be less or equal to max");return Math.floor(Math.random()*(t-e+1))+e}(0,Object.keys(r).length-1)};t.getWinner=function(e,t){var n=c.find(function(n){return n[0]===e&&n[1]===t});if(!n)throw Error("No combination found for player1Choice(".concat(e,") and player2Choice(").concat(t,") "));return{winner:n[2],explaination:n[3]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BotVsBotSelectionAction=t.HumanVsBotSelectionAction=t.store=void 0;var r=c(n(5)),o=c(n(2));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}var i,a,s,u=(i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{score:o.reducer(e.score,t),game:r.reducer(e.game,t)}},s=[],{getState:function(){return a},dispatch:function(e){a=i(a,e),s.forEach(function(e){return e()})},subscribe:function(e){s.push(e)},unsubscribe:function(e){s=s.filter(function(t){return t!==e})}});t.store=u,u.dispatch({});t.HumanVsBotSelectionAction=function(e){u.dispatch({type:r.HUMAN_CHOICE_CHANGED,choice:e});var t=u.getState().game.lastResult.winner;switch(t){case 0:u.dispatch({type:o.INCR_HVB_DRAW});break;case 1:u.dispatch({type:o.INCR_HVB_HUMAN_POINT});break;case 2:u.dispatch({type:o.INCR_HVB_BOT_POINT});break;default:throw Error("Unknown winner option. Expected 0-2 instead got",t)}};t.BotVsBotSelectionAction=function(){u.dispatch({type:r.BVB_RANDOM_CHOICES});var e=u.getState().game.lastResult.winner;switch(e){case 0:u.dispatch({type:o.INCR_BVB_DRAW});break;case 1:u.dispatch({type:o.INCR_BVB_BOT1_POINT});break;case 2:u.dispatch({type:o.INCR_BVB_BOT2_POINT});break;default:throw Error("Unknown winner option. Expected 0-2 instead got",e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.RESET_SCORE=t.INCR_BVB_DRAW=t.INCR_BVB_BOT2_POINT=t.INCR_BVB_BOT1_POINT=t.INCR_HVB_DRAW=t.INCR_HVB_BOT_POINT=t.INCR_HVB_HUMAN_POINT=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n(0));function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.INCR_HVB_HUMAN_POINT="INCR_HVB_HUMAN_POINT";t.INCR_HVB_BOT_POINT="INCR_HVB_BOT_POINT";t.INCR_HVB_DRAW="INCR_HVB_DRAW";t.INCR_BVB_BOT1_POINT="INCR_BVB_BOT1_POINT";t.INCR_BVB_BOT2_POINT="INCR_BVB_BOT2_POINT";t.INCR_BVB_DRAW="INCR_BVB_DRAW";t.RESET_SCORE="RESET_SCORE";var c={botVsBot:{bot1:0,bot2:0,draw:0},humanVsBot:{human:0,bot:0,draw:0}};t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;switch((arguments.length>1?arguments[1]:void 0).type){case"INCR_HVB_DRAW":return r({},e,{humanVsBot:r({},e.humanVsBot,{draw:e.humanVsBot.draw+1})});case"INCR_HVB_HUMAN_POINT":return r({},e,{humanVsBot:r({},e.humanVsBot,{human:e.humanVsBot.human+1})});case"INCR_HVB_BOT_POINT":return r({},e,{humanVsBot:r({},e.humanVsBot,{bot:e.humanVsBot.bot+1})});case"INCR_BVB_DRAW":return r({},e,{botVsBot:r({},e.botVsBot,{draw:e.botVsBot.draw+1})});case"INCR_BVB_BOT1_POINT":return r({},e,{botVsBot:r({},e.botVsBot,{bot1:e.botVsBot.bot1+1})});case"INCR_BVB_BOT2_POINT":return r({},e,{botVsBot:r({},e.botVsBot,{bot2:e.botVsBot.bot2+1})});case"INCR_BVB_DRAW":return r({},e,{botVsBot:r({},e.botVsBot,{draw:e.botVsBot.draw+1})});case"RESET_SCORE":return r({},e,{botVsBot:{bot1:0,bot2:0,draw:0},humanVsBot:{human:0,bot:0,draw:0}});default:return e}}},function(e,t,n){"use strict";var r=i(n(4)),o=i(n(6)),c=i(n(7));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}new r.menuComponent(document.getElementById("menu")).init(),new o.scoreComponent(document.getElementById("score")).init(),new c.gameViewComponent(document.getElementById("game")).init()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.menuComponent=void 0;var r=i(n(1)),o=i(n(2)),c=i(n(0));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}var a=function(e){this.element=e};t.menuComponent=a,a.prototype.render=function(){this.element.innerHTML="\n    <div class='flexContainer'>\n      <button class='flex-1' id='rockBtn' type='button'><i class=\"far fa-hand-rock\"></i><p>Rock</p></button>\n      <button class='flex-1' id='paperBtn' type='button'><i class=\"far fa-hand-paper\"></i><p>Paper</p></button>\n      <button class='flex-1' id='scissorBtn' type='button'><i class=\"far fa-hand-scissors\"></i><p>Scissor</p></button>\n      <button class='flex-1' id='randomBtn' type='button'><i class=\"fas fa-robot\"></i><p>PC vs. PC</p></button>\n      <button class='flex-1' id='resetScoreBtn' type='button'><i class=\"fas fa-undo\"></i><p>Reset Score</p></button>\n    </div>\n  "},a.prototype.init=function(){this.render(),this.element.querySelector("#resetScoreBtn").addEventListener("click",function(){r.store.dispatch({type:o.RESET_SCORE})}),this.element.querySelector("#scissorBtn").addEventListener("click",function(){r.HumanVsBotSelectionAction(c.choices.SCISSOR)}),this.element.querySelector("#rockBtn").addEventListener("click",function(){r.HumanVsBotSelectionAction(c.choices.ROCK)}),this.element.querySelector("#paperBtn").addEventListener("click",function(){r.HumanVsBotSelectionAction(c.choices.PAPER)}),this.element.querySelector("#randomBtn").addEventListener("click",function(){r.BotVsBotSelectionAction()})},new a(document.getElementById("menu")).init()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.BVB_RANDOM_CHOICES=t.HUMAN_CHOICE_CHANGED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.HUMAN_CHOICE_CHANGED="HUMAN_CHOICE_CHANGED";t.BVB_RANDOM_CHOICES="BVB_RANDOM_CHOICES";var i={humanVsBot:{humanChoice:void 0,botChoice:void 0,result:void 0},botVsBot:{bot1Choice:void 0,bot2Choice:void 0,result:void 0}};t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HUMAN_CHOICE_CHANGED":var n=r.getRandomChoice(),c=r.getWinner(t.choice,n);return o({},e,{humanVsBot:{humanChoice:t.choice,botChoice:n},lastResult:o({},c,{type:r.gameModus.HUMAN_VS_BOT})});case"BVB_RANDOM_CHOICES":var a=r.getRandomChoice(),s=r.getRandomChoice();return o({},e,{botVsBot:{bot1Choice:a,bot2Choice:s},lastResult:o({},r.getWinner(a,s),{type:r.gameModus.BOT_VS_BOT})});default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scoreComponent=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1));var o=function(e){var t=this;this.element=e,r.store.subscribe(function(){t.render(r.store.getState())})};t.scoreComponent=o,o.prototype.render=function(e){var t=e.score,n=t.humanVsBot,r=t.botVsBot;this.element.innerHTML="\n    <h2 class='textCenter'>Score</h2>\n    <div>\n      <div>\n        <h4>You\n          <span class='game-scoring'> ".concat(n.human," : ").concat(n.bot," </span>\n          <i class=\"fas fa-robot\" style='color: #00897B'></i>\n        </h4>\n        <h5 class='textCenter'>(Draws ").concat(n.draw,")</h5>\n      </div>\n      <div>\n        <h4>\n          <i class=\"fas fa-robot\" style='color: #426FC5'></i>\n          <span class='game-scoring'> ").concat(r.bot1," : ").concat(r.bot2," </span>\n          <i class=\"fas fa-robot\" style='color: #00897B'></i>\n        </h4>\n        <h5 class='textCenter'>(Draws ").concat(r.draw,")</h5>\n      </div>\n    </div>\n  ")},o.prototype.init=function(){this.render(r.store.getState())}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gameViewComponent=void 0;var r=c(n(1)),o=c(n(0));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}var i=function(e){var t=this;this.element=e,r.store.subscribe(function(){t.render(r.store.getState())})};t.gameViewComponent=i,i.prototype.renderChoice=function(e,t){return'\n    <div class="choicebox horizontal-mirrored">\n      <i class="'.concat(o.getChoiceIcon(e),'"></i>\n    </div>\n    <div class="choicebox">\n      <i class="').concat(o.getChoiceIcon(t),'"></i>\n    </div>\n  ')},i.prototype.renderResultExplainationAlternative=function(e){return"\n      <h2 class='textCenter'>".concat(e.type===o.gameModus.HUMAN_VS_BOT?0===e.winner?"Draw":1===e.winner?"You won":"You lost":0===e.winner?"Draw":1===e.winner?"Bot 1 won":"Bot 2 won","\n      </h2>\n    <h3 class='textCenter'>").concat(e.explaination,"</h3>\n  ")},i.prototype.renderResultExplaination=function(e){var t="";if(e.type===o.gameModus.HUMAN_VS_BOT)switch(e.winner){case 0:t="Draw";break;case 1:t="You won";break;case 2:t="You lost";break;default:throw Error("Unexpected value(".concat(e.winner,") for variable lastResult.winner"))}else switch(e.winner){case 0:t="Draw";break;case 1:t="Bot 1 won";break;case 2:t="Bot 2 won";break;default:throw Error("Unexpected value(".concat(e.winner,") for variable lastResult.winner"))}return"\n    <h2 class='textCenter'>".concat(t,"</h2>\n    <h3 class='textCenter'>").concat(e.explaination,"</h3>\n  ")},i.prototype.render=function(e){var t=e.game;t.lastResult?this.element.innerHTML="\n      <div class='gameArea'>\n      ".concat(t.lastResult.type===o.gameModus.HUMAN_VS_BOT?this.renderChoice(t.humanVsBot.humanChoice,t.humanVsBot.botChoice):this.renderChoice(t.botVsBot.bot1Choice,t.botVsBot.bot2Choice),"\n      </div>\n      ").concat(this.renderResultExplaination(t.lastResult),"\n    "):this.element.innerHTML='<p class="noGamePlayerYet">No game played yet</p>'},i.prototype.init=function(){this.render(r.store.getState())}}]);