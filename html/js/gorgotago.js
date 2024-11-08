// 고르고타고 플러그인

// 세일 슬라이드
$(function(){
  $('.sale-slide').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });
});



// 메인 배너 슬라이드
var mainbanner_swiper = new Swiper("#mainbanner-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    // slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 카테고리별 제품 슬라이드

var category_swiper = new Swiper("#category-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    navigation: {
        nextEl: "#category-swiper .swiper-button-next",
        prevEl: "#category-swiper .swiper-button-prev",
    },
});

// aos 플러그인

<script> 
AOS.init(); // 자바스크립트로 init()을 해야 동작한다.
</script>