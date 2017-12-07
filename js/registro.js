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

$('#formRegistro').submit(function(e) {
    e.preventDefault();
    $('#modalConfirmacion').modal('show');
})

function resetForm() {
    var path = window.location.href;
    document.getElementById('formRegistro').submit();
    location.href = path;
}

function getHome() {
    document.getElementById('formRegistro').submit();
    var path = window.location.href;
    var url = path.slice(0, path.length - 13) + 'home.html'
    location.href = url;
}

function numPublicaciones(valor) {
    let date1 = document.getElementById('fecha-1');
    let date2 = document.getElementById('fecha-2');
    let date3 = document.getElementById('fecha-3');
    let date4 = document.getElementById('fecha-4');
    let date5 = document.getElementById('fecha-5');
    let date6 = document.getElementById('fecha-6');

    if (valor === '1') {
        date1.readOnly = false;
        date1.required = true;

        date2.readOnly = true;
        date3.readOnly = true;
        date4.readOnly = true;
        date5.readOnly = true;
        date6.readOnly = true;

        date2.value = '';
        date2.value = '';
        date4.value = '';
        date5.value = '';
        date6.value = '';
    }

    if (valor === '2') {
        date1.readOnly = false;
        date2.readOnly = false;
        date1.required = true;
        date2.required = true;

        date3.readOnly = true;
        date4.readOnly = true;
        date5.readOnly = true;
        date6.readOnly = true;

        date3.value = '';
        date4.value = '';
        date5.value = '';
        date6.value = '';
    }

    if (valor === '3') {
        date1.readOnly = false;
        date2.readOnly = false;
        date1.required = true;
        date2.required = true;
        date3.readOnly = false;
        date3.required = true;

        date4.readOnly = true;
        date5.readOnly = true;
        date6.readOnly = true;

        date4.value = '';
        date5.value = '';
        date6.value = '';
    }

    if (valor === '4') {
        date1.readOnly = false;
        date2.readOnly = false;
        date1.required = true;
        date2.required = true;
        date3.readOnly = false;
        date3.required = true;
        date4.readOnly = false;
        date4.required = true;

        date5.readOnly = true;
        date6.readOnly = true;

        date5.value = '';
        date6.value = '';
    }

    if (valor === '5') {
        date1.readOnly = false;
        date2.readOnly = false;
        date1.required = true;
        date2.required = true;
        date3.readOnly = false;
        date3.required = true;
        date4.readOnly = false;
        date4.required = true;
        date5.readOnly = false;
        date5.required = true;

        date6.readOnly = true;

        date6.value = '';
    }

    if (valor === '6') {
        date1.readOnly = false;
        date2.readOnly = false;
        date1.required = true;
        date2.required = true;
        date3.readOnly = false;
        date3.required = true;
        date4.readOnly = false;
        date4.required = true;
        date5.readOnly = false;
        date5.required = true;
        date6.readOnly = false;
        date6.required = true;
    }

    if (valor === 'other') {
        date1.readOnly = true;
        date1.value = ''
        date2.readOnly = true;
        date2.value = ''
        date3.readOnly = true;
        date3.value = ''
        date4.readOnly = true;
        date4.value = ''
        date5.readOnly = true;
        date5.value = ''
        date6.readOnly = true;
        date6.value = ''
    }
}