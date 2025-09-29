if (localStorage.getItem("isLoggedIn") === "true") {
  const btn = document.querySelector(".button-login");
  const menu = document.querySelector(".menu-btn");
  btn.innerHTML = '<i class="fa-regular fa-circle-user"></i>';
  btn.classList.add("logged-btn");
  menu.classList.add("active");
  const divbtn = document.querySelector(".btn");
  divbtn.classList.add("logged-divbtn");
  btn.onclick = () => {
    window.location.href = "./profile.html";
  };
}
document.querySelector(".btn-logout").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  window.location.reload();
});
