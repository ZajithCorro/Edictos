$('#formSesion').submit(function(e){
    e.preventDefault();

    let user = document.getElementById('numeroInput').value;
    let pass = document.getElementById('passInput').value;

    if ((user === '1111' || user === '2222' || user === '3333' || user === '4444') && pass === 'pass') {
        localStorage.setItem('User', user);
        localStorage.setItem('Password', pass);

        var path = window.location.href;
        var url = path.slice(0, path.length - 10) + 'home.html'
        location.href = url;
    } else {
        document.getElementById('formSesion').reset();
    }
})