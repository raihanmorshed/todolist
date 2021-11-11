function addItem(event){
    event.preventDefault(); //stops refreshing by default
    let text = document.getElementById("todo-input");
    console.log(text.value);
}