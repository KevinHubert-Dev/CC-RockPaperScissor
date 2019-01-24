# CC-RockPaperScissor - (JavaScript)

This project is my implementation of the "Game time - Rock, Paper, Scissors"-coding-challenge.

The challenge was to realise a webbased application where you can play rock, paper, scissors to spend a few minutes/hours of you day.
Because this is a front-challenge i was not allowed to use frameworks/libs, like jQuery, Zepto, ReactJS, VueJS or Angular etc.
Libs and external modules were only allowed used for testing- or build-purpose.

Note: This project implements it's own redux-inspired flux-pattern. For more informations view 'src/js/redux' folder


## Specification
### Userstory
As a frequent games player, i'd like to play rock, paper scissors, so that i can spend an hour of my day having fun.
Learn the game? [Rock, Paper, Scissors on Wikipedia](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors)

### Acceptance Criteria
- Can i play Player vs. Computer?
- Can i play Computer vs. Computer?
- Can i play a different game each time?
- Can i play in a modern browser?

### Technical constraints
- Use HTML/CSS/Javascript
- External libs/modules for tests/build only
- CSS, LESS and SASS are allowed
- Polyfills are allowed
- For any other thing stick to standard, recent HTML5 and JavaScript APIs. No frameworks/libs, like jQuery, Zepto, React, VueJS or Angular  

## Browser-Support
Support for the following browser was manually tested. Other browsers may work too.
### Desktop
- Firefox 63+ 
- Chrome 71+
- Edge 17+

### Mobile
For mobile devices only portait-view is offical supported
- Samsung Internet 8.2+
- Chrome for Android 70+
- Firefox for Android 64+
- Firefox Klar 8+
- Opera Mobile 49+
- Opera Mini 38+
- Edge 42+



## Prerequisites
The following version where used for development. Lower version may work too.
- NPM v6.1.0+
- Node v6.11.0+

## Install & Run

### Clone & Install
``` bash
git clone https://github.com/4scotty/coding_challenge_kevin.git
cd coding_challenge_kevin
npm install
```

This can take a while ... ☕

I've commited the whole 'dist'-folder so you don't have to execute the following steps to try the app but feel free to do it anyway.


### Run Tests
The project-test-suite currently only contain unit-tests for bot.js. The tests can be started within the following command. Automatic test uses Mocha + Chai.
```
npm test
```

### Transpile ES6 to ES5 (using Babel)

```
npm run build
```

### Pack transpiled code

```
npm run pack
```

### Run local
Open "dist/index.html" to run directly in your browser.

OR

Use webserver to serve files inside the "dist"-directory. 
Default port 8080, set "ROCK_PAPER_SCISSOR_PORT"-enviroment-variable to change port.
```
npm start
```
Open browser and navigate to http://localhost:*port*


## UI

### Mockup

Planned UI. Photo of my whiteboard.  
![Wireframe](/screenshots/wireframe.jpg?raw=true)

### Desktop - Screenshot

---

Default screen  
![Starting_screen](/screenshots/defaultScreen.jpg?raw=true)

---

Game screen  
![Game_Screen](/screenshots/game.jpg?raw=true)


### Mobile - Screenshot

Default screen  
![Starting_screen](/screenshots/defaultScreen_mobile.jpg?raw=true)

---

Game screen  
![Game_Screen](/screenshots/game_mobile.jpg?raw=true)


# Known Bugs
- Landscape-orientation is not working on mobile-devices
- The app may look slighly different in IE & Edge because they don't support "justify-content: space-evenly" (CSS) and got a fallback instead.
- Internet Explorer is not supported yet. Should be fixed by adding additional plugins for babel

# ToDo
- [x] Add tests
- [ ] Add Internet Explorer support
- [ ] Change css/less to support landscape-orientation on mobile-devices

# About

Made with 💗 & 💻 by Kevin H.

More about me can be found here
- :octocat: [GitHub](https://github.com/KevinHubert-Dev) 
- 🏠 [Homepage](http://Kevin-Hubert.de/)