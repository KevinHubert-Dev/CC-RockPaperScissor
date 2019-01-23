import * as menuComponent from './components/menuComponent.js'
import * as scoreComponent from './components/scoreComponent.js'
import * as gameViewComponent from './components/gameViewComponent.js'

const menu = new menuComponent.menuComponent(document.getElementById('menu'));
menu.init();
const score = new scoreComponent.scoreComponent(document.getElementById('score'));
score.init();
const game = new gameViewComponent.gameViewComponent(document.getElementById('game'));
game.init();