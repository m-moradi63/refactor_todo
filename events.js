import {  onAddItem , filterSelect , onKlick } from "./functionality.js";



const todo_forms = document.querySelector("#todo_form") ;
const filterse = document.querySelector("#filters")
const todoInput = document.querySelector("#title")
function Events(){
    /* save_button.addEventListener("click" , onAddItem) */
    /* todo_forms.addEventListener("submit", onAddItem) */
   todo_forms.addEventListener("submit", (eve)=>{
    eve.preventDefault()
    console.log("form sent")
    onAddItem()
}) 
   filterse.addEventListener("change" , ()=>{
      
        filterSelect(filterse.value)
        
      })
    
      todoInput.addEventListener("keyup" , onKlick)
      
      
    
}
export {Events , todoInput}