gsap.registerPlugin(ScrollTrigger);

const circles = document.querySelectorAll("#scatter-bg circle");
const texts = document.querySelectorAll("#scatter-bg text");

circles.forEach((circle, i) => {
  const dir = i % 2 === 0 ? 1 : -1;

  gsap.fromTo(
    circle,
    {
      x: dir * 200,
      y: 0,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".scatter-transition",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      }
    }
  );

  const text = texts[i];
  if (text) {
    gsap.fromTo(
      text,
      {
        x: dir * 200,
        y: 0,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".scatter-transition",
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        }
      }
    );
  }
});



applyMobileCirclePositions();


if (window.innerWidth <= 768) {
  const cards = document.querySelectorAll('.flip-card');

  cards.forEach((card) => {
    // Gira cuando se scrollea
    ScrollTrigger.create({
      trigger: card,
      start: "top 70%",
      end: "center center",
      toggleClass: { targets: card, className: "scroll-flip" },
      once: false,
    });

    // Si ya está girada, se revierte al tocar
    card.addEventListener("click", () => {
      if (card.classList.contains("scroll-flip")) {
        card.classList.remove("scroll-flip");
      }
    });
  });
}
