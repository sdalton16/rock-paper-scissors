let comp_selection;
let user_selection;
let winner;

// user_win = 1
//comp_win = 0
// rock = 1
// paper = 2
// scissors = 3


// Randomly assign computer choice for each round, called in round function
const getCompSelection = function () {
    let comp_selection = 0;
    comp_selection = Math.floor(Math.random() * 3) + 1;
    return comp_selection;
}

// Prompts user for their selection for each round, called in round function
const getUserSelection = function () {
    user_selection = prompt('Rock, Paper, or Scissors? ');

    if (user_selection.toLowerCase() === 'rock') {
        user_selection = 1;
    }

    else if (user_selection.toLowerCase() === 'paper') {
        user_selection = 2;
    }

    else if (user_selection.toLowerCase() === 'scissors') {
        user_selection = 3;
    }

    else {
        return getUserSelection();
    }

    return user_selection;
}

// Evaluates each round and returns winner or calls iteself if tie, called
// game function
const round = function () {
    comp_selection = getCompSelection();
    user_selection = getUserSelection();

    if (comp_selection === 1 && user_selection === 3) {
        winner = 0;
        console.log('Computer wins round - Rock beats scissors :(');
        return winner;
    }

    else if (comp_selection === 2 && user_selection === 1) {
        winner = 0;
        console.log('Computer wins round - Paper beats rock :(');
        return winner;
    }

    else if (comp_selection === 3 && user_selection === 2) {
        winner = 0;
        console.log('Computer wins round - Scissors beats paper :(');
        return winner;
    }

    else if (user_selection === 1 && comp_selection === 3) {
        winner = 1;
        console.log('User wins round - Rock beats scissors :)');
        return winner;
    }

    else if (user_selection === 2 && comp_selection === 1) {
        winner = 1;
        console.log('User wins round - Paper beats rock :)');
        return winner;
    }

    else if (user_selection === 3 && comp_selection === 2) {
        winner = 1;
        console.log('User wins round - Scissors beats paper :)');
        return winner;
    }

    else if (user_selection === comp_selection) {
        console.log('Tie...Play Again');
        return round();
    }
}

// primary function to run game
const game = function () {
    let comp_score = 0;
    let user_score = 0;

    for (i = 0; i < 5; i++) {
        winner = round();
        if (winner === 0) {
            comp_score++;
            if (comp_score === 3) {
                return console.log('Computer wins game :(')
            }
        }

        else if (winner === 1) {
            user_score++;
            if (user_score === 3) {
                return console.log('User wins game :)')
            }
        }

        else {
            return console.log('Invalid round result');
        }
    }

    return console.log('Invalid game result');
}