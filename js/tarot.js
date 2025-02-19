import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

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

// Lista de elementos del tarot
const listaElementos = ["La muerte. Deja todas tus cartas en la baraja y coge 3 nuevas (como empezar de nuevo)", 
    "El diablo. Maldice una carta del rival, cuando la tire roba n/2(a j q k no cuenta)",
    "El Juicio. Penaliza cualquier penalización al doble",
    "El espejo. Duplica otro tarot",
    "El loco. Puedes jugar de manera incorrecta durante dos turnos",
    "El mago. Inventa una norma para lo que queda de partida (es publica)",
    "La sacerdotisa. Dale una de tus cartas a otro jugador.",
    "La emperatriz. Roba un turno del rival.",
    "El emperador. Obliga a un rival a hacer el turno como tú quieras.",
    "El sumo sacerdote. Bendice una carta del rival. Cuando la tire descartas n/2",
    "Los enamorados. Alguien debe copiar tu turno",
    "El carro. Empieza todo el mundo de nuevo la partida con 2 cartas (se mantienen los tarot)",
    "La torre. Durante un turno se debe jugar el palo que se diga.",
    "El ermitaño. 2 acciones en un turno",
    "La ruleta de la fortuna. Tiras un dado, de 1 a 3 nada, de 4 a 5 das una carta a todos, un 6 das dos",
    "La fuerza. Descarta dos cartas",
    "El sol. Ver las cartas de los demás",
    "La pared. Haces una carta de piedra",
    "La recursividad. Un jugador es maldecido por Miguel Toro y debe tirar durante dos turnos una moneda para saber si juega o no",
    "El borracho. Durante 3 turnos puedes jugar una carta con un valor un punto mayor o menor",
    "Juego de azar. Elige a 2 jugadores para que roben una carta, al que le salga la carta más baja roba otra",
    "Relevo. Cambia todas tus cartas con un jugador o todas las cartas de 2 jugadores rivales",
    "El Fénix. Si un jugador gana la partida revívelo con 3 cartas nuevas.",
    "El Corazón Roto. Un jugador pierde su próxima carta de tarot jugada.",
    "Descartes. Fuera de tu turno descarta cualquier carta que no sea figura ignorando todas las normas",
    "Poli malo. Inventa una sanción que aplique para el resto de la partida",
    "La escalera. Durante un turno solo se puede tirar cartas de un valor más alto a la que está (el as la más alta)",
    "La barrera. Bloquea cualquier efecto que te apliquen con un tarot"];

document.addEventListener("DOMContentLoaded", function () {
    const resultadoDiv = document.querySelector(".resultado");
    const botonesAccion = document.querySelectorAll(".accion");
    const contenedores = {
        Dani: document.querySelector(".cartasdani"),
        Carlos: document.querySelector(".cartascarlos"),
        Jose: document.querySelector(".cartasjose"),
        Emilio: document.querySelector(".cartasemilio"),
        CarlosV: document.querySelector(".cartascarlosv")
    };

    // Función para borrar todo el contenido de la referencia "mao" en Firebase
    function borrarTodoMao() {
        const maoRef = ref(database, "mao");
        remove(maoRef)
            .then(() => console.log("Todo el contenido de 'mao' ha sido eliminado."))
            .catch(error => console.error("Error al eliminar los datos: ", error));
    }

    // Mostrar lista de cartas
    function mostrarLista() {
        resultadoDiv.innerHTML = "";
        listaElementos.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            resultadoDiv.appendChild(li);
        });
    }

    // Función para agregar una carta en Firebase
    function elegirAleatorio(event) {
        const randomIndex = Math.floor(Math.random() * listaElementos.length);
        const cartaElegida = listaElementos[randomIndex];

        const jugador = event.target.textContent;

        // Guardar carta en Firebase
        const jugadorRef = ref(database, `mao/${jugador}`);
        push(jugadorRef, cartaElegida);
    }

    // Eliminar carta de Firebase cuando se hace clic en el botón "-"
    function eliminarCarta(jugador, cartaID) {
        const cartaRef = ref(database, `mao/${jugador}/${cartaID}`);
        remove(cartaRef);
    }

    // Mostrar las cartas de Firebase y actualizar en tiempo real
    onValue(ref(database, "mao"), (snapshot) => {
        const jugadores = snapshot.val();

        // Limpiar los contenedores antes de agregar nuevas cartas
        for (let jugador in contenedores) {
            contenedores[jugador].innerHTML = '';  
        }

        // Recorrer jugadores y mostrar sus cartas
        for (let jugador in jugadores) {
            const cartas = Object.entries(jugadores[jugador]); 

            cartas.forEach(([cartaID, cartaTexto]) => {
                const contenedor = document.createElement("div");
                contenedor.classList.add("content");

                const item = document.createElement("li");
                item.textContent = cartaTexto;

                // Crear botón de eliminación
                const botonEliminar = document.createElement("button");
                botonEliminar.textContent = "-";
                botonEliminar.classList.add("eliminar");

                // Evento para eliminar carta de Firebase
                botonEliminar.addEventListener("click", () => eliminarCarta(jugador, cartaID));

                // Agregar elementos al contenedor
                contenedor.appendChild(item);
                contenedor.appendChild(botonEliminar);
                contenedores[jugador].appendChild(contenedor);
            });
        }
    });

    // Mostrar lista inicial de cartas
    mostrarLista();

    // Agregar evento de clic a todos los botones de acción
    botonesAccion.forEach(boton => {
        boton.addEventListener("click", elegirAleatorio);
    });

    // Llamar la función para borrar todo el contenido de "mao" al cargar la página
    borrarTodoMao();
});
