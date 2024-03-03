const textarea = document.querySelector(".textarea");
const dateBox = document.querySelector(".date");

window.addEventListener("load", 초기화);
textarea.addEventListener("focus", borderOff);
textarea.addEventListener("blur", borderOn);
textarea.addEventListener("keyup", resetDate);

function 초기화() {
  const date = new Date();
  dateBox.textContent = date.toString();

  textarea.focus();
}

function borderOff() {
  textarea.style.border = "none";
}

function borderOn() {
  if (textarea.textContent !== "") {
    return;
  }

  textarea.style.border = "1px solid";
}

function resetDate() {
  const date = new Date();
  dateBox.textContent = date.toString();
}
