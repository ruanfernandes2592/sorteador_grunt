document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.querySelector('#numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.querySelector('#resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block';
    })
})