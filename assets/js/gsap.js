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
        duration: 1,
        stagger: 1,
        scrub: "true",
      },
    );
    // Ensure ScrollTrigger is registered
  },
});

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".products-section");

gsap.utils.toArray(".image-overlay").forEach((overlay, i) => {
  const container = overlay.closest(".zoya-products");
  const image = container.querySelector(".product-image");
  const title = container.querySelector(".product-title");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 120%",
      end: "top 50%",
      toggleActions: "play none none reverse",
      // once: true,
      scrub: "true",
    },
  });

  tl.fromTo(
    overlay,
    { scaleX: 1 },
    {
      scaleX: 0,
      duration: 1.5,
      ease: "power2.inOut",
    },
  )
    .fromTo(
      image,
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=1",
    )
    .fromTo(
      title,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.5",
    );
});

gsap.registerPlugin(ScrollTrigger);

const signatureSection = document.querySelector(".signature-section");

gsap.utils.toArray(".signature-image-overlay").forEach((overlay, i) => {
  const container = overlay.closest(".signature-product");
  const image = container.querySelector(".signature-image");
  const title = container.querySelector(".signature-product-title");

  const signatureTl = gsap.timeline({
    scrollTrigger: {
      trigger: signatureSection,
      start: "top 120%",
      end: "top 50%",
      toggleActions: "play none none reverse",
      scrub: "true",
    },
  });

  signatureTl
    .fromTo(
      overlay,
      { scaleX: 1 },
      {
        scaleX: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
    )
    .fromTo(
      image,
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=1",
    )
    .fromTo(
      title,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.5",
    );
});
// ====================Wildflower Essance section=========

// ==============Swipper slider ============
var swiper = new Swiper(".swiper-container.two", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
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

function openModal() {
  var one = document.getElementById("modal-btn");
  if (one.classList.contains("show")) {
    one.classList.remove("show");
  } else {
    one.classList.add("show");
  }
}

function openModalTwo() {
  var two = document.getElementById("modal-btn-1");
  if (two.classList.contains("show")) {
    two.classList.remove("show");
  } else {
    two.classList.add("show");
  }
}
