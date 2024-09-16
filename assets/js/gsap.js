gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.07,
});

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Reveal animation for text
document.querySelectorAll(".reveal").forEach((text) => {
  // Split text into words
  let splitText = new SplitType(text, {
    type: "words",
  });
  const section = text.closest(".split-text");

  gsap.from(splitText.words, {
    opacity: 0.1,
    ease: "none",
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: section,
      start: "10% 50%",
      end: "100% 50%",
      scrub: true,
    },
  });
});

gsap.registerPlugin(ScrollTrigger);

// Animate all '.overlay' elements with stagger
gsap.from(".overlay", {
  width: "0%",
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".zoya-products",
    start: "10% 50%",
    end: "10% 50%",
    // markers: true,
    toggleActions: "play none none reverse",
  },
  width: "100%",
  opacity: 1,
});

// Animate all '.products-overlay' elements with stagger
gsap.fromTo(
  ".products-overlay",
  {
    width: "100%",
    opacity: 0,
  },
  {
    width: "0%",
    opacity: 0.8,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".products-box",
      start: "top 40%",
      end: "top 20%",
      // markers: true,
      toggleActions: "play none none reverse",
    },
  },
);

// ========================samave section==============
gsap.to(
  ".products-overlay",
  {
    width: "0%", // Initial state
    opacity: 0,
  },
  {
    width: "100%", // Final state
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".zoya-products", // Change this to the section you're targeting
      scroller: "body",
      start: "10% 50%",
      end: "10% 50%",
      markers: true,
      toggleActions: "play none none reverse",
    },
  },
);

gsap.to(".products-overlay-videos", {
  duration: 1,
  width: "0%",
  ease: "power2.inOut", // Add easing for smooth animation
  scrollTrigger: {
    trigger: ".samave-section",
    start: "top 60%",
    end: "top 30%",
    markers: true,
    scrub: 2, // Maintain smooth scrub effect
  },
});
