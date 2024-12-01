document.addEventListener("DOMContentLoaded", function() {
 
    const pieces = document.querySelectorAll('.peice');

    pieces.forEach(piece => {
        piece.addEventListener('pointerdown', dragStart);
    });

    let currentPiece = null;
    let offsetX, offsetY;

    function dragStart(e) {
        currentPiece = e.target;
        offsetX = e.clientX - currentPiece.getBoundingClientRect().left;
        offsetY = e.clientY - currentPiece.getBoundingClientRect().top;

        document.addEventListener('pointermove', dragMove);
        document.addEventListener('pointerup', dragEnd);
    }


    function dragMove(e) {
        currentPiece.style.left = `${e.clientX - offsetX}px`;
        currentPiece.style.top = `${e.clientY - offsetY}px`;
    }


    function dragEnd() {
        document.removeEventListener('pointermove', dragMove);
        document.removeEventListener('pointerup', dragEnd);
        currentPiece = null;
    }
});