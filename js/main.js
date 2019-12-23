
$(function(){
    $(window).load(function () {
        $(".loader").fadeOut(400,function () {
            $(this).remove();
        });
    });
    AOS.init();
    var html = document.querySelector('html').dir;
    var swiper = new Swiper('.header .swiper-container', {
        loop:true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: html === 'rtl' ? '.my-button-next' : '.my-button-prev',
            prevEl: html === 'rtl' ? '.my-button-prev' : '.my-button-next',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.customers-section .swiper-container', {
        slidesPerView:5,
        spaceBetween: 0,
        loop:true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
    
            991: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
      },
        navigation: {
            nextEl: html === 'rtl' ? '.my-button-next' : '.my-button-prev',
            prevEl: html === 'rtl' ? '.my-button-prev' : '.my-button-next',
        },
        pagination: {
            el: '.customers-section .swiper-pagination',
            clickable: true,
        },
    

    });
    $('.searchBtn , .close-search, .search-popUp').on('click' , function(){
        $('.search-popUp').toggleClass('active');
        $('body').toggleClass('over');
    })
    $('.input-container').on('click', function (e) {
        e.stopPropagation();
         
     })
     $('.close-search').on('click', function () {
        $('.search-popUp').toggleClass('active');
        $('body').toggleClass('over');

     })

     $('.navBtn , .close-nav, .nav-popUp ,.nav-popUp  .links-list li').on('click' , function(){
        $('.nav-popUp').toggleClass('active');
        $('body').toggleClass('over');

    })
    $('.close-nav').on('click' , function(){
        $('.nav-popUp').toggleClass('active');
        $('body').toggleClass('over');

    })
    $('.links-list').on('click', function (e) {
        e.stopPropagation();
         
     })

    $('.to-top').on('click',function(){
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });

    if(window.innerWidth <= 991){
        $('.subscribe .con').addClass('container');
        $('.footer-nav .content').addClass('collapse');
        $('.footer-title').attr('data-toggle' , 'collapse' )
        $('.footer-title').on('click' , function(){
            $(this).find('i').toggleClass('fa-plus fa-minus')
        });      
    }


});
