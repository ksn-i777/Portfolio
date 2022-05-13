const hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.overlay'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    overlay.classList.add('active'),
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    overlay.classList.remove('active'),
    menu.classList.remove('active');
});

//скрипт для локального сервера и проверки отправки данных на почту

$(document).ready(function(){
    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
});