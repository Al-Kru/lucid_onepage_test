$(document).ready(function(){$("#testimonials-slider").length&&$("#testimonials-slider").slick({prevArrow:!1,nextArrow:!1,dots:!0,infinite:!0,speed:1500,slidesToShow:1,slidesToScroll:1,autoplay:!1}),$("#menu").on("click","a",function(o){o.preventDefault();var e=$(this).attr("href"),t=$(e).offset().top;$("body,html").animate({scrollTop:t},1500)}),$("#go-top").on("click",function(o){o.preventDefault(),$("body,html").stop().animate({scrollTop:0},1500)}),$(".mobile-menu").on("click",function(){return $(this).toggleClass("open"),$(".nav").slideToggle(),!1})}),$(window).scroll(function(){$(window).scrollTop()>$("header").height()?$("#go-top").fadeIn():$("#go-top").fadeOut()}),$(window).resize(function(){$(window).width()<=480?($("#header__btn-block").appendTo(".header-bottom"),$("#about-left").appendTo("#container-about")):($("#header__btn-block").appendTo(".header-bottom__left"),$("#about-right").appendTo("#container-about"))});