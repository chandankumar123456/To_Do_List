function addToDo(){
    var taskInput = document.querySelector("#input-field");
    var taskList = document.querySelector(".taskList");

    var newTask = document.createElement("li");
    newTask.innerText = taskInput.value;

    taskList.appendChild(newTask);
    taskInput.value = '';

}

document.getElementById("input-field").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addToDo();
    }
});