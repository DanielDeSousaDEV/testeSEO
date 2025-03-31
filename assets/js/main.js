$(window).on('load', function() {
    $('#preloader').addClass('opacity-0');

    setTimeout(function() {
        $('#preloader').addClass('hidden');
    }, 300);
});

$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault()
        alert('Dados Enviados com sucesso')  
    })

    $('#cnpj').mask('00.000.000/0000-00')
    $('#tel').mask('(00) 0000-0000')
});