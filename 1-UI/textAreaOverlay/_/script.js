const textarea = document.getElementById("textInput")
const h1 = document.querySelector(".main_text_container h1")

textarea.addEventListener("keyup", () => {
  if(textarea.value) {
    h1.style.display = "none"
  } else {
    h1.style.display = "inline-block"
  }
})