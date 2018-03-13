const textarea = document.getElementById("textInput")
const h1 = document.querySelector(".main_text_container h1")

window.onload = () => {
  textarea.focus()
}

textarea.addEventListener("keyup", () => {
  if(textarea.value) {
    h1.style.opacity = 0
  } else {
    h1.style.opacity = 100
  }
})

textarea.addEventListener("focusin", () => {
  if(textarea.value) {
    h1.style.opacity = 0
  }
})

textarea.addEventListener("focusout", () => {
  h1.style.opacity = 100
})