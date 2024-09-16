gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.07,
});

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.to(".zoya-details-section", {
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
gsap.set(".overlay", {
  width: "100%",
  opacity: 1,
});

gsap.to(".overlay", {
  width: "0%",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".zoya-products",
    start: "10% 95%",
    markers: true,
    scrub: 2,
  },
});
