document.addEventListener("DOMContentLoaded", function () {
    const listaElementos = ["La muerte. Deja todas tus cartas en la baraja y coge 3 nuevas (como empezar de nuevo)"
        , "El diablo. Maldice una carta del rival, cuando la tire roba n/2(a j q k no cuenta)"
        , "El Juicio. Penaliza cualquier penalización al doble"
        , "El espejo. Duplica otro tarot"
        , "El loco. Puedes jugar de manera incorrecta durante dos turnos"
        , "El mago. Inventa una norma para lo que queda de partida (es publica)"
        , "La sacerdotisa. Dale una de tus cartas a otro jugador."
        , "La emperatriz. Roba un turno del rival."
        , "El emperador. Obliga a un rival a hacer el turno como tu quieras."
        , "El sumo sacerdote. Bendice una carta del rival. Cuando la tire descartas n/2"
        , "Los enamorados. Alguien debe copiar tu turno "
        , "El carro. Empieza todo el mundo de nuevo la partida con 2 cartas (se mantienen los tarot)"
        , "La justicia. Sancionar actitud antideportiva"
        , "La torre. Durante un turno se debe jugar el palo que se diga."
        , "El ermitaño. 2 acciones en un turno"
        , "La ruleta de la fortuna. Tiras un dado, de 1 a 3 nada, de 4 a 5 das una carta a todos, un 6 das dos"
        , "La fuerza. Descarta dos cartas"
        , "El sol. Ver las cartas de los demás"
        , "La pared. Haces una carta de piedra"
        , "La luna. Juegas ciego un turno"];
    const resultadoDiv = document.querySelector(".resultado");
    const botonAccion = document.querySelector(".accion");
    const botonReiniciar = document.createElement("button");

    botonReiniciar.textContent = "Reiniciar";
    botonReiniciar.classList.add("reiniciar");
    document.querySelector(".boton").appendChild(botonReiniciar);

    function mostrarLista() {
        resultadoDiv.innerHTML = "";
        listaElementos.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            resultadoDiv.appendChild(li);
        });
    }

    function elegirAleatorio() {
        if (listaElementos.length > 0) {
            const randomIndex = Math.floor(Math.random() * listaElementos.length);
            const itemElegido = listaElementos[randomIndex];
            resultadoDiv.innerHTML = `<li>${itemElegido}</li>`;
        }
    }

    botonAccion.addEventListener("click", elegirAleatorio);
    botonReiniciar.addEventListener("click", mostrarLista);

    mostrarLista();
});



function rollDice() {
    const dots = document.querySelectorAll('.dot');
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Primero ocultamos todos los puntos
    dots.forEach(dot => dot.style.opacity = 0);

    // Luego mostramos los puntos según el número aleatorio
    switch (randomNumber) {
        case 1:
            document.querySelector('.center').style.opacity = 1;
            break;
        case 2:
            document.querySelector('.top-right').style.opacity = 1;
            document.querySelector('.bottom-left').style.opacity = 1;
            break;
        case 3:
            document.querySelector('.top-right').style.opacity = 1;
            document.querySelector('.center').style.opacity = 1;
            document.querySelector('.bottom-left').style.opacity = 1;
            break;
        case 4:
            document.querySelector('.top-left').style.opacity = 1;
            document.querySelector('.top-right').style.opacity = 1;
            document.querySelector('.bottom-left').style.opacity = 1;
            document.querySelector('.bottom-right').style.opacity = 1;
            break;
        case 5:
            document.querySelector('.top-left').style.opacity = 1;
            document.querySelector('.top-right').style.opacity = 1;
            document.querySelector('.bottom-left').style.opacity = 1;
            document.querySelector('.center').style.opacity = 1;
            document.querySelector('.bottom-right').style.opacity = 1;
            break;
        case 6:
            document.querySelector('.top-left').style.opacity = 1;
            document.querySelector('.top-center').style.opacity = 1;
            document.querySelector('.top-right').style.opacity = 1;
            document.querySelector('.bottom-left').style.opacity = 1;
            document.querySelector('.bottom-center').style.opacity = 1;
            document.querySelector('.bottom-right').style.opacity = 1;
            break;
    }

    // Animación de "lanzamiento"
    const dice = document.querySelector('.dice');
    dice.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        dice.style.transform = 'rotate(0deg)';
    }, 200);
}

let rotation = 0;
function flipCoin() {
    let coin = document.getElementById("coin");
    rotation += 1800; // Asegura una animación de giro completa
    let isHeads = Math.random() < 0.5;
    coin.style.transform = `rotateY(${rotation + (isHeads ? 0 : 180)}deg)`;
}


