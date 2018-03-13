const textarea = document.getElementById("textInput")
const h1 = document.querySelector(".main_text_container h1")

const h1Timeout = 1000 * parseFloat(
  window.getComputedStyle(h1)
  .getPropertyValue("transition-duration")
  .replace('s', '')
)

window.onload = () => {
  textarea.focus()
}

textarea.addEventListener("keyup", () => {
  if(textarea.value) {
    h1.style.opacity = 0
    setTimeout(() => {
      h1.style.display = 'none'
    }, h1Timeout)
  } else {
    h1.style.opacity = 100
    setTimeout(() => {
      h1.style.display = 'inline-block'
    }, h1Timeout)
  }
})