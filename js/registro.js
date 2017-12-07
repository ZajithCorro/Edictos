document.addEventListener('DOMContentLoaded', function() {
    
    // Folio
    let num = Math.floor(Math.random() * (1000 - 10) + 10);
    document.getElementById('folioInput').value = num;

    // Hora
    let date = new Date();
    let hour = date.getHours();
    let minute = '0' + date.getMinutes();
    
    let hora = hour + ':' + minute.slice(-2);
    document.getElementById('horaInput').value = hora;

    // Fecha
    let day = '0' + date.getDate();
    let month = '0' + (date.getMonth() + 1);
    let year = date.getFullYear();

    let fecha = day.slice(-2) + '/' + month.slice(-2) + '/' + year;
    document.getElementById('fechaInput').value = fecha;
});

function modal(){
    $("#modalConfirmacion").modal();
};

function resetForm() {
    document.getElementById('formRegistro').reset();
}

function getHome() {
    var path = window.location.href;
    var url = path.slice(0, path.length - 13) + 'home.html'
    location.href = url;
}