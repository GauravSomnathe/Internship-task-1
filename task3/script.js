
        document.addEventListener('DOMContentLoaded', () => {
            const cells = document.querySelectorAll('.cell');
            const gameStatus = document.getElementById('gameStatus');
            const resetBtn = document.getElementById('resetBtn');
            const modeToggleBtn = document.getElementById('modeToggleBtn');
            const gameGrid = document.getElementById('gameGrid');
            const xWinsSpan = document.getElementById('xWins');
            const oWinsSpan = document.getElementById('oWins');
            const drawsSpan = document.getElementById('draws');

            let board = ['', '', '', '', '', '', '', '', ''];
            let currentPlayer = 'X';
            let gameActive = true;
            let isAIPlaying = false; // Default to Player vs Player
            let xWins = 0;
            let oWins = 0;
            let draws = 0;

            // Winning combinations
            const winningConditions = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];

            // Function to update the game status message
            const updateStatus = (message) => {
                gameStatus.textContent = message;
            };

            // Function to handle a cell click
            const handleCellClick = (e) => {
                const clickedCell = e.target;
                const clickedCellIndex = parseInt(clickedCell.dataset.cellIndex);

                // If cell is already filled or game is not active, do nothing
                if (board[clickedCellIndex] !== '' || !gameActive) {
                    return;
                }

                // Place marker and update board
                board[clickedCellIndex] = currentPlayer;
                clickedCell.textContent = currentPlayer;
                clickedCell.classList.add(currentPlayer.toLowerCase()); // Add class for styling (x or o)

                // Check game result
                checkGameResult();

                // If game is still active and AI is playing, trigger AI move
                if (gameActive && isAIPlaying && currentPlayer === 'O') {
                    setTimeout(handleAIMove, 700); // Delay AI move for better UX
                }
            };

            // Function to check for win or draw
            const checkGameResult = () => {
                let roundWon = false;
                let winningCombination = null;

                for (let i = 0; i < winningConditions.length; i++) {
                    const winCondition = winningConditions[i];
                    let a = board[winCondition[0]];
                    let b = board[winCondition[1]];
                    let c = board[winCondition[2]];

                    if (a === '' || b === '' || c === '') {
                        continue;
                    }
                    if (a === b && b === c) {
                        roundWon = true;
                        winningCombination = winCondition;
                        break;
                    }
                }

                if (roundWon) {
                    updateStatus(`Player ${currentPlayer} Wins!`);
                    gameActive = false;
                    highlightWinningCells(winningCombination);
                    if (currentPlayer === 'X') {
                        xWins++;
                        xWinsSpan.textContent = xWins;
                    } else {
                        oWins++;
                        oWinsSpan.textContent = oWins;
                    }
                    return;
                }

                // Check for draw
                let roundDraw = !board.includes('');
                if (roundDraw) {
                    updateStatus('Game Draw!');
                    gameActive = false;
                    draws++;
                    drawsSpan.textContent = draws;
                    return;
                }

                // Switch player if game is still active
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateStatus(`Player ${currentPlayer}'s Turn`);
            };

            // Function to highlight winning cells
            const highlightWinningCells = (combination) => {
                const line = document.createElement('div');
                line.classList.add('winning-line');

                // Determine line orientation and position
                if (combination[0] + 1 === combination[1] && combination[1] + 1 === combination[2]) { // Horizontal
                    line.classList.add(`row-${combination[0] / 3}`);
                } else if (combination[0] + 3 === combination[1] && combination[1] + 3 === combination[2]) { // Vertical
                    line.classList.add(`col-${combination[0] % 3}`);
                } else if (combination[0] === 0 && combination[1] === 4 && combination[2] === 8) { // Diagonal top-left to bottom-right
                    line.classList.add('diag-0');
                } else if (combination[0] === 2 && combination[1] === 4 && combination[2] === 6) { // Diagonal top-right to bottom-left
                    line.classList.add('diag-1');
                }
                gameGrid.appendChild(line);
            };

            // Function for AI's move (random)
            const handleAIMove = () => {
                if (!gameActive) return;

                let availableCells = [];
                for (let i = 0; i < board.length; i++) {
                    if (board[i] === '') {
                        availableCells.push(i);
                    }
                }

                if (availableCells.length > 0) {
                    const randomIndex = Math.floor(Math.random() * availableCells.length);
                    const cellIndex = availableCells[randomIndex];
                    const cellToClick = cells[cellIndex];

                    // Simulate a click on the chosen cell
                    board[cellIndex] = currentPlayer;
                    cellToClick.textContent = currentPlayer;
                    cellToClick.classList.add(currentPlayer.toLowerCase());

                    checkGameResult();
                }
            };

            // Function to reset the game
            const resetGame = () => {
                board = ['', '', '', '', '', '', '', '', ''];
                gameActive = true;
                currentPlayer = 'X';
                updateStatus(`Player X's Turn`);

                cells.forEach(cell => {
                    cell.textContent = '';
                    cell.classList.remove('x', 'o');
                });

                // Remove any existing winning lines
                const existingLine = gameGrid.querySelector('.winning-line');
                if (existingLine) {
                    existingLine.remove();
                }
            };

            // Function to toggle game mode (Player vs Player / Player vs AI)
            const toggleGameMode = () => {
                isAIPlaying = !isAIPlaying;
                modeToggleBtn.textContent = isAIPlaying ? 'Play vs Player' : 'Play vs AI';
                resetGame(); // Reset game when mode changes
                if (isAIPlaying) {
                    updateStatus("Player X vs AI");
                } else {
                    updateStatus("Player vs Player");
                }
            };

            // Event Listeners
            cells.forEach(cell => cell.addEventListener('click', handleCellClick));
            resetBtn.addEventListener('click', resetGame);
            modeToggleBtn.addEventListener('click', toggleGameMode);
        });
   