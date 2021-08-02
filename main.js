'use strict';

$('.btn-open').click(function () {
    $('.modal-login').fadeIn();
    $('body').addClass('active');
});

$('.btn-close').click(function () {
    $('.modal-login').fadeOut();
    $('body').removeClass('active');
});