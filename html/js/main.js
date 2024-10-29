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
const randomTime = random(2, 3);
const randomTime2 = random(3, 4);
const randomAngle = random(-30, 150);

const blurs = gsap.utils.toArray(".blur");

// Intersection Observer 설정
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const blur = entry.target;

            // 블러 요소의 초기 상태 설정 (opacity 0)
            gsap.set(blur, {
                x: randomX(-1),
                y: randomY(1),
                rotation: randomAngle(-1),
                opacity: 0, // 초기 상태에서 보이지 않도록
            });

            // 블러 애니메이션: 옆에서 나타나는 효과
            gsap.to(blur, {
                x: randomX(1),
                y: randomY(-1),
                opacity: 1, // 애니메이션 중 나타나도록 설정
                duration: 2,
                ease: Sine.easeInOut,
                onComplete: () => {
                    // 블러가 나타난 후 원래 애니메이션 시작
                    moveX(blur, 1);
                    moveY(blur, -1);
                    rotate(blur, 1);
                }
            });

            // 관찰을 중지하여 애니메이션이 한 번만 실행되도록 함
            observer.unobserve(blur);
        }
    });
}, { threshold: 0.1 }); // 10%가 보일 때 트리거

// 각 블러 요소에 대해 observer 등록
blurs.forEach(blur => {
    observer.observe(blur);
});

function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
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


// 진행바
gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
});