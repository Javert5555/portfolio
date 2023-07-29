window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector('.preloader') /* находим блок Preloader */
  setTimeout(() => {
    preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
  }, 500)
})

const scrolling = window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})

// gsap.from(['.layers__header', '.layers__btn'], {
//     y: 300,
//     opacity: 0,
//     duration: 2,
//     // stagger: 0.1,
//     // ease: "back.out(1.7)",
// })

// gsap.fromTo(".line", { width: 300, duration: 1 });
// gsap.fromTo(".title", { scaleX: 0 }, { scaleX: 1, duration: 1, transformOrigin: "left" });

const mySwiper = new Swiper('.slider', {
    // direction: 'vertical', // вертикальная прокрутка
    speed: 2200,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // loop:true,
    spaceBetween: 28,
    // parallax: true,
    // mousewheel: true,

})

let anchor = document.querySelector(".layer_new")

// window.addEventListener("scroll", function() {
//     if (window.scrollY !== 0) {
//       anchor.style.display = 'block'
//       anchor.style.opacity = .3
//     } else {
//       anchor.style.display = 'none'

//       anchor.style.opacity = 0
//     }
// })

// anchor.addEventListener("mouseover", function() {
//   anchor.style.opacity = 1
// })
// anchor.addEventListener("mouseout", function() {
//   anchor.style.opacity = .3
// })
// anchor.addEventListener("click", function() {
//   anchor.style.opacity = .3
// })
  


document.querySelector(".layer_new").addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});


document.querySelector(".main-header__btn").addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight + 1,
        behavior: 'smooth'
    });
});


const lines = Array.from(document.querySelectorAll('.line'))
const titles = Array.from(document.querySelectorAll('.title'))
const mainHeaderHeader = Array.from(document.querySelectorAll('.main-header__header'))
const mainHeaderBtn = Array.from(document.querySelectorAll('.main-header__btn'))
const slider = Array.from(document.querySelectorAll('.slider'))
const sliderHeader = Array.from(document.querySelectorAll('.slider__header'))
const sliderDescription = Array.from(document.querySelectorAll('.slider__description'))
const sliderBtnCont = Array.from(document.querySelectorAll('.slider__btn-cont'))
const sliderItem = Array.from(document.querySelectorAll('.slider__item'))

const collageItems = Array.from(document.querySelectorAll(".soft-skills__skill"));


const gsapAnimateTo = (elements, params) => {
  elements.map(el => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          gsap.to(el, params)
          observer.disconnect()
        }
      });
      observer.observe(el)
  })
}

const gsapAnimateFrom = (elements, params) => {
  elements.map(el => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          gsap.from(el, params)
          observer.disconnect()
        }
      });
      observer.observe(el)
  })
}

const gsapAnimateFromTo = (elements, paramsFrom, paramsTo) => {
  elements.map(el => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(el, paramsFrom, paramsTo)
          observer.disconnect()
        }
      });
      observer.observe(el)
  })
}

gsapAnimateFromTo(lines, {opacity: 0, y: 250, width: 0 }, { opacity: 1, y: 0, width: 250, duration: 1.5 })
gsapAnimateFromTo(titles, {opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5 })

gsapAnimateFromTo(slider, {opacity: 0, y: 250 },{ opacity: 1, y: 0, duration: 1.5 })
gsapAnimateFromTo(sliderHeader, {opacity: 0, x: 150 }, { opacity: 1, x: 0, duration: 1.5 })
gsapAnimateFromTo(sliderDescription, {opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1.5 })
gsapAnimateFromTo(sliderBtnCont, {opacity: 0, x: 250 }, { opacity: 1, x: 0, duration: 1.5 })

gsapAnimateFromTo(mainHeaderHeader, {opacity: 0, y: 250 },{ opacity: 1, y: 0, duration: 1.5 })
gsapAnimateFromTo(mainHeaderBtn, {opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.3 })

gsapAnimateFromTo(collageItems, {opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.3 })
