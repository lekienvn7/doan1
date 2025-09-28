const loginBtn = document.querySelector("form");
const completeText = document.querySelector(".complete-text");

loginBtn.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = document.getElementById("email").value;

  if (btn) {
    completeText.classList.add("active");
  } else {
    alert("Vui lòng nhập đầy đủ email");
  }
});
