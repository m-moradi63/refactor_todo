import { load_from_storage } from "./api/api.js"
import { RenderList } from "./dom.js"
import { Events  } from "./events.js"
import { reset } from "../store.js";



//Reload--------------
function init(){
    load_from_storage().then((data)=>{
        reset (data)
        RenderList()

      
    })
    Events()
    


}

init()
