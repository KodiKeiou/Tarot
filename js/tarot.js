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
        , "Descartes. Fuera de tu turno descarta cualquier carta que no sea figura ignorando todas las normas"
        , "Poli malo. Inventa una sancion que aplique para el resto de la partida"
        , "La escalera. Durante un turno solo se puede tirar cartas de un valor mas alto a la que esta (el as la mas alta)"
        , "La barrera. Bloquea cualquier efecto que te apliquen con un tarot"];
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
