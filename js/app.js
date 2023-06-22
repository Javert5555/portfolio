const scrolling = window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})

new Swiper('.slider', {
    // direction: 'vertical', // вертикальная прокрутка
    speed: 2400,
    // mousewheel: {
    //     enabled: true,
    //     sensitivity: 2.4
    // },
    // mousewheel: true,
    spaceBetween: 18,
    parallax: true,
    // freeMode: trueyy
})

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         window.scrollTo({
//           top: target.offsetTop,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });

// // собираем все якоря; устанавливаем время анимации и количество кадров
// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//       animationTime = 1,
//       framesCount = 100;

// anchors.forEach(function(item) {
//   // каждому якорю присваиваем обработчик события
//   item.addEventListener('click', function(e) {
//     // убираем стандартное поведение
//     e.preventDefault();
    
//     // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
//     let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
//     // запускаем интервал, в котором
//     let scroller = setInterval(function() {
//       // считаем на сколько скроллить за 1 такт
//       let scrollBy = coordY / framesCount;
      
//       // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//       // и дно страницы не достигнуто
//       if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//         // то скроллим на к-во пикселей, которое соответствует одному такту
//         window.scrollBy(0, scrollBy);
//       } else {
//         // иначе добираемся до элемента и выходим из интервала
//         window.scrollTo(0, coordY);
//         clearInterval(scroller);
//       }
//     // время интервала равняется частному от времени анимации и к-ва кадров
//     }, animationTime / framesCount);
//   });
// });

// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//     anchor.addEventListener('click', e => {
//         e.preventDefault()
//         const blockID = anchor.getAttribute('href')
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }

