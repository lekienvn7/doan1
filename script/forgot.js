const loginBtn = document.getElementById("btn-login");
const completeText = document.querySelector(".complete-text");

loginBtn.addEventListener("click", () => {
  completeText.classList.add("active");
});
