$(document).ready(function(){
    //devo spostare la classe active alla foto successiva ogni 3 sec
    var clock = setInterval(function () {
        var imgCurrent = $('img.active');
        var imgNext = imgCurrent.next('img');
        var bulletCurrent = $('i.active');
        var bulletNext = bulletCurrent.next('i');
        if (imgNext.length == 0) {
            imgNext = $('.img-container img:first-child');
            bulletNext = $('.bullet-container i:first-child');
        }
        imgCurrent.removeClass('active');
        bulletCurrent.removeClass('active');
        imgNext.addClass('active');
        bulletNext.addClass('active');
    }, 3000);

    //fermati appena clicco su una freccetta
    $('.icon').click(function(){
        clearInterval(clock);
    });

    //se ho cliccato su next
    $('.next').click(function() {
        var imgCurrent = $('img.active');
        var imgNext = imgCurrent.next('img');
        var bulletCurrent = $('i.active');
        var bulletNext = bulletCurrent.next('i');
        if (imgNext.length == 0) {
            imgNext = $('.img-container img:first-child');
            bulletNext = $('.bullet-container i:first-child');
        }
        imgCurrent.removeClass('active');
        bulletCurrent.removeClass('active');
        imgNext.addClass('active');
        bulletNext.addClass('active');
    });
    //se ho cliccato su back
    $('.back').click(function() {
        var imgCurrent = $('img.active');
        var imgPrev = imgCurrent.prev('img');
        var bulletCurrent = $('i.active');
        var bulletPrev = bulletCurrent.prev('i');
        if (imgPrev.length == 0) {
            imgPrev = $('.img-container img:last-child');
            bulletPrev = $('.bullet-container i:last-child');
        }
        imgCurrent.removeClass('active');
        bulletCurrent.removeClass('active');
        imgPrev.addClass('active');
        bulletPrev.addClass('active');
    });
        //se clicco su un pallino mostrami la foto fotoCorrispondente
    $('.fas.fa-circle').click(function(){
        //devo prendere l'i del pallino
        var indexBullet = $(this).index();
        console.log('hai cliccato sul pallino in posizione: ' + indexBullet);
        var bulletCurrent = $('i.active');
        bulletCurrent.removeClass('active');
        $(this).addClass('active');
        //deve diventare active la img con i uguale a indexBullet
        var fotoCurrent = $('img.active');
        fotoCurrent.removeClass('active');
        var fotoCorrispondente = $('.img-container img').eq(indexBullet);
        fotoCorrispondente.addClass('active');
    });
})
