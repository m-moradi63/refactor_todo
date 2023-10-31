import {  todo_list } from "./store.js";
import { syncSrorage , updateDraft } from "./storage.js";
import { RenderItem , RenderList, list} from "./dom.js";
const input_title = document.querySelector("#title");
const filterse = document.querySelector("#filters")





function toggleStatus(title){
    for (let i=0 ; i<todo_list.length; i++){
        const list_item = todo_list[i]
         if(list_item.title===title){
            list_item.status =   list_item.status ? false : true 
            
         }
         
         syncSrorage()
       }
}
function clear_input(){
    input_title.value = "";
}
function addItem(item){
    const next_item = {
        title : item.title,
        status : item.status
      } 
      todo_list.push(next_item)
      syncSrorage()
}
function Donefunc(item){
    todo_list.filter((item) , ()=>{
         return item.status===true
    })
        
    }
function remove(title){
    for (let i=0 ; i<todo_list.length; i++){
        const list_item = todo_list[i]
         if(list_item.title===title){
            todo_list.splice(i,1)
            
         }
         
         syncSrorage()
         RenderList()
       }
}
function onAddItem(){
    const val = input_title.value  
    if (val===""){
        alert("you should input no null")
    }else{
       const item = {
        title:val,
        status:false
       }
      addItem(item)
      RenderItem(item)
      clear_input()

    }
}   
function filterSelect(events){
    
    list.innerHTML=""
        if(events === "done"){
            console.log(events)
            for (let i=0 ; i<todo_list.length; i++){
               if(todo_list[i].status===true){
                RenderItem(todo_list[i])
               }
            }
            
        }else 
            if(events === "todo"){
                console.log(events)
                for (let i=0 ; i<todo_list.length; i++){
                   if(todo_list[i].status===false){
                    RenderItem(todo_list[i])
                   } 
                } 
            
                }
            else{
                    if(events === "all"){
                    console.log("events")
                    RenderList()} 
                
                    }
                
                    
                
                
            } 
function onKlick(e){
    updateDraft(e)
}

export {toggleStatus , addItem ,Donefunc , remove , onAddItem ,filterSelect , onKlick}