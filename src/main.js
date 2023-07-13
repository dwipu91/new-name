



const todoButton = document.querySelector(".todo .newTodo button")
const todoInput = document.querySelector(".todo .newTodo input")
const todoList = document.querySelector(".todo ul")


//          show todos data         
const shwoTodoData =    ()  =>{

    localStorage
    let content = ""

    data.reverse().forEach((item, index)  =>  {
        content +=  `<li>
                <p>
                    <i class="fa fa-check"> </i>  
                    ${item} 
                </p>
                <button onclick="deLete('${item}')" > 
                    <i class="fa fa-trash" aria-hidden="true"></i> 
                </button>
            </li>`
    })
    todoList.innerHTML = content;
}
shwoTodoData()


//           onclick test the valu servie       

todoButton.onclick = ()=>{
    const newTodo = todoInput.value;

    if(newTodo){
        data.push(newTodo);
        todoInput.value = ""    ;
    }else{
        alert("Don't enter emty value")
    }
    shwoTodoData()
}



//              delete todo controler       =>>



// function deLete(item){
//     const updateData = data.filter((data)=> data != item);
//     data = updateData;
//     shwoTodoData()
// }
 

function deLete(item) {
    const deleteeder = data.filter(data => data != item)
    data = deleteeder;
    shwoTodoData()

}