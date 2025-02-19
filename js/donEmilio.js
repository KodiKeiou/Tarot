
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
