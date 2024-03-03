const textarea = document.querySelector(".textarea");
const dateBox = document.querySelector(".date");

const date = new Date();
dateBox.textContent = date.toString();

window.addEventListener("load", focusTextarea);
textarea.addEventListener("focus", borderOff);
textarea.addEventListener("blur", borderOn);

function focusTextarea() {
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
