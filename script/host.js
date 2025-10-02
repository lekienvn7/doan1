const resetBtn = document.querySelector(".find-reset");
const findID = document.getElementById("idfind");
const findSub = document.getElementById("subfind");
const findTeacher = document.getElementById("teacherfind");
const findRoom = document.getElementById("roomfind");

resetBtn.addEventListener("click", function () {
  findID.value = "";
  findSub.value = "";
  findTeacher.value = "";
  findRoom.value = "";
});
