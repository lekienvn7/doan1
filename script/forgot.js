const loginBtn =
  document.getElementById(
    "btn-login"
  ); /* Lấy button của file forgot.html qua id */
const completeText =
  document.querySelector(
    ".complete-text"
  ); /* Lấy div chứa chữ thông báo bằng class complete-text */

loginBtn.addEventListener("click", () => {
  completeText.classList.add("active");
});
