window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector('.preloader') /* находим блок Preloader */
  setTimeout(() => {
    preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
  }, 500)
})

const scrolling = window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
  
  // const element = document.querySelector('.main-header')
  // const rect = element.getBoundingClientRect()
  // const viewportHeight = window.innerHeight

  // const visibleHeight = Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top)


  // const visiblePercent = visibleHeight / rect.height

  // if (visiblePercent > 0.6) visiblePercent = 1

  // document.body.style.cssText += `--mainHeaderVisiblePercent: ${visiblePercent}`


  // console.log('Visible percent:', visiblePercent)
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
    loop:true,
    spaceBetween: 28,
    parallax: true,
    // mousewheel: true,

})


document.querySelector(".layers__btn").addEventListener("click", function() {
    window.scrollTo({
        top: window.innerHeight + 1,
        behavior: 'smooth'
    });
});


const lines = Array.from(document.querySelectorAll('.line'))
const titles = Array.from(document.querySelectorAll('.title'))
const sliderHeader = Array.from(document.querySelectorAll('.slider__header'))
const sliderDescription = Array.from(document.querySelectorAll('.slider__description'))
const sliderBtnCont = Array.from(document.querySelectorAll('.slider__btn-cont'))
const sliderItem = Array.from(document.querySelectorAll('.slider__item'))

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

gsapAnimateTo(lines, { width: 250, duration: 1.5, opacity: 1 })
gsapAnimateTo(titles, { duration: 2.5, opacity: 1 })
gsapAnimateTo(sliderHeader, { duration: 1.5, opacity: 1 })
gsapAnimateTo(sliderDescription, { duration: 1.5, opacity: 1, delay: 0.15 })
gsapAnimateTo(sliderBtnCont, { duration: 1.5, opacity: 1, delay: 0.3 })



const collageItems = Array.from(document.querySelectorAll(".about__skill"));
collageItems.forEach((el, index) => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      gsap.from(el, {
        // start: "top 85%",
        autoAlpha: 0,
        y: 150,
        opacity: 0,
        duration: .1 + index * .1,
        // stagger: 0.2,
        // delay: 1.15,
        ease: "power1.out"
      })
      observer.disconnect()
    }
  });
  observer.observe(el)
})
  // ScrollTrigger.create({
  //   trigger: elem,
  //   start: "top 85%", // к примеру :)
  //   animation: gsap.from(elem, {
      
  //   })
  // });
// }
// );