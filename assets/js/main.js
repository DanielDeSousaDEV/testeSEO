$(window).on('load', function() {
    $('#preloader').addClass('opacity-0');

    setTimeout(function() {
        $('#preloader').addClass('hidden');
    }, 300);
});

$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault()

        const data = new FormData(e.target)

        alert(`Dados Enviados: 
            \n Nome: ${data.get('name')}
            \n CNPJ: ${data.get('cnpj')}
            \n Email: ${data.get('email')}
            \n Telefone: ${data.get('tel')}
            \n Empresa: ${data.get('organization')}
        `)  
    })

    $('#cnpj').mask('00.000.000/0000-00')
    $('#tel').mask('(00) 0000-0000')
});