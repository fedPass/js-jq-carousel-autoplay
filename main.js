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

})
