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
    // Animations for desktop
    gsap.set(".overlay", {
      width: "100%",
      opacity: 1,
    });

    gsap.to(".overlay", {
      width: "0%",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".products-section",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
      },
    });

    gsap.set(".signature-image-container-overlay", {
      width: "100%",
      opacity: 1,
    });

    gsap.to(".signature-image-container-overlay", {
      width: "0%",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".signature-section",
        start: "10% 90%",
        scrub: 2,
      },
    });

    // ================Text Animation==========
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

  // Tablet: 768px to 1023px
  "(min-width: 768px) and (max-width: 1023px)": function () {
    // Animations for tablets
    gsap.set(".overlay", {
      width: "100%",
      opacity: 1,
    });

    gsap.to(".overlay", {
      width: "0%",
      opacity: 0,
      duration: 1.5, // Slower duration for tablets
      scrollTrigger: {
        trigger: ".products-section",
        start: "top 70%",
        end: "top 20%",
        scrub: 2,
      },
    });

    gsap.set(".signature-image-container-overlay", {
      width: "100%",
      opacity: 1,
    });

    gsap.to(".signature-image-container-overlay", {
      width: "0%",
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".signature-section",
        start: "20% 80%",
        scrub: 2,
      },
    });
  },

  // Mobile: max-width 767px
  "(max-width: 767px)": function () {
    // Animations for mobile
    gsap.set(".overlay", {
      width: "100%",
      opacity: 1,
    });

    gsap.to(".overlay", {
      width: "0%",
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".products-section",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      },
    });

    gsap.set(".signature-image-container-overlay", {
      width: "100%",
      opacity: 1,
    });

    gsap.to(".signature-image-container-overlay", {
      width: "0%",
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".signature-section",
        start: "30% 70%",
        scrub: 2,
      },
    });
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
