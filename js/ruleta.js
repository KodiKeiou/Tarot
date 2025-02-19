
document.addEventListener("DOMContentLoaded", function () {
    const listaElementos = ["Paralizado. Tiras una moneda para ver si juegas"
        , "Envenenado. Te llevas una carta de manera residual"
        , "Congelado. No juegas pero si tienes diamantes te libras del estado"
        , "Dormido. No juegas pero cuando te despiertes descartas dos cartas"
        , "Confuso. Dices todas las frases del revés "
        , "Petrificado. No juegas pero no te pueden ni quitar ni dar cartas"
        , "Silencio. El que elijas debe decir todas tus frases "
        , "Enfermedad. Recibe el doble de penalización"];

    const resultadoDiv = document.querySelector(".resultado1");
    const botonAccion = document.querySelector(".accion1");
    const tuscartas = document.querySelector(".tulista1")

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
            const content = document.querySelector(".content1"); // Encuentra el contenedor padre
            if (content) {
                content.remove(); // Elimina solo ese contenedor
            }
            const itemElegido = document.createElement("li");
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "-";
            botonEliminar.classList.add("eliminar1");
            const contenedor = document.createElement("div");
            contenedor.classList.add("content1");
            const randomIndex = Math.floor(Math.random() * listaElementos.length);
            itemElegido.textContent = listaElementos[randomIndex];
            contenedor.appendChild(itemElegido);
            contenedor.appendChild(botonEliminar);
            tuscartas.appendChild(contenedor);
        }
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("eliminar1")) {
            const content = event.target.closest(".content1"); // Encuentra el contenedor padre
            if (content) {
                content.remove(); // Elimina solo ese contenedor
            }
        }
    });

    mostrarLista();
    botonAccion.addEventListener("click", elegirAleatorio);


});
