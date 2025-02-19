import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBXqi3MXa8vECYBuFtJCa_A5HDPK3Ud0ns",
    authDomain: "juego-bba10.firebaseapp.com",
    databaseURL: "https://juego-bba10-default-rtdb.firebaseio.com",
    projectId: "juego-bba10",
    storageBucket: "juego-bba10.firebasestorage.app",
    messagingSenderId: "818631334442",
    appId: "1:818631334442:web:5382beb62bf17b8c41c153",
    measurementId: "G-NJPGKB636F"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener("DOMContentLoaded", function () {
    const botonNuevo = document.querySelector("#anadir");
    const clasificacion = document.querySelector(".clasificacion");

    // Recupera los jugadores al cargar la página
    onValue(ref(database, "jugadores"), (snapshot) => {
        const jugadores = snapshot.val();
        if (jugadores) {
            clasificacion.innerHTML = ''; // Limpiar lista actual
            for (let id in jugadores) {
                const jugador = jugadores[id];
                mostrarJugador(id, jugador.nombre, jugador.puntuacion);
            }
        }
    });

    botonNuevo.addEventListener("click", function () {
        const cuadroTexto = document.querySelector(".cuadroT"); // Input nombre
        const cuadroPuntuacion = document.querySelector(".cuadroP"); // Input puntuación

        const nombreJugador = cuadroTexto.value.trim();
        const puntuacionInicial = parseInt(cuadroPuntuacion.value.trim(), 10);

        if (nombreJugador !== "" && !isNaN(puntuacionInicial)) {
            // Guardar jugador en Firebase
            guardarDatos(nombreJugador, puntuacionInicial);

            // Limpiar los inputs
            cuadroTexto.value = "";
            cuadroPuntuacion.value = "";
            cuadroTexto.focus();
        } else {
            alert("Introduce un nombre y una puntuación válida.");
        }
    });

    function actualizarPuntuacion(idJugador, puntuacion) {
        const jugadorRef = ref(database, `jugadores/${idJugador}`); // Antes decía `mao/${idJugador}`
    
        update(jugadorRef, {
            puntuacion: puntuacion
        }).then(() => {
            console.log("Puntuación actualizada en Firebase.");
        }).catch((error) => {
            console.error("Error al actualizar la puntuación:", error);
        });
    }


    // Función para guardar los datos en Firebase
    function guardarDatos(nombreJugador, puntuacion) {
        const nuevoJugadorRef = push(ref(database, 'jugadores'));
        set(nuevoJugadorRef, {
            nombre: nombreJugador,
            puntuacion: puntuacion
        });
    }

    // Función para mostrar un jugador en la lista
    function mostrarJugador(id, nombre, puntuacion) {
        const contenedor = document.createElement("div");
        contenedor.classList.add("jugador");
    
        const jugador = document.createElement("div");
        jugador.textContent = nombre;
        jugador.classList.add("nombre");
    
        const puntuacionDiv = document.createElement("div");
        puntuacionDiv.textContent = puntuacion;
        puntuacionDiv.classList.add("puntos");
    
        const inputSumar = document.createElement("input");
        inputSumar.type = "number";
    
        const botonSumar = document.createElement("button");
        botonSumar.textContent = "+";
    
        botonSumar.addEventListener("click", function () {
            const puntosAgregar = parseInt(inputSumar.value, 10);
            if (!isNaN(puntosAgregar)) {
                let nuevaPuntuacion = parseInt(puntuacionDiv.textContent, 10) + puntosAgregar;
                
                puntuacionDiv.textContent = nuevaPuntuacion;
                inputSumar.value = "";
    
                // Pasar el ID real del jugador
                actualizarPuntuacion(id, nuevaPuntuacion);
                ordenarClasificacion();
            }
        });
    
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminarJ");
    
        botonEliminar.addEventListener("click", function () {
            eliminarJugador(id);
            contenedor.remove();
        });
    
        contenedor.appendChild(jugador);
        contenedor.appendChild(puntuacionDiv);
        contenedor.appendChild(inputSumar);
        contenedor.appendChild(botonSumar);
        contenedor.appendChild(botonEliminar);
    
        clasificacion.appendChild(contenedor);
        ordenarClasificacion();
    }
    

    // Función para eliminar un jugador de Firebase
    function eliminarJugador(id) {
        const jugadorRef = ref(database, 'jugadores/' + id);
        remove(jugadorRef); // Eliminar el jugador de Firebase
    }

    // Función para ordenar la clasificación
    function ordenarClasificacion() {
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
