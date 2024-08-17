//console.log("Hola mundo! desde la consola");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ingeniera en Sistemas Computacionales | Desarrolladora Front-end Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('El único modo de hacer un gran trabajo es amar lo que haces')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong> creas</strong>')
    .pauseFor(2500)
    .start();

    document.addEventListener('DOMContentLoaded', function () {
        const myCarousel = document.getElementById('carouselExampleAutoplaying');
        new bootstrap.Carousel(myCarousel, {
            interval: 5000, // Cambia la velocidad de transición a 5 segundos
            ride: 'carousel'
        });
    });
    