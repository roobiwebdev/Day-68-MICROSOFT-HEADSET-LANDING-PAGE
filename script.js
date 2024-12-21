const navBar = document.querySelector("#nav-bar");
const NavLink = document.querySelectorAll(".nav-links");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");
  menu.classList.toggle("ri-close-large-line");
});

NavLink.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("left-[0]");
    menu.classList.toggle("ri-close-large-line");
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnIntraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,

  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
  },
});

if (window.innerWidth >= 760) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
  });

  sr.reveal("._data");
  sr.reveal("._data_scale", { scale: 0.5 });
  sr.reveal("._data_scale_sm", { scale: 2 });

  sr.reveal(".left_data", { origin: "left", distance: "400px" });
  sr.reveal(".right_data", { origin: "right", distance: "400px" });
  sr.reveal(".subs_data", {
    origin: "bottom",
    distance: "400px",
  });
}

window.onload = () => {
  document.querySelector(".loading-wrapper").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};
