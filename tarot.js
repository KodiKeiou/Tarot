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
        , "La recursividad. Un jugador es maldecido por Miguel Toro y debe tirar durante dos turnos una moneda para saber si juega o no"
        , "El borracho. durante 3 turnos puedes jugar una carta con un valor un punto mayor o menor"
        , "Juego de azar. Elige a 2 jugadores para que roben una carta, al que le salga la carta mas baja roba otra"
        , "Relevo. Cambia todas tus cartas con un jugador o todas las cartas de 2 jugadores rivales"
        , "El Fénix. Si un jugador gana la partida revívelo con 3 cartas nuevas."
        , "El Corazón Roto. Un jugador pierde su próxima carta de tarot jugada."
        , "Descartes. Fuera de tu turno descarta cualquier carta que no sea figura ignorando todas las normas"];
    const resultadoDiv = document.querySelector(".resultado");
    const botonAccion = document.querySelector(".accion");
    const botonReiniciar = document.createElement("button");
    const tuscartas = document.querySelector(".tulista")

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
            const itemElegido = document.createElement("li");
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "-";
            botonEliminar.classList.add("eliminar");
            const contenedor = document.createElement("div");
            contenedor.classList.add("content");
            const randomIndex = Math.floor(Math.random() * listaElementos.length);
            itemElegido.textContent = listaElementos[randomIndex];
            contenedor.appendChild(itemElegido);
            contenedor.appendChild(botonEliminar);
            tuscartas.appendChild(contenedor);
        }
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("eliminar")) {
            const content = event.target.closest(".content"); // Encuentra el contenedor padre
            if (content) {
                content.remove(); // Elimina solo ese contenedor
            }
        }
    });

    mostrarLista();
    botonAccion.addEventListener("click", elegirAleatorio);


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

document.addEventListener("DOMContentLoaded", function () {
    const botonNuevo = document.querySelector("#anadir");

    botonNuevo.addEventListener("click", function () {
        const cuadroTexto = document.querySelector(".cuadroT"); // Input nombre
        const cuadroPuntuacion = document.querySelector(".cuadroP"); // Input puntuación
        const clasificacion = document.querySelector(".clasificacion");

        const nombreJugador = cuadroTexto.value.trim();
        const puntuacionInicial = parseInt(cuadroPuntuacion.value.trim(), 10);

        if (nombreJugador !== "" && !isNaN(puntuacionInicial)) {
            // Crear el contenedor del jugador
            const contenedor = document.createElement("div");
            contenedor.classList.add("jugador");

            // Crear div para el nombre
            const jugador = document.createElement("div");
            jugador.textContent = nombreJugador;
            jugador.classList.add("nombre");

            // Crear div para la puntuación
            const puntuacion = document.createElement("div");
            puntuacion.textContent = puntuacionInicial;
            puntuacion.classList.add("puntos");

            // Crear input y botón para sumar puntos
            const inputSumar = document.createElement("input");
            inputSumar.type = "number";

            const botonSumar = document.createElement("button");
            botonSumar.textContent = "+";

            // Evento para sumar puntos y reordenar la lista
            botonSumar.addEventListener("click", function () {
                const puntosAgregar = parseInt(inputSumar.value, 10);
                if (!isNaN(puntosAgregar)) {
                    puntuacion.textContent = parseInt(puntuacion.textContent, 10) + puntosAgregar;
                    inputSumar.value = "";
                    ordenarClasificacion();
                }
            });

            // Agregar elementos al contenedor del jugador
            contenedor.appendChild(jugador);
            contenedor.appendChild(puntuacion);
            contenedor.appendChild(inputSumar);
            contenedor.appendChild(botonSumar);

            // Agregar jugador a la clasificación
            clasificacion.appendChild(contenedor);

            // Ordenar la clasificación
            ordenarClasificacion();

            // Limpiar los inputs
            cuadroTexto.value = "";
            cuadroPuntuacion.value = "";
            cuadroTexto.focus();
        } else {
            alert("Introduce un nombre y una puntuación válida.");
        }
    });

    function ordenarClasificacion() {
        const clasificacion = document.querySelector(".clasificacion");
        const jugadores = Array.from(clasificacion.children);

        jugadores.sort((a, b) => {
            const puntosA = parseInt(a.querySelector(".puntos").textContent, 10);
            const puntosB = parseInt(b.querySelector(".puntos").textContent, 10);
            return puntosB - puntosA; // Orden descendente
        });

        // Vaciar y reinsertar los jugadores ordenados
        clasificacion.innerHTML = "";
        jugadores.forEach(jugador => clasificacion.appendChild(jugador));
    }
});




