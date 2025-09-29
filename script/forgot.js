const loginBtn = document.querySelector(".forgot");
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

completeText.addEventListener("click", function (e) {
  e.preventDefault();
  const repassContainer = document.querySelector(".repass-container");
  const forgotContainer = document.querySelector(".forgot-container");

  forgotContainer.style.opacity = 0;
  repassContainer.style.display = "flex";

  setTimeout(() => {
    forgotContainer.style.display = "none";
    repassContainer.style.opacity = 1;
  }, 1);
});

const noticeText = document.querySelector(".notice-text");
const formRepass = document.querySelector(".repass");
const pass = document.getElementById("password");
const repass = document.getElementById("repass");
const completeTextRepass = document.querySelector(
  ".complete-repass .complete-text"
);

formRepass.addEventListener("submit", function (e) {
  e.preventDefault();

  const passValue = pass.value;
  const repassValue = repass.value;

  noticeText.classList.remove("active");
  completeTextRepass.classList.remove("active");

  if (passValue.length < 8) {
    noticeText.textContent = "Mật khẩu cần tối thiểu 8 ký tự.";
    noticeText.classList.add("active");
  } else if (passValue !== repassValue) {
    noticeText.textContent = "Mật khẩu không trùng khớp.";
    noticeText.classList.add("active");
  } else {
    completeTextRepass.classList.add("active");
  }
});

noticeText.addEventListener("click", function () {
  pass.value = "";
  repass.value = "";
  noticeText.classList.remove("active");
});
