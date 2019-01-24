import * as BotAPI from '../src/js/logic/bot'

/* Use chai.should as assertion-library */
const chai = require('chai');
let should = chai.should();

/* Minimalistic Object.values-polyfill by Kevin Hubert */
if (!Object.values) {
  Object.values = function values(Obj) {
    return Obj
      ? Object.keys(Obj).map(key => Obj[key])
      : []
  }
}

describe('Bot-API testing', function () {

  /* 50x call getRandomChoice() and expect a valid entry from BotAPI.choices (values) */
  describe('Get random Bot-choices', function () {
    it('getRandomChoice must be a value of BotAPI.choices', function () {
      /* Any better suggestion to test that is welcome! */
      for (let i = 0; i < 50; i++) {
        BotAPI.getRandomChoice().should.be.oneOf([...Object.values(BotAPI.choices)], "getRandomChoice cannot be greater than 2 or less than 0. Rock = 0, Paper = 1, Scissor = 2")
      }
    });
  });

  /* Check if the getChoiceIcon()-function returns the correct class for the <i>-tag */
  describe('get correct Fontawesome-Icon-class', function () {
    it('getChoiceIcon() -> far fa-hand-rock icon', function () {
      BotAPI.getChoiceIcon(BotAPI.choices.ROCK).should.equal('far fa-hand-rock')
    });
    it('getChoiceIcon() -> far fa-hand-paper icon', function () {
      BotAPI.getChoiceIcon(BotAPI.choices.PAPER).should.equal('far fa-hand-paper')
    });
    it('getChoiceIcon() -> far fa-hand-scissors icon', function () {
      BotAPI.getChoiceIcon(BotAPI.choices.SCISSOR).should.equal('far fa-hand-scissors')
    });
  });


  /* Check if each matchup returns the correct winner */
  describe('get correct Winner', function () {
    /* First choice wins */
    it('rock wins against scissor', function () {
      BotAPI.getWinner(BotAPI.choices.ROCK, BotAPI.choices.SCISSOR)["winner"]
        .should.equal(BotAPI.results.PLAYER1WON)
    });
    it('paper wins against rock', function () {
      BotAPI.getWinner(BotAPI.choices.PAPER, BotAPI.choices.ROCK)["winner"]
        .should.equal(BotAPI.results.PLAYER1WON)
    });
    it('scissor wins against paper', function () {
      BotAPI.getWinner(BotAPI.choices.SCISSOR, BotAPI.choices.PAPER)["winner"]
        .should.equal(BotAPI.results.PLAYER1WON)
    });
    
    /* Second choice wins */
    it('scissor lose against rock', function () {
      BotAPI.getWinner(BotAPI.choices.SCISSOR, BotAPI.choices.ROCK)["winner"]
        .should.equal(BotAPI.results.PLAYER2WON)
    });
    it('rock lose against paper', function () {
      BotAPI.getWinner(BotAPI.choices.ROCK, BotAPI.choices.PAPER)["winner"]
        .should.equal(BotAPI.results.PLAYER2WON)
    });
    it('paper lose against scissor', function () {
      BotAPI.getWinner(BotAPI.choices.PAPER, BotAPI.choices.SCISSOR)["winner"]
        .should.equal(BotAPI.results.PLAYER2WON)
    });

    /* Draws */
    it('paper vs paper is draw', function () {
      BotAPI.getWinner(BotAPI.choices.PAPER, BotAPI.choices.PAPER)["winner"]
        .should.equal(BotAPI.results.DRAW)
    });
    it('rock vs rock is draw', function () {
      BotAPI.getWinner(BotAPI.choices.ROCK, BotAPI.choices.ROCK)["winner"]
        .should.equal(BotAPI.results.DRAW)
    });
    it('scissor vs scissor is draw', function () {
      BotAPI.getWinner(BotAPI.choices.SCISSOR, BotAPI.choices.SCISSOR)["winner"]
        .should.equal(BotAPI.results.DRAW)
    });
  });

});
