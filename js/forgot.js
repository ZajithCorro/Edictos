$('#formForgot').submit(function(e){
    e.preventDefault();
    var path = window.location.href;
    var url = path.slice(0, path.length - 11) + 'index.html'
    location.href = url;
})