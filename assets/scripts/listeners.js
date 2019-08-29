/**
 * Listener to update the current player's name if updated.
 */
$playerInputs.forEach(function ($playerInput, index) {
    $playerInput.onchange = $playerInput.onkeyup = function () {
        if (currentPlayer === index) {
            updatePlayerName(currentPlayer);
        }
    };
});

/**
 * Restart the game.
 */
$restartButton.onclick = function () {
    allowStartGame();
};

/**
 * listener to delete current matches numbers
 */
$buttonsMatch.forEach(function ($buttonsMatch) {
    $buttonsMatch.onclick = function () {
        changeMatchRemain($buttonsMatch.id);
    };
});


/**
 * listener to change current matches by keybord
 */
$inputMatchesNumber.onkeyup = function () {
    initMatchesNumber();
}

/**
 * listener to change current matches by mouse
 */
$inputMatchesNumber.onclick = function () {
    initMatchesNumber();
}


/**
 * listener to play alone
 */
$inputPlayAlone.onclick = function () {
    onePlayer();
}