let jugador = 'X';
let cells = document.querySelectorAll('.cell');
let mensajeGanador = document.getElementById('ganador');

function makeMove(cellIndex) {
    if (cells[cellIndex].innerHTML === '') {
        cells[cellIndex].innerHTML = jugador;
        buscaGanador();
        jugador = jugador === 'X' ? 'O' : 'X';
    }
}

function buscaGanador() {
    const convinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const linea of convinacionesGanadoras) {
        const [a, b, c] = linea;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            
            linea.forEach(index => {
                cells[index].classList.add('ganador');
            });

            mensajeGanador.innerHTML = `${jugador} gana!`;
            mensajeGanador.classList.add('show');

            cells.forEach(cell => (cell.style.pointerEvents = 'none'));
            return;
        }
    }

    if ([...cells].every(cell => cell.innerHTML)) {
        mensajeGanador.innerHTML = 'Empate';
        mensajeGanador.classList.add('show');
    }
}

function limpiarTablero() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.style.pointerEvents = 'auto';
        cell.classList.remove('ganador');
    });
    mensajeGanador.innerHTML = '';
    mensajeGanador.classList.remove('show');
    jugador = 'X';
}
