const container = document.querySelector(".classbasic");
document.querySelector(".scroll-btn.left").onclick = () => {
  container.scrollBy({ left: -200, behavior: "smooth" });
};
document.querySelector(".scroll-btn.right").onclick = () => {
  container.scrollBy({ left: 200, behavior: "smooth" });
};

let scrollInterval;

function startScroll(direction) {
  stopScroll();
  scrollInterval = setInterval(() => {
    container.scrollBy({ left: direction * 10, behavior: "auto" });
  }, 2);
}
function stopScroll() {
  clearInterval(scrollInterval);
}

const leftBtn = document.querySelector(".scroll-btn.left");
leftBtn.addEventListener("mousedown", () => startScroll(-1));
leftBtn.addEventListener("mouseup", stopScroll);
leftBtn.addEventListener("mouseleave", stopScroll);

const rightBtn = document.querySelector(".scroll-btn.right");
rightBtn.addEventListener("mousedown", () => startScroll(1));
rightBtn.addEventListener("mouseup", stopScroll);
rightBtn.addEventListener("mouseleave", stopScroll);
