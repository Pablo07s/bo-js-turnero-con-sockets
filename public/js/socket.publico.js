// Cargar la libreria de socket.io
var socket = io();
var ultimo;

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblescritorio1 = $('#lblEscritorio1');
var lblescritorio2 = $('#lblEscritorio2');
var lblescritorio3 = $('#lblEscritorio3');
var lblescritorio4 = $('#lblEscritorio4');

var arrLabels = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var arrEscritorios = [lblescritorio1, lblescritorio2, lblescritorio3, lblescritorio4];

socket.on('estadoActual', function(data) {
    actualizarHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    var notificacion = new Audio('audio/new-ticket.mp3');
    notificacion.play();

    actualizarHTML(data.ultimos4);
});

// Funcion para poblar el HTML
function actualizarHTML(ultimos4) {
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        arrLabels[i].text('Ticket ' + ultimos4[i].numero);
        arrEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}