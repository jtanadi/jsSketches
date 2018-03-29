const contentInput = document.getElementById("rawContent"); 
const regexInput = document.getElementById("regexInput"); 


document.querySelector("input[type='button']").addEventListener("click", () =>{
  let arrToWrite = filterRegEx(paragraphsToArray(contentInput.value, false), regexInput.value);

  document.querySelector("#output").value = arrToWrite.join("\n\n");
});