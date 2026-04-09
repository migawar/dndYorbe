const board = document.getElementById('board');

// De beginopstelling van de stukken (Unicode symbolen)
const pieces = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

// Functie om het bord te genereren
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        
        // Bepaal de kleur van het veld
        const isBlack = (row + col) % 2 === 1;
        square.className = `square ${isBlack ? 'black' : 'white'}`;
        
        // Voeg het stuk toe als die er is
        const pieceChar = pieces[row][col];
        if (pieceChar !== '') {
            const piece = document.createElement('span');
            piece.className = 'piece';
            piece.innerText = pieceChar;
            piece.draggable = true;
            square.appendChild(piece);
        }

        board.appendChild(square);
    }
}

// Simpele logica voor verslepen (Drag & Drop)
let draggedPiece = null;

board.addEventListener('dragstart', (e) => {
    draggedPiece = e.target;
});

board.addEventListener('dragover', (e) => {
    e.preventDefault(); // Nodig om 'drop' toe te staan
});

board.addEventListener('drop', (e) => {
    e.preventDefault();
    const targetSquare = e.target.closest('.square');
    
    if (targetSquare && draggedPiece) {
        // Verwijder eventueel een stuk dat er al stond (slaan)
        targetSquare.innerHTML = '';
        targetSquare.appendChild(draggedPiece);
    }
});
