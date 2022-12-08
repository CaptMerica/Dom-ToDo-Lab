const inpEl = document.querySelector("#chores")
const btnElement = document.querySelector("#submit-button")
const ulElement = document.querySelector("#todo-list")



btnElement.addEventListener("click", function(evt){
  const li = document.createElement("li")
  li.textContent = inpEl.value 
  inpEl.value = ""
  ulElement.appendChild(li)
})

