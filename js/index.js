document.addEventListener('DOMContentLoaded', function(){
    let user = localStorage.getItem('User');

    if (user === '1111') { //Operador
        document.getElementById('modificacion').setAttribute('style', 'display: none');
        document.getElementById('hemeroteca').setAttribute('style', 'display: none');
    } else {
        if (user === '2222') { // Corrector
            document.getElementById('registro').setAttribute('style', 'display: none');
            document.getElementById('hemeroteca').setAttribute('style', 'display: none');
        } else {
            if (user === '3333') { // Hemeroteca
                document.getElementById('modificacion').setAttribute('style', 'display: none');
                document.getElementById('registro').setAttribute('style', 'display: none');
            }
        }
    }
})


