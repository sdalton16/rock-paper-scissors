let comp_selection;
let user_selection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const instruct = document.querySelector('#instruct');

let user_score = document.querySelector('#user_score');
let comp_score = document.querySelector('#comp_score');
let user_counter = 0;
let comp_counter = 0;

const main = document.querySelector('#main');
const game_result = document.querySelector('#game_result');
const restart = document.querySelector('#restart');
const game_over = document.querySelector('#game_over');

const prescreen = document.querySelector('#prescreen');
let user_name = document.querySelector('#user');
const player_name = document.querySelector('#player_name');
const user_name_submit = document.querySelector('#user_name_submit');

user_name_submit.addEventListener('click', () => {
    user_name = user_name.value;
    
    if (user_name === '') {
        user_name = 'Player';
    }

    player_name.textContent = user_name + ':';
    main.scrollIntoView();
    prescreen.remove();
});

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

const round = function (user_selection) {
    comp_selection = getCompSelection();
    instruct.textContent = 'Next move:';

    if (comp_selection === 1 && user_selection === 3) {
        result.textContent = 'Computer wins round - Rock beats scissors :(';
        comp_counter += 1;
        comp_score.textContent = comp_counter;
        return checkForWinner();
    }

    else if (comp_selection === 2 && user_selection === 1) {
        result.textContent = 'Computer wins round - Paper beats rock :(';
        comp_counter += 1;
        comp_score.textContent = comp_counter;
        return checkForWinner();
    }

    else if (comp_selection === 3 && user_selection === 2) {
        result.textContent = 'Computer wins round - Scissors beats paper :(';
        comp_counter += 1;
        comp_score.textContent = comp_counter;
        return checkForWinner();
    }

    else if (user_selection === 1 && comp_selection === 3) {
        result.textContent = `${user_name} wins round - Rock beats scissors :)`;
        user_counter += 1;
        user_score.textContent = user_counter;
        return checkForWinner();
    }

    else if (user_selection === 2 && comp_selection === 1) {
        result.textContent = `${user_name} wins round - Paper beats rock :)`;
        user_counter += 1;
        user_score.textContent = user_counter;
        return checkForWinner();
    }

    else if (user_selection === 3 && comp_selection === 2) {
        result.textContent = `${user_name} wins round - Scissors beats paper :)`;
        user_counter += 1;
        user_score.textContent = user_counter;
        return checkForWinner();
    }

    else if (user_selection === comp_selection) {
        result.textContent = 'Tie...Play Again';
        return round();
    }
}

const getCompSelection = function () {
    comp_selection = Math.floor(Math.random() * 3) + 1;
    return comp_selection;
}

const checkForWinner = function () {
    if (comp_counter === 5 || user_counter === 5) {
        main.remove();
        game_over.classList.add('game_over');

        if (comp_counter === 5) {
            game_result.hidden = false;
            restart.hidden = false;
            comp_counter = 0;
            user_counter = 0;
            game_result.textContent = 'Computer wins game :(';
            return console.log('Game over - comp win');
        }

        if (user_counter === 5) {
            game_result.hidden = false;
            restart.hidden = false;
            comp_counter = 0;
            user_counter = 0;
            game_result.textContent = `${user_name} wins game :)`;
            return console.log('Game over - user win');
        }
    };
    return console.log(`Continue game - Comp: ${comp_counter} / User: ${user_counter}`);
};