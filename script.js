// script.js
document.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musica-fondo');

    function reproducirAudio() {
        musica.play().then(() => {
            console.log("Audio reproduciéndose");
            // Quitamos el evento tras el primer éxito
            document.removeEventListener('click', reproducirAudio);
            document.removeEventListener('touchstart', reproducirAudio);
        }).catch(error => {
            console.error("El navegador bloqueó el audio:", error);
        });
    }

    // Escuchamos tanto clics como toques (indispensable para móviles)
    document.addEventListener('click', reproducirAudio);
    document.addEventListener('touchstart', reproducirAudio);
});