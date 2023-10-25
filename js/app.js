window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader')
  setTimeout(() => {
    preloader.classList.add('preloader_hidden')
  }, 500)
})

const scrolling = window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollTrigger.normalizeScroll(true)

const smoother = ScrollSmoother.create({
  content: '.content',
  smooth: 2,
  effects: true,
})

const mySwiper = new Swiper('.slider', {
  // direction: 'vertical', // вертикальная прокрутка
  speed: 2200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // loop:true,
  spaceBetween: 28,
  // parallax: true,
  // mousewheel: true,

})

const anchor = document.querySelector('.anchor')

window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY
  if (windowPosition !== 0) {
    anchor.classList.remove('top-window')
  } else {
    anchor.classList.add('top-window')
  }
})

document.querySelector('.intro__btn').addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight + 1,
    behavior: 'smooth',
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
const aboutListTechnologiesItems = Array.from(document.querySelectorAll('.about_list-technologies-item'))
const contactsItem = Array.from(document.querySelectorAll('.contacts__item'))
const aboutInfoTitle = Array(document.querySelector('.about__info-title'))
const aboutTechnologiesTitle = Array(document.querySelector('.about_technologies-title'))
const aboutInfoTexts = Array(document.querySelector('.about__info-texts'))

const gsapAnimateFromTo = (elements, paramsFrom, paramsTo) => {
  elements.forEach((el) => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        gsap.fromTo(el, paramsFrom, paramsTo)
        observer.disconnect()
      }
    })
    observer.observe(el)
  })
}

gsapAnimateFromTo(lines, { opacity: 0, y: 250, width: 0 }, {
  opacity: 1, y: 0, width: 250, duration: 1.5,
})
gsapAnimateFromTo(titles, { opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5 })
gsapAnimateFromTo(slider, { opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5 })
gsapAnimateFromTo(sliderHeader, { opacity: 0, x: 150 }, { opacity: 1, x: 0, duration: 1.5 })
gsapAnimateFromTo(sliderDescription, { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1.5 })
gsapAnimateFromTo(sliderBtnCont, { opacity: 0, x: 250 }, { opacity: 1, x: 0, duration: 1.5 })
gsapAnimateFromTo(introHeader, { opacity: 0, y: 250 }, { opacity: 1, y: 0, duration: 1.5 })
gsapAnimateFromTo(introBtn, { opacity: 0, y: 250 }, {
  opacity: 1, y: 0, duration: 1.5, delay: 0.3,
})
gsapAnimateFromTo(aboutListTechnologiesItems, { opacity: 0, x: -250 }, {
  opacity: 1, x: 0, duration: 1.5, delay: 0.3,
})
gsapAnimateFromTo(aboutTechnologiesTitle, { opacity: 0, x: -250 }, {
  opacity: 1, x: 0, duration: 1.5, delay: 0.3,
})
gsapAnimateFromTo(aboutInfoTitle, { opacity: 0, x: 250 }, {
  opacity: 1, x: 0, duration: 1.5, delay: 0.3,
})
gsapAnimateFromTo(aboutInfoTexts, { opacity: 0, x: 250 }, {
  opacity: 1, x: 0, duration: 1.5, delay: 0.3,
})
gsapAnimateFromTo(contactsItem, { opacity: 0, y: 250 }, {
  opacity: 1, y: 0, duration: 1.5, delay: 0.3,
})

const scrollToElement = (btn, toElementSelector) => {
  btn.addEventListener('click', () => {
    const position = document.querySelector(toElementSelector).offsetTop;
    window.scrollTo({
      top: position,
      // behavior: 'smooth'
    });
  })
}

const toWorksSectionBtn = document.querySelector('#to-works-section')
const toAboutSectionBtn = document.querySelector('#to-about-section')
const toContactsSectionBtn = document.querySelector('#to-contacts-section')

scrollToElement(toWorksSectionBtn, '#works-section')
scrollToElement(toAboutSectionBtn, '#about-section')
scrollToElement(toContactsSectionBtn, '#contacts-section')

gsapAnimateFromTo([toWorksSectionBtn], { opacity: 0, y: -150 }, {
  opacity: 1, y: 0, duration: 1.5, delay: 0.2,
})
gsapAnimateFromTo([toAboutSectionBtn], { opacity: 0, y: -150 }, {
  opacity: 1, y: 0, duration: 1.5, delay: 0.4,
})
gsapAnimateFromTo([toContactsSectionBtn], { opacity: 0, y: -150 }, {
  opacity: 1, y: 0, duration: 1.5, delay: 0.6,
})