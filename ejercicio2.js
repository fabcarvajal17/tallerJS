function eleccionRemota() {
    const opciones = ["piedra", "papel", "tijera"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

document.getElementById('jugarButton').addEventListener('click', function () {
    var opcion = document.getElementById('opcion').value;
    var p = eleccionRemota();

    switch (opcion) {
        case 'piedra':
            if (p == 'tijera') {
                alert("La computadora eligió tijera, ¡has ganado!");
            } else if (p == 'papel') {
                alert("La computadora eligió papel, ¡has perdido!");
            } else {
                alert("La computadora eligió piedra, ¡es un empate!");
            }
            break;

        case 'papel':
            if (p == 'tijera') {
                alert("La computadora eligió tijera, ¡has perdido!");
            } else if (p == 'papel') {
                alert("La computadora eligió papel, ¡es un empate!");
            } else {
                alert("La computadora eligió piedra, ¡has ganado!");
            }
            break;

        case 'tijera':
            if (p == 'tijera') {
                alert("La computadora eligió tijera, ¡es un empate!");
            } else if (p == 'papel') {
                alert("La computadora eligió papel, ¡has ganado!");
            } else {
                alert("La computadora eligió piedra, ¡has perdido!");
            }
            break;
    }
});