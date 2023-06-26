const scrolling = window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})

const mySwiper = new Swiper('.slider', {
    // direction: 'vertical', // вертикальная прокрутка
    speed: 2200,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true,
    spaceBetween: 28,
    parallax: true,

})
