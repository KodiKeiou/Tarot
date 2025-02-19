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