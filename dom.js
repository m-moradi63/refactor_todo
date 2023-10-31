import {  todo_list } from "./store.js";
import {  toggleStatus , remove } from "./functionality.js";
const list = document.querySelector(".list"); 
 function RenderItem(todoItem){
   
  const Item = document.createElement("div");
      Item.classList.add("form")
     
      const checkbox = document.createElement("input")
      checkbox.setAttribute("type" , "checkbox")
      if(todoItem.status){
        checkbox.checked = todoItem.status
      }
      
      
      const span = document.createElement("span")
      span.textContent = todoItem.title
      
      const delet = document.createElement("button")
      delet.classList.add("delet_btn")
      delet.textContent= "DELET"
      
      Item.appendChild(checkbox)
      Item.appendChild(span)
      Item.appendChild(delet)
      list.appendChild(Item)

      
     
      
      delet.addEventListener("click" , ()=>{ 
        remove(todoItem.title)
        
     })

      checkbox.addEventListener("click" , ()=>{
       toggleStatus(todoItem.title)
       console.log(todo_list)
      })
      
}
function RenderList(){
  list.innerHTML=""
  
   for (let i = 0 ; i< todo_list.length ; i++){
       const titlee = todo_list[i]
       RenderItem(titlee)
}
}
export {RenderItem , RenderList , list}