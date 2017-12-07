document.addEventListener('DOMContentLoaded', function(){
    let user = localStorage.removeItem('User')
})

$('#formSesion').submit(function(e){
    e.preventDefault();

    let user = document.getElementById('numeroInput').value;
    let pass = document.getElementById('passInput').value;

    // 1111 - Operador
    // 2222 - Corrector
    // 3333 - Hemeroteca

    if ((user === '1111' || user === '2222' || user === '3333' || user === '4444') && pass === 'pass') {
        localStorage.setItem('User', user);

        let path = window.location.href;
        let url = path.slice(0, path.length - 10) + 'home.html'
        location.href = url;
    } else {
        document.getElementById('errorMsg').classList.toggle('d-none');
    }
})