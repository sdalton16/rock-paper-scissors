let comp_selection;
let user_selection;
let winner = 3;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let user_score = document.querySelector('#user_score');
let comp_score = document.querySelector('#comp_score');
let user_counter = 0;
let comp_counter = 0;

const main = document.querySelector('#main');
const game_result = document.querySelector('#game_result');
const restart = document.querySelector('#restart');
game_result.hidden = true;
restart.hidden = true;

restart.addEventListener('click', () => location.reload());

rock.addEventListener('click', () => {
    user_selection = 1;
    return round(user_selection);
});

paper.addEventListener('click', () => {
    user_selection = 2;
    return round(user_selection);
});

scissors.addEventListener('click', () => {
    user_selection = 3;
    return round(user_selection);
});
// user_win = 1
// comp_win = 0
// rock = 1
// paper = 2
// scissors = 3

// Randomly assign computer choice for each round, called in round function
const getCompSelection = function () {
    let comp_selection = 0;
    comp_selection = Math.floor(Math.random() * 3) + 1;
    return comp_selection;
}

// Evaluates each round and returns winner or calls iteself if tie, called
// in game function
const round = function (user_selection) {
    comp_selection = getCompSelection();

    if (comp_selection === 1 && user_selection === 3) {
        winner = 0;
        console.log('Computer wins round - Rock beats scissors :(');
        result.textContent = 'Computer wins round - Rock beats scissors :(';
        comp_counter += 1;
        comp_score.textContent = comp_counter;
        return checkForWinner();
    }

    else if (comp_selection === 2 && user_selection === 1) {
        winner = 0;
        console.log('Computer wins round - Paper beats rock :(');
        result.textContent = 'Computer wins round - Paper beats rock :(';
        comp_counter += 1;
        comp_score.textContent = comp_counter;
        return checkForWinner();
    }

    else if (comp_selection === 3 && user_selection === 2) {
        winner = 0;
        console.log('Computer wins round - Scissors beats paper :(');
        result.textContent = 'Computer wins round - Scissors beats paper :(';
        comp_counter += 1;
        comp_score.textContent = comp_counter;
        return checkForWinner();
    }

    else if (user_selection === 1 && comp_selection === 3) {
        winner = 1;
        console.log('User wins round - Rock beats scissors :)');
        result.textContent = 'User wins round - Rock beats scissors :)';
        user_counter += 1;
        user_score.textContent = user_counter;
        return checkForWinner();
    }

    else if (user_selection === 2 && comp_selection === 1) {
        winner = 1;
        console.log('User wins round - Paper beats rock :)');
        result.textContent = 'User wins round - Paper beats rock :)';
        user_counter += 1;
        user_score.textContent = user_counter;
        return checkForWinner();
    }

    else if (user_selection === 3 && comp_selection === 2) {
        winner = 1;
        console.log('User wins round - Scissors beats paper :)');
        result.textContent = 'User wins round - Scissors beats paper :)';
        user_counter += 1;
        user_score.textContent = user_counter;
        return checkForWinner();
    }

    else if (user_selection === comp_selection) {
        console.log('Tie...Play Again');
        result.textContent = 'Tie...Play Again';
        return round();
    }
}

const checkForWinner = function () {

    if (comp_counter === 5 || user_counter === 5) {
        main.hidden = true;

        if (comp_counter === 5) {
            game_result.hidden = false;
            restart.hidden = false;
            comp_counter = 0;
            user_counter = 0;
            game_result.textContent = 'Computer wins game :(';
            return 'Game over - comp win';
        }

        if (user_counter === 5) {
            game_result.hidden = false;
            restart.hidden = false;
            comp_counter = 0;
            user_counter = 0;
            game_result.textContent = 'Computer wins game :(';
            return 'Game over - user win';
        }
        return 'Continue game';
    };
    return 'Continue game';
};