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


// 자기소개 페이지 플러그인

const textElements = gsap.utils.toArray('.text');

textElements.forEach((text, index) => {
    gsap.fromTo(text, 
        { backgroundSize: '0%' }, // 시작 상태
        {
            backgroundSize: '100%', // 끝 상태
            ease: 'none',
            duration: 1, // 애니메이션 지속 시간
            delay: index * 0.5 // 각 애니메이션 사이에 0.5초의 지연 추가
        }
    );
});

// 카페 24, 팀플 영역 배경 그라데이션 효과
console.clear();
const randomX = random(-400, 400);
const randomY = random(-200, 200);
const randomDelay = random(0, 50);
const randomTime = random(6, 12);
const randomTime2 = random(5, 6);
const randomAngle = random(-30, 150);

const blurs = gsap.utils.toArray(".blur");
blurs.forEach((blur) => {
  gsap.set(blur, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });

  moveX(blur, 1);
  moveY(blur, -1);
  rotate(blur, 1);
});

function rotate(target, direction) {
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}