const loginBtn = document.getElementById("btn-login");
const completeText = document.querySelector(".complete-text");

loginBtn.addEventListener("click", function (e) {
  completeText.classList.add("active");
  e.preventDefault();
});
