// ── Linked Scripts ──
// https://cdn.futbol-libres.su/agenda/smallscripts.js
// https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js

$(function() {
    
     var menu_ul = $('.menu > li > ul'),
     menu_a = $('.menu > li > a');
     
     menu_ul.hide();
    
     menu_a.click(function(e) {
     e.preventDefault();
     if(!$(this).hasClass('active')) {
     menu_a.removeClass('active');
     menu_ul.filter(':visible').slideUp('fast');
     $(this).addClass('active').next().stop(true,true).slideDown('fast');
     } else {
     $(this).removeClass('active');
     $(this).next().stop(true,true).slideUp('fast');
     }
     });
    
    });
