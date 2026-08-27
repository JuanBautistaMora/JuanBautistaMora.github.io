const glow = document.getElementById("glow");
const grid = document.getElementById("gridlines");
window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100 + "%";
  const y = (e.clientY / window.innerHeight) * 100 + "%";
  glow.style.setProperty("--x", x);
  glow.style.setProperty("--y", y);
  grid.style.setProperty("--x", x);
  grid.style.setProperty("--y", y);
});
document.getElementById("year").textContent = new Date().getFullYear();
