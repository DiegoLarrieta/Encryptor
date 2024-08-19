// Selecciona el input y el área de mensaje
const input = document.querySelector('.js-input');
const messageArea = document.querySelector('.js-message textarea');

// Escucha el evento 'keydown' en el input
input.addEventListener('keydown', function(event) {
    // Verifica si la tecla presionada es Enter
    if (event.key === 'Enter') {
        // Previene el comportamiento por defecto (evita que se haga un salto de línea o submit)
        event.preventDefault();

        // Toma el texto del input
        const texto = input.value;

        // Inserta el texto en el área de mensaje
        messageArea.value = texto;

        // Limpia el input después de enviar el mensaje
        input.value = '';

        // Log para verificar el texto ingresado
        console.log(texto);
    }
});
