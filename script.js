const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".border");
const menuText = document.querySelector(".navigation h1");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  const spans = hamburger.querySelectorAll("span");
  const tl = gsap.timeline();
  if (!menuOpen) {
    tl.to(menu, {
      height: "80vh",
      opacity: 1,
      duration: 0.6,
      ease: "power3.inOut",
    });
    gsap.to(spans[0], {
      y: 3.5,
      rotation: 50,
      backgroundColor: "#fff",
      duration: "0.6",
      ease: "power3.inOut",
    });
    gsap.to(spans[1], {
      y: -3.5,
      rotation: -50,
      backgroundColor: "#fff",
      duration: "0.3",
      ease: "power3.inOut",
    });

    hamburger.classList.add("active");
    menuText.textContent = "Close";
    menuOpen = true;
  } else {
    tl.to(menu, {
      height: "0vh",
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
    gsap.to(spans[0], {
      y: 0,
      rotation: 0,
      backgroundColor: "#fff",
      duration: 0.3,
    });
    gsap.to(spans[1], {
      y: 0,
      rotation: 0,
      backgroundColor: "#fff",
      duration: 0.6,
    });
    hamburger.classList.remove("active");
    menuText.textContent = "Menu";
    menuOpen = false;
  }
});

let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section ").forEach(function (page) {
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

// change contrast with button click

const center = document.querySelectorAll(".center-content");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  center.forEach((e) => {
    e.classList.toggle("active");
    // e.style.transition = "all ease 0.4s";
  });
});

gsap.registerPlugin(ScrollTrigger);

// Parallax effect for .page8
