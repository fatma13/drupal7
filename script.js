        $(document).on("scroll", function() {
            if ($(window).width() > 768) {
                if ($(document).scrollTop() > 440) {
                    $(".header-in-flex").addClass("large").removeClass("container");
                    $('.navbar-index > ul li:first-child').css('display', 'inline-block');
                } else {
                    $(".header-in-flex").removeClass("large").addClass("container");
                    $('.navbar-index > ul li:first-child').css('display', 'none');
                }
            }

        });
        
jQuery(document).ready(function($) {

$(window).scroll(function() {
if ($(this).scrollTop() > 145){  
    $('#menu').addClass("sticky");
  }
  else{
    $('#menu').removeClass("sticky");
  }
});

        $(".references-section .view-content").owlCarousel({

        autoPlay: true, //Set AutoPlay to 3 seconds
        dots: true,
         margin: 30,
        items: 4,
         responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            767:{
                items:2
            },
            992:{
                items:3
            },
                        1200:{
                            items:4
                        }
        }
    });
           
     

        });


        $(document).ready(function() {


            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('#scroll').fadeIn();
                } else {
                    $('#scroll').fadeOut();
                }
            });


            $('#scroll').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
            $('#scrolltop').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        });
