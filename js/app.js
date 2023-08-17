window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector('.preloader') /* находим блок Preloader */
  setTimeout(() => {
    preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
  }, 500)
})

const scrolling = window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// // ScrollTrigger.normalizeScroll(true)

// const smoother = ScrollSmoother.create({
//  content: ".content",
//  smooth: 2,
//  effects: true
// })

// gsap.from(['.layers__header', '.layers__btn'], {
//     y: 300,
//     opacity: 0,
//     duration: 2,
//     // stagger: 0.1,
//     // ease: "back.out(1.7)",
// })

// gsap.fromTo(".line", { width: 300, duration: 1 })
// gsap.fromTo(".title", { scaleX: 0 }, { scaleX: 1, duration: 1, transformOrigin: "left" })

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

let anchor = document.querySelector(".anchor")

// window.addEventListener("scroll", function() {
//     if (window.scrollY !== 0) {
//       anchor.style.display = 'block'
//       anchor.style.opacity = .3
//     } else {
//       anchor.style.display = 'none'

//       anchor.style.opacity = 0
//     }
// })

window.addEventListener('scroll', () => {
  let windowPosition = window.scrollY
  
  if (windowPosition !== 0) {
    anchor.classList.remove('top-window')
  } else {
    anchor.classList.add('top-window')
  }
})

// anchor.addEventListener("mouseover", () => {
//   anchor.style.opacity = 1
// })
// anchor.addEventListener("mouseout", function() {
//   anchor.style.opacity = .3
// })
// anchor.addEventListener("click", function() {
//   anchor.style.opacity = .3
// })
  


// document.querySelector(".anchor").addEventListener("click", e => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
// })
// })


document.querySelector(".intro__btn").addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight + 1,
        behavior: 'smooth'
    })
})


const lines = Array.from(document.querySelectorAll('.line'))
const titles = Array.from(document.querySelectorAll('.title'))
const introHeader = Array.from(document.querySelectorAll('.intro__header'))
const introBtn = Array.from(document.querySelectorAll('.intro__btn'))
const slider = Array.from(document.querySelectorAll('.slider'))
const sliderHeader = Array.from(document.querySelectorAll('.slider__header'))
const sliderDescription = Array.from(document.querySelectorAll('.slider__description'))
const sliderBtnCont = Array.from(document.querySelectorAll('.slider__btn-cont'))
const sliderItem = Array.from(document.querySelectorAll('.slider__item'))
const aboutListTechnologiesItems = Array.from(document.querySelectorAll(".about_list-technologies-item"))
const contactsItem = Array.from(document.querySelectorAll(".contacts__item"))
const aboutInfoTitle = Array(document.querySelector('.about__info-title'))
const aboutTechnologiesTitle = Array(document.querySelector('.about_technologies-title'))
const aboutInfoTexts = Array(document.querySelector('.about__info-texts'))
// .about_technologies-title, .about__info-title

const gsapAnimateFromTo = (elements, paramsFrom, paramsTo) => {
  elements.map(el => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(el, paramsFrom, paramsTo)
          observer.disconnect()
        }
      })
      observer.observe(el)
  })
}

gsapAnimateFromTo(lines, {opacity: 0, y: 250, width: 0 }, { opacity: 1, y: 0, width: 250, duration: 1.5 })
gsapAnimateFromTo(titles, {opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5 })

gsapAnimateFromTo(slider, {opacity: 0, y: 250 },{ opacity: 1, y: 0, duration: 1.5 })
gsapAnimateFromTo(sliderHeader, {opacity: 0, x: 150 }, { opacity: 1, x: 0, duration: 1.5 })
gsapAnimateFromTo(sliderDescription, {opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1.5 })
gsapAnimateFromTo(sliderBtnCont, {opacity: 0, x: 250 }, { opacity: 1, x: 0, duration: 1.5 })

gsapAnimateFromTo(introHeader, {opacity: 0, y: 250 },{ opacity: 1, y: 0, duration: 1.5 })
gsapAnimateFromTo(introBtn, {opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.3 })

gsapAnimateFromTo(aboutListTechnologiesItems, {opacity: 0, x: -250 }, { opacity: 1, x: 0, duration: 1.5, delay: 0.3 })
gsapAnimateFromTo(aboutTechnologiesTitle, {opacity: 0, x: -250 }, { opacity: 1, x: 0, duration: 1.5, delay: 0.3 })

gsapAnimateFromTo(aboutInfoTitle, {opacity: 0, x: 250 }, { opacity: 1, x: 0, duration: 1.5, delay: 0.3 })
gsapAnimateFromTo(aboutInfoTexts, {opacity: 0, x: 250 }, { opacity: 1, x: 0, duration: 1.5, delay: 0.3 })

gsapAnimateFromTo(contactsItem, {opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.3 })


