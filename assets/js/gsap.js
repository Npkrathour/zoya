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

// ===========================
document.querySelectorAll(".text-split-container").forEach((text) => {
  // Split text into words
  let splitText = new SplitType(text, {
    type: "words",
  });
  const section = text.closest(".text-container-split");

  gsap.from(splitText.words, {
    opacity: 0.1,
    ease: "none",
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: section,
      start: "10% 80%",
      end: "100% 50%",
      scrub: true,
    },
  });
});

gsap.from(".overlay", {
  width: "0%",
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".zoya-products",
    start: "10% 50%",
    end: "10% 50%",
    toggleActions: "play none none reverse",
  },
  width: "100%",
  opacity: 1,
});
