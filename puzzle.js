<<<<<<< HEAD
window.onload = function() {
    var canvas = document.getElementById('puzzleCanvas');
    var context = canvas.getContext('2d');
    var image = new Image();
    var pieces = [];
    var pieceSize = 100;
    var rows = 3;
    var cols = 3;
    var emptyPiece = { row: 2, col: 2 };

    image.src = 'https://previews.dropbox.com/p/thumb/ACfyN-3rvBIlBkuYq9dWp3kfXRaL75lOMA9LSfKY7jCVi93HZoqTmQTZOhjOFzFOsoGx_dxYZI3-RwnzRS3vvqnwTs-y_rzPGK8AcM0P_u-s2VoeSXHsfzdUavGe5zFrgE31v-uqNGHE_C33y_6J3WgsfOYcP12RavgfLDvpJZUgT07Y7-OzKGnx-16SvvYbInheQEtgHRQtI6FWW8NlQKW5UNjNRyiqxFrlvXcbXHOOdVRAySln1n5UrSpgjqICrEF3fnI9mooqQifeZo0NNQaV9fJvnTVtvUxqiNiDfMtbqSXCkAwcKBQZ0xfeGsLxX_ZVNx-XsibTs6NcDiw4IFA6/p.jpeg?is_prewarmed=true'; // Thay thế bằng URL hình ảnh của bạn
    image.onload = function() {
        initializePuzzle();
        drawPuzzle();
    };

    function initializePuzzle() {
        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                if (row !== emptyPiece.row || col !== emptyPiece.col) {
                    pieces.push({ row: row, col: col, x: col * pieceSize, y: row * pieceSize });
                }
            }
        }
        pieces = shuffleArray(pieces);
    }

    function drawPuzzle() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(function(piece) {
            context.drawImage(image, piece.col * pieceSize, piece.row * pieceSize, pieceSize, pieceSize, piece.x, piece.y, pieceSize, pieceSize);
        });

        // Vẽ mảnh trống
        context.fillStyle = "#fff";
        context.fillRect(emptyPiece.col * pieceSize, emptyPiece.row * pieceSize, pieceSize, pieceSize);
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    canvas.addEventListener('click', function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        var clickedRow = Math.floor(y / pieceSize);
        var clickedCol = Math.floor(x / pieceSize);

        if (canMove(clickedRow, clickedCol)) {
            movePiece(clickedRow, clickedCol);
            drawPuzzle();
            if (isSolved()) {
                alert('Chúc mừng! Bạn đã hoàn thành trò chơi!');
            }
        }
    });

    function canMove(row, col) {
        return (Math.abs(row - emptyPiece.row) === 1 && col === emptyPiece.col) ||
               (Math.abs(col - emptyPiece.col) === 1 && row === emptyPiece.row);
    }

    function movePiece(row, col) {
        pieces.forEach(function(piece) {
            if (piece.row === row && piece.col === col) {
                piece.row = emptyPiece.row;
                piece.col = emptyPiece.col;
                piece.x = emptyPiece.col * pieceSize;
                piece.y = emptyPiece.row * pieceSize;
                emptyPiece.row = row;
                emptyPiece.col = col;
            }
        });
    }

    function isSolved() {
        for (var i = 0; i < pieces.length; i++) {
            var piece = pieces[i];
            if (piece.row !== Math.floor(i / cols) || piece.col !== i % cols) {
                return false;
            }
        }
        return true;
    }
};
=======
window.onload = function() {
    var canvas = document.getElementById('puzzleCanvas');
    var context = canvas.getContext('2d');
    var image = new Image();
    var pieces = [];
    var pieceSize = 100;
    var rows = 3;
    var cols = 3;
    var emptyPiece = { row: 2, col: 2 };

    image.src = 'https://previews.dropbox.com/p/thumb/ACfyN-3rvBIlBkuYq9dWp3kfXRaL75lOMA9LSfKY7jCVi93HZoqTmQTZOhjOFzFOsoGx_dxYZI3-RwnzRS3vvqnwTs-y_rzPGK8AcM0P_u-s2VoeSXHsfzdUavGe5zFrgE31v-uqNGHE_C33y_6J3WgsfOYcP12RavgfLDvpJZUgT07Y7-OzKGnx-16SvvYbInheQEtgHRQtI6FWW8NlQKW5UNjNRyiqxFrlvXcbXHOOdVRAySln1n5UrSpgjqICrEF3fnI9mooqQifeZo0NNQaV9fJvnTVtvUxqiNiDfMtbqSXCkAwcKBQZ0xfeGsLxX_ZVNx-XsibTs6NcDiw4IFA6/p.jpeg?is_prewarmed=true'; // Thay thế bằng URL hình ảnh của bạn
    image.onload = function() {
        initializePuzzle();
        drawPuzzle();
    };

    function initializePuzzle() {
        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                if (row !== emptyPiece.row || col !== emptyPiece.col) {
                    pieces.push({ row: row, col: col, x: col * pieceSize, y: row * pieceSize });
                }
            }
        }
        pieces = shuffleArray(pieces);
    }

    function drawPuzzle() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(function(piece) {
            context.drawImage(image, piece.col * pieceSize, piece.row * pieceSize, pieceSize, pieceSize, piece.x, piece.y, pieceSize, pieceSize);
        });

        // Vẽ mảnh trống
        context.fillStyle = "#fff";
        context.fillRect(emptyPiece.col * pieceSize, emptyPiece.row * pieceSize, pieceSize, pieceSize);
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    canvas.addEventListener('click', function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        var clickedRow = Math.floor(y / pieceSize);
        var clickedCol = Math.floor(x / pieceSize);

        if (canMove(clickedRow, clickedCol)) {
            movePiece(clickedRow, clickedCol);
            drawPuzzle();
            if (isSolved()) {
                alert('Chúc mừng! Bạn đã hoàn thành trò chơi!');
            }
        }
    });

    function canMove(row, col) {
        return (Math.abs(row - emptyPiece.row) === 1 && col === emptyPiece.col) ||
               (Math.abs(col - emptyPiece.col) === 1 && row === emptyPiece.row);
    }

    function movePiece(row, col) {
        pieces.forEach(function(piece) {
            if (piece.row === row && piece.col === col) {
                piece.row = emptyPiece.row;
                piece.col = emptyPiece.col;
                piece.x = emptyPiece.col * pieceSize;
                piece.y = emptyPiece.row * pieceSize;
                emptyPiece.row = row;
                emptyPiece.col = col;
            }
        });
    }

    function isSolved() {
        for (var i = 0; i < pieces.length; i++) {
            var piece = pieces[i];
            if (piece.row !== Math.floor(i / cols) || piece.col !== i % cols) {
                return false;
            }
        }
        return true;
    }
};
>>>>>>> 096df9c (first commit)
