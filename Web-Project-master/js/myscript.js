/**
 * Created by Raghav on 16/05/2017.
 */

$(document).ready(function () {
   //mouse enter overlay
    $('ul#gall li').on('mouseenter', function(){
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');

        //validation
        if(desc == null) {
            desc = 'click to enlarge';
        }
        if(title == null) {
            title = '';
        }

        //create overlay div
        $(this).append('<div class="overlay"></div>');

        //get overlay
        var overlay = $(this).children('.overlay');

        //add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

        //fade in overlay
        overlay.fadeIn(800);
    });

    //mouse leave overlay
    $('ul#gall li').on('mouseleave', function(){

        //create overlay div
        $(this).append('<div class="overlay"></div>');

        //get overlay
        var overlay = $(this).children('.overlay');

        //fadeout
        overlay.fadeOut(500);
    });
});