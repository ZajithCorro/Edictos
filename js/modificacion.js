function cerrar() {
    console.log('Boton')
    $('#modalOpciones').modal('hide');
}

$('#formModificacion').submit(function(e) {
    e.preventDefault();
    document.getElementById('resultados').classList.toggle('d-none')
})