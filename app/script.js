const track = document.querySelector('.carousel-item');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideSize * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

    // if(targetIndex === 0) {
    //     prevButton.classList.add('is-hidden');
    //     nextButton.classList.remove('is-hidden');
    // } else if (targetIndex === slides.length - 1) {
    //     prevButton.classList.remove('is-hidden');
    //     nextButton.classList.add('is-hidden');
    // } else {
    //     prevButton.classList.remove('is-hidden');
    //     nextButton.classList.remove('is-hidden');
    // }

});