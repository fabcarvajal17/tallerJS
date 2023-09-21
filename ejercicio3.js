// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const input = document.getElementById('numeroInput');
const adivinarBtn = document.getElementById('adivinarBtn');
const pista = document.getElementById('pista');

adivinarBtn.addEventListener('click', () => {
    const numeroAdivinado = parseInt(input.value);

    if (isNaN(numeroAdivinado) || numeroAdivinado < 1 || numeroAdivinado > 100) {
        alert('Ingresa un número válido entre 1 y 100.');
    } else {
        intentos++;

        if (numeroAdivinado === numeroAleatorio) {
            alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
            reiniciarJuego();
        } else if (numeroAdivinado < numeroAleatorio) {
            pista.textContent = 'El número es más alto. Sigue intentando.';
        } else {
            pista.textContent = 'El número es más bajo. Sigue intentando.';
        }

        // Limpiar el input
        input.value = '';
    }
});

function reiniciarJuego() {
    // Generar un nuevo número aleatorio
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    pista.textContent = '';
}