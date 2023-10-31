


function load_from_storage(){
    const todos_list_api = "https://jsonplaceholder.typicode.com/todos"

    return fetch(todos_list_api).then((response)=>{
        console.log(response)
        return response.json()
    }).then((data)=>{
        return data
       
            
       
    })
    /* const ListFromStorage = JSON.parse(localStorage.getItem("my_list")) || []
    reset(ListFromStorage)
    RenderList() */
 
}
export {load_from_storage}