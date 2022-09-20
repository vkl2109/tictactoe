const GameBoard = (() => {
    const makePlayers = (name, symbol) => {
        return {name, symbol};
    }
    const player1 = makePlayers('player1', 'X');
    const player2 = makePlayers('player2', 'O');
    let winner = null;
    let turn = true;
    let plays = 0;
    let board = new Array(9);
    for (let i = 0; i < 9; i++)
    {
        const box = document.getElementById(i);
        box.addEventListener('click', b => {
            while (winner == null && box.textContent == '')
            {
                if (turn == true)
                {
                    board[i] = player1.symbol;
                    box.textContent = player1.symbol;
                    turn = false;
                }
                else if (turn == false)
                {
                    board[i] = player2.symbol;
                    box.textContent = player2.symbol;
                    turn = true;
                }
                console.log(board);
                winCheck();
                console.log(winner);
            }
        });
    }
    winCheck = () => {
        plays++;
        let xBoard = new Array(9);
        let oBoard = new Array(9);
        for (let i = 0; i < 9; i++)
        {
            if (board[i] == 'X')
            {
                xBoard[i] = 1;
            }
            else if (board[i] == 'O')
            {
                oBoard[i] = 1;
            }
        }
        console.log(xBoard);
        console.log(oBoard);
        if ((xBoard[0] == 1 && xBoard[1] == 1 && xBoard[2] == 1) 
        || (xBoard[3] == 1 && xBoard[4] == 1 && xBoard[5] == 1)
        || (xBoard[6] == 1 && xBoard[7] == 1 && xBoard[8] == 1)
        || (xBoard[0] == 1 && xBoard[3] == 1 && xBoard[6] == 1)
        || (xBoard[1] == 1 && xBoard[4] == 1 && xBoard[7] == 1)
        || (xBoard[2] == 1 && xBoard[5] == 1 && xBoard[8] == 1)
        || (xBoard[0] == 1 && xBoard[4] == 1 && xBoard[8] == 1)
        || (xBoard[2] == 1 && xBoard[4] == 1 && xBoard[6] == 1))
        {
            winner = 'Player 1 Wins!';
            winDisplay();
        }
        else if ((oBoard[0] == 1 && oBoard[1] == 1 && oBoard[2] == 1) 
        || (oBoard[3] == 1 && oBoard[4] == 1 && oBoard[5] == 1)
        || (oBoard[6] == 1 && oBoard[7] == 1 && oBoard[8] == 1)
        || (oBoard[0] == 1 && oBoard[3] == 1 && oBoard[6] == 1)
        || (oBoard[1] == 1 && oBoard[4] == 1 && oBoard[7] == 1)
        || (oBoard[2] == 1 && oBoard[5] == 1 && oBoard[8] == 1)
        || (oBoard[0] == 1 && oBoard[4] == 1 && oBoard[8] == 1)
        || (oBoard[2] == 1 && oBoard[4] == 1 && oBoard[6] == 1))
        {
            winner = 'Player 2 Wins!';
            winDisplay();
        }
        else if (winner == null && plays == 9)
        {
            winner = 'It\'s a Tie';
            winDisplay();
        }
    }
    winDisplay = () => {
        const winBox = document.getElementById("winner");
        winBox.style.visibility = "visible";
        winBox.textContent = winner;
    }
})();