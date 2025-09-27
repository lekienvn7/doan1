document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    
    window.location.href = "./index.html";
  } else {
    alert("Vui lòng nhập đầy đủ email và mật khẩu");
  }
});
