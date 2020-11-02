$('.newsline').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    pauseOnHover: true,
    arrows: false, 
    draggable: false
});
$('.prev-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    dots: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    asNavFor: '.prev-carousel',
    arrows: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    slidesToShow: 4
});
$('.menu').click(function() {
	if($(this).is('.active:not(.back)')) {
        $(this).addClass('back');
	} else if ($(this).is('.back')) {
        $(this).removeClass('back');
	} else {
        $(this).addClass('active');
	}
});

$('.menu').click(function(){
    $('.mobile').toggleClass('active');
    $('.overlay').toggleClass('active');
});

$('.overlay').click(function(){
    $('.mobile').removeClass('active');
    $(this).removeClass('active');
    $('.menu').removeClass('active');
});

let sidebarBtn = $('.sidebaropen')

sidebarBtn.click(function() {
    $('.sidebar').toggleClass('active');
    $(this).toggleClass('active');
    if(!sidebarBtn.hasClass('active')){
        sidebarBtn.html('<p>Открыть боковое меню</p>')
    } else {
        sidebarBtn.html('<p>Закрыть боковое меню</p>')
    }
})

$(document).ready(function(){
    var obj = $('.infoBlock');
    var offset = obj.offset();
    var topOffset = offset.top;
    var marginTop = obj.css("marginTop");
    
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= topOffset){
            obj.css({
                position: 'fixed',
            });
        }
        if (scrollTop < topOffset){
            obj.css({
                position: 'absolute',
            });
        }
    });
});

var acc = document.getElementsByClassName("dropbutton");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

