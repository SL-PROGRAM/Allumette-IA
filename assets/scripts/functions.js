/**
 * Change matches remain
 */
function changeMatchRemain(id) {
    var remove =0;
    if (id === "match-1"){
        remove = 1;
        if (true === controleMatchesRemain(remove)){
            return;
        }
    }
    else if (id === "match-2"){
        remove = 2;
        if (true === controleMatchesRemain(remove)){
            return;
        }
    }
    else if(id === "match-3"){
        remove = 3;
        if (true === controleMatchesRemain(remove)){
            return;
        }
    }
    else{
        return;
    }
    $matchRemain.innerHTML -= remove;
    for (i=0; i <remove ; i++){
        $matchesWrapper.removeChild($matchesWrapper.firstChild);

    }
    nextTurn();
    startGame();
}


/**
 * controle how many matches the player can remove
 */

function controleMatchesRemain(remove){
    if(remove > $matchRemain.innerHTML){
        alert("Vous pouvez prendre maximum " + $matchRemain.innerHTML + " allumettes")
        return true;
    }
}

/**
 * init number of matches
 */
function initMatchesNumber() {
    var starMatchesNumber = $inputMatchesNumber.value;
    $matchRemain.innerHTML = starMatchesNumber;
    clearMatches();
     for (i=0; i < starMatchesNumber; i++) {
        var iDiv = document.createElement("div");
        iDiv.className = "match";
        $matchesWrapper.appendChild(iDiv);
    }
  }

/**
 * clear matches
 */
function clearMatches() {
    while ($matchesWrapper.firstChild) {
        $matchesWrapper.removeChild($matchesWrapper.firstChild);
    }
}



/**
 * @param {boolean} enable
 */
function enableRestartButton(enable) {
    if (enable) {
        $restartButton.style.display = 'inline';
    } else {
        $restartButton.style.display = 'none';
    }
}

/**
 * Enable or disable player inputs.
 * @param {boolean} enable
 */
function enablePlayerInputs(enable) {
    $playerInputs.forEach(function ($input) {
        $input.disabled = !enable;
    });
}

/**
 * Enable or disable start matches input.
 * @param {boolean} enable
 */

function enableMatchesInputs(enable) {
    $inputMatchesNumber.disabled = !enable;
}


/**
 * Enable or disable IA.
 * @param {boolean} enable
 */

function enablePlayAlone(enable) {
    $inputPlayAlone.disabled = !enable;
}

/**
 * Select the right player for the next turn.
 */
function nextPlayer() {
    currentPlayer++;
    if(true === $inputPlayAlone.checked && currentPlayer === 1){
        changeMatchRemain(iaPlay())
    }
    else {
        if ($playerInputs.length <= currentPlayer) {
            currentPlayer = 0;
        }
        updatePlayerName(currentPlayer);
    }
}

/**
 * Return the current player's name.
 * @return {string}
 */
function getCurrentPlayerName() {
    var currentPlayerName = $playerInputs.item(currentPlayer).value;

    if (null === currentPlayerName || '' === currentPlayerName) {
        currentPlayerName = 'Joueur ' + (currentPlayer + 1);
    }

    return currentPlayerName;
}

/**
 * Update the current player's name in the span.
 */
function updatePlayerName() {
    $currentPlayerName.innerHTML = getCurrentPlayerName();
}


/**
 * Execute stuff to go to the next turn: select right player and run victory check.
 */
function nextTurn() {
    var isFinished = isGameFinished();

    if (true === isFinished) {
        setTimeout(function () {
            alert(getCurrentPlayerName() + ' à gagné !');
        });
    }
    else if (false === isFinished) {
        setTimeout(function () {
            alert(getCurrentPlayerName() + ' à perdu !');
        });
    }else{

            nextPlayer();
        }


}

/**
 * Ready to start a new game.
 */
function allowStartGame() {
    isGameStarted = false;
    currentPlayer = 0;
    enablePlayerInputs(true);
    enableRestartButton(false);
    enableMatchesInputs(true);
    enablePlayAlone(true);
    updatePlayerName();
    initMatchesNumber();
}

/**
 * Run just after the beginning of the game.
 */
function startGame() {
    if (!isGameStarted) {
        isGameStarted = true;
        enablePlayerInputs(false);
        enableRestartButton(true);
        enableMatchesInputs(false);
        enablePlayAlone(false);
    }
}


/**
 * Test if a player win
 */
function isGameFinished(){
    if($matchRemain.innerHTML === "1"){
        return true;
    }
    else if ($matchRemain.innerHTML <= "0"){
        return false;
    }
    else {
        return null;
    }
}



/**
 * Update player2 name and enable or disable player2 input
 */
function onePlayer() {
    var iaName = document.querySelector("#player-2");
    if (true === $inputPlayAlone.checked) {
        iaName.value = "IA";
        iaName.disabled = true;
    }
    if (false === $inputPlayAlone.checked) {
        iaName.value = null;
        iaName.disabled = false;
    }
}

/**
 * define how many matches the IA remove
 */
function iaPlay() {
    var numberMatchesRemain = $matchRemain.innerHTML
    var remove = 0;
    if (numberMatchesRemain % 4 === 0 ){
        remove = 3;
    }
    if (numberMatchesRemain % 4 === 1 ){
        remove = Math.floor((Math.random() * 3) + 1);
    }
    if (numberMatchesRemain % 4 === 2 ){
        remove = 1;
    }
    if (numberMatchesRemain % 4 === 3 ){
        remove = 2;
    }
    if(remove === 1){
        $matchRemove.innerHTML = "L'IA a pris " + remove+ " allumette"
    }
    else{
        $matchRemove.innerHTML = "L'IA a pris " + remove+ " allumettes"
    }

    return "match-"+remove;
}
