const slides = [...document.querySelectorAll(".slide")];
const dotsContainer = document.querySelector(".dots");
let current = 0;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (index === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Ir para a imagem ${index + 1}`);
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  document.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("active", i === current));
}

document.querySelector(".prev").addEventListener("click", () => showSlide(current - 1));
document.querySelector(".next").addEventListener("click", () => showSlide(current + 1));
setInterval(() => showSlide(current + 1), 4000);