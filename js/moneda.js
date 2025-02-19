let rotation = 0;
function flipCoin() {
    let coin = document.getElementById("coin");
    rotation += 1800; // Asegura una animación de giro completa
    let isHeads = Math.random() < 0.5;
    coin.style.transform = `rotateY(${rotation + (isHeads ? 0 : 180)}deg)`;
}