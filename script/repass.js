const form = document.querySelector("form");
const completeText = document.querySelector(".complete-text");
const notsamepass = document.querySelector(".not-samepass");
const lesstype = document.querySelector(".less-type");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const pass = document.getElementById("password").value;
  const repass = document.getElementById("repass").value;

  if (pass.length < 8) {
    lesstype.classList.add("active");
    if (pass && repass && pass === repass) {
      completeText.classList.add("active");
      notsamepass.classList.add("unactive");
    }
  } else {
    notsamepass.classList.add("active");
  }
});
