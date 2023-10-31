import { todo_list } from "./store.js";
const my_list = "todos"
const draftStorageKey = "draft"
function syncSrorage() {
    
    const next_list = JSON.stringify(todo_list)
    localStorage.setItem("my_list", next_list) 
}
const newStorage = ""
function updateDraft(e){
  console.log(e.key)
  const olStorage= localStorage.getItem("draftStorageKey" ) || ""
  const newStorage = olStorage + e.key
  localStorage.setItem("draftStorageKey", newStorage) 

 
  
}

export {syncSrorage , updateDraft   }