gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.07,
});

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.to(".zoya-details-section", {
  // scale: 0.009,
  duration: 1.5,
  with: "100%",
  scrollTrigger: {
    trigger: ".top-banner",
    start: "top 10%",
    end: "bottom 70%",
    scrub: 2,
  },
  duration: 1,
  height: "5vh",
});
// ==========================Overlay scroll Trigger==========
ScrollTrigger.matchMedia({
  // Desktop: min-width 1024px
  "(min-width: 1024px)": function () {
    gsap.fromTo(
      ".alive-content ul li",
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 1,
        scrub: "true",
      },
    );
  },
});

////////////////////////////

var swiper = new Swiper(".swiper-container.two", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: 3, // Default for larger screens (desktop)
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,

  // Breakpoints for responsiveness
  breakpoints: {
    // When window width is <= 540px (small mobile devices)
    300: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // When window width is <= 768px (mobile devices)
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When window width is <= 1024px (tablets)
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
