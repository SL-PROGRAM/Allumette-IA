/////////////////
// Game status //
/////////////////
/**
 * Keep save the state of the game (started or not)
 * @type {boolean}
 */
var isGameStarted = false;

/**
 * Keep the index of the current player.
 * @type {number}
 */
var currentPlayer = 0;

/**
 * Keep the number of click
 * @type {number}
 */
var clickCounter = 0;

/**
 * Restart button
 * @type {HTMLButtonElement}
 */
var $restartButton = document.querySelector('#reload');

/////////////////
//   Players   //
/////////////////

/**
 * List of input use to set players' name.
 * @type {NodeListOf<HTMLInputElement>}
 */
var $playerInputs = document.querySelectorAll('input[id^="player-"]');

/**
 * Span use to display the current player's name.
 * @type {HTMLSpanElement}
 */
var $currentPlayerName = document.querySelector('#print-name');

/**
 * List of css classes use in the grid to display crosses and circles.
 * Indexed by players' index.
 * @type {string[]}
 */


/////////////////////
//    Matches     ///
/////////////////////


/**
 * div use to display matches.
 * @type {NodeListOf<HTMLDivElement>}
 */
var $matchesWrapper = document.querySelector('div.matches-wrapper');

/**
 * List of button match.
 * @type {NodeListOf<HTMLDivElement>}
 */
var $buttonsMatch = document.querySelectorAll('button[id^="match-"');


/**
 * Span use to display the current match remain
 * @type {HTMLSpanElement}
 */
var $matchRemain = document.querySelector("#matchRemain");

/**
 * input use to set number of matches
 */
var $inputMatchesNumber = document.querySelector("#matches-number");


/**
 * input use to play alone
 */
var $inputPlayAlone = document.querySelector("#play-alone");

/**
 * Span use to display the current match remove
 * @type {HTMLSpanElement}
 */
var $matchRemove = document.querySelector("#matchRemove");


