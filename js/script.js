$(document).ready(function() {
  $('#hamburger').click(function(){
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
});


        media();
        // 전역호출
        function media(){
          const ww = $(window).width();
          if(ww >= 770){
          // swiper
          var swiper = new Swiper(".firstSwiper", {
            slidesPerView: 5.5,
            slidesPerGroup:1,
            spaceBetween: 16,
            navigation: {
              // nextEl: ".swiper-button-next",
              // prevEl: ".swiper-button-prev",
            },
            
            
          });
          var swiper = new Swiper(".secondSwiper", {
            slidesPerView: 5.5,
            slidesPerGroup:1,
            spaceBetween: 16,
            navigation: {
              // nextEl: ".swiper-button-next",
              // prevEl: ".swiper-button-prev",
            },
            });

            var swiper = new Swiper(".fiveSwiper", {
              slidesPerView: 4.5,
              slidesPerGroup:1,
              spaceBetween: 20,
              navigation: {
              //  nextEl: ".swiper-button-next",
              //  prevEl: ".swiper-button-prev",
              },
            });

              }else{
                
          }
        };

        
    $(window).scroll(function(){
        const sct = $(window).scrollTop();

        console.log(sct);
        if(sct >= 100){
            $('.header-area').addClass('on')
    
        }else{
            $('.header-area').removeClass('on')
        }

        //0~600px
        // 0 = a * 0 + b
        // 0.7 = a * 600 + b
        // a = 7/6000,b = 0

        
        // const bgColor = 7/6000 * sct
        // $('.section-wrap').css({backgroundColor : `rgba(0,0,0,${bgColor})`});
        // background-color: rgba(0,0,0,0.7);

        
        // background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.49763655462184875) 7%, rgba(2,0,36,1) 100%);

    });

    var video = $(".bannerv");
    var image = $(".banner-bg");

    video.on("ended", function() {
        video.css("opacity", 0);
    });
    

    $('.firstSwiper').mouseenter(function(){
      $('.sec-1 .list1 .firstSwiper .swiper-button-prev, .sec-1 .list1 .firstSwiper .swiper-button-next').css({opacity : 1});
    });

    $('.firstSwiper').mouseleave(function(){
      $('.sec-1 .list1 .firstSwiper .swiper-button-prev, .sec-1 .list1 .firstSwiper .swiper-button-next').css({opacity : 0});
    });

    $('.secondSwiper').mouseenter(function(){
      $('.sec-1 .list2 .secondSwiper .swiper-button-prev, .sec-1 .list2 .secondSwiper .swiper-button-next').css({opacity : 1});
    });

    $('.secondSwiper').mouseleave(function(){
      $('.sec-1 .list2 .secondSwiper .swiper-button-prev, .sec-1 .list2 .secondSwiper .swiper-button-next').css({opacity : 0});
    });

    $('.thirdSwiper').mouseenter(function(){
      $('.sec-1 .list3 .thirdSwiper .swiper-button-prev, .sec-1 .list3 .thirdSwiper .swiper-button-next').css({opacity : 1});
    });

    $('.thirdSwiper').mouseleave(function(){
      $('.sec-1 .list3 .thirdSwiper .swiper-button-prev, .sec-1 .list3 .thirdSwiper .swiper-button-next').css({opacity : 0});
    });
          


      var swiper = new Swiper(".thirdSwiper", {
        slidesPerView: 5.5,
        slidesPerGroup:1,
        spaceBetween: 16,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".fourSwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });

      $('.box').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $(this).children('video').get(0).play();
        $(this).siblings().children('video').each(function() {
            this.pause();
        });
    });

    // var swiper = new Swiper(".fiveSwiper", {
    //   slidesPerView: 4.5,
    //   slidesPerGroup:1,
    //   spaceBetween: 20,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });

    var swiper = new Swiper(".sixSwiper", {
      slidesPerView: 5.5,
      slidesPerGroup:1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".sevenSwiper", {
      slidesPerView: 5.5,
      slidesPerGroup:1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".eightSwiper", {
      slidesPerView: 5.5,
      slidesPerGroup:1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".nineSwiper", {
      slidesPerView: 5.5,
      slidesPerGroup:1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".tenSwiper", {
      slidesPerView: 5.5,
      slidesPerGroup:1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".elevenSwiper", {
      slidesPerView: 5.5,
      slidesPerGroup:1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".twelveSwiper", {
      slidesPerView: 5.5,
      slidesPerGroup:1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});