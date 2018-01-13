//on click make a step
document.getElementById("someTable").onclick = function someFunction(event) {
    event.srcElement.textContent = "x";
    checkWinner("x")
    //make PC step with some delay
    makeRandomStep();
    checkWinner("0")
};

function makeRandomStep() {
    var cells = document.getElementById("someTable").getElementsByTagName("td");
    var emptyCells = [];
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerText === "") {
            console.log("empty cell id :" + i);
            emptyCells.push(i)
        }
    }
    random = Math.floor(Math.random() * (emptyCells.length));
    cells[emptyCells[random]].innerText = "0";
}

function checkWinner(playerSign) {
    //check horizontals
    var winMessage = "WIN player with " + playerSign + "!!";
    var rows = document.getElementById("someTable").getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].innerText === "x\tx\tx" && playerSign === "x") {
            displayWinner()
            break;
        }
        if (rows[i].innerText === "0\t0\t0" && playerSign === "0") {
            displayWinner()
            break;
        }
    }
    //check verticals
    var cells = document.getElementById("someTable").getElementsByTagName("td");
    if (cells[1].innerText === playerSign && cells[4].innerText === playerSign && cells[7].innerText === playerSign) {
        displayWinner();
    }
    if (cells[0].innerText === playerSign && cells[3].innerText === playerSign && cells[6].innerText === playerSign) {
        displayWinner();
    }
    if (cells[2].innerText === playerSign && cells[2].innerText === playerSign && cells[8].innerText === playerSign) {
        displayWinner();
    }
    //if diagonal
    if (cells[0].innerText === playerSign && cells[4].innerText === playerSign && cells[8].innerText === playerSign) {
        displayWinner();
    }

    function displayWinner() {
        console.log(winMessage)
        alert(winMessage)
    }

    //if reverse diagonale
    if (cells[2].innerText === playerSign && cells[4].innerText === playerSign && cells[6].innerText === playerSign) {
        displayWinner();
    }
}
