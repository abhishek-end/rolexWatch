//js for swipper slider auto in 3 sec
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach(function (page) {
  let video = page.querySelectorAll("video");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: page,
      scrub: true,
      pin: false,
    },
  });
  tl.from(video, {
    yPercent: -100,
    ease: "all",
    
  }).to(video, {
    yPercent: 50,
    ease: "all",
  });
});
