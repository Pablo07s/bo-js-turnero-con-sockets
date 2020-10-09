// Cargar la libreria de socket.io
var socket = io();
var ticketActual = $('small');

socket.on('connect', function() {
    console.log('Conectado al servidor desde los escritorios!');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor de los escritorios!');
});

// Recuperamos un parametro de la URL
var buscarParametro = new URLSearchParams(window.location.search);

if (!buscarParametro.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

var escritorio = buscarParametro.get('escritorio');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay mas tickets por atender !') {
            alert(resp);
            return;
        }

        ticketActual.text('Ticket ' + resp.numero);
    });
})