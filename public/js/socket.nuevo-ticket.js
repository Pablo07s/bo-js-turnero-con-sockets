// Cargar la libreria de socket.io
var socket = io();
var nuevo_ticket = $('#lblNuevoTicket')

socket.on('connect', function() {
    console.log('Conectado al servidor!');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor!');
});

// Escuche el ultimo ticket
socket.on('estadoActual', function(resp) {
    console.log(resp);
    nuevo_ticket.text(resp.actual);
});

// Funcionalidades por medio de JQuery
$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        nuevo_ticket.text(siguienteTicket);
    });
});