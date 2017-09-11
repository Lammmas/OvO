## Rock, Paper, Scissors

### User Story:
- As a frequent games player, I'd like to play rock, paper, scissors so that I can spend an hour of
my day having fun.
Required functionality:
- Can I play Player vs Computer?

### Technical Constraints:
- Use modern web development techniques using Angular (1 or 2) and CSS3 (or Less or Sass).

Don't know the game? http://en.wikipedia.org/wiki/Rock-paper-scissors

### Guidance:
- Approach the exercise as if you're building the application for production. How would you ensure
a high quality, maintainable solution?
- As a rough guide it should take around 2-3 hours, but feel free to spend a bit more time to
create a solution you're happy with.
- Include a sentence or two on how you approached the problem and what you'd improve, given
more time.
- Simple, clear solutions are perfectly acceptable. There's no need to over-engineer.
- Please include instructions on how to run the application and tests.

## Answers
I approached the problem by first finding resources (graphics), choosing the frameworks (AngularJS and Angular) and then planning out the game process.

I would additionally add a backend/database connection to allow asynchronous online play against other players, as well as a mode to play not just Rock-Paper-Scissors, but also Rock-Paper-Scissors-Lizard-Spock. Some animations (fists moving up-down 3x as if throwing) would be a nice addon. Also could use basic logic for a "hard" mode that would account for the user's previous selections to logically deduce what to pick to have the highest probability of winning.

I ensured a high quality, maintainable solution by writing easy to understand code, and adding tests in the Angular version. To make this fully production-ready the app should however move the "Game" part (play function) into a Service, which then could be called from any component, and tested separately.

## To run
For the basic AngularJS version, just download the index.html together with the icons folder somewhere on your computer, and open index.html in your browser, or visit [the demo](http://reemet.me/demo/ovo/).

For the Angular 4 version, just download the 'advanced' folder, make sure you have [npm installed](https://docs.npmjs.com/cli/install), then use the README.md inside that folder to run the app or tests, or visit [the demo](http://reemet.me/demo/ovo/advanced/)