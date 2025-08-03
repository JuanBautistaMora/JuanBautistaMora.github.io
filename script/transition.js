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
    const inner = card.querySelector('.flip-inner');

    gsap.fromTo(inner,
      { rotateY: 0 },
      {
        rotateY: 180,
        scrollTrigger: {
          trigger: card,
          start: "top 30%",
          end: "center center",
          scrub: true,
        }
      }
    );
  });
}
