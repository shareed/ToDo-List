
// Creates a variable for the elements using the Id attached to that element
//  gets the element from the HTML file that has the Id specified.

var addButton = document.getElementById("add-button");
var clearButton = document.getElementById("clear-completed-button");
var emptyListButton = document.getElementById("empty-button");
var saveListButton = document.getElementById("save-button")
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");






// ```Connects the button to a event listener```
addButton.addEventListener("click", addToDoItem);
clearButton.addEventListener("click", clearCompleted);
emptyListButton.addEventListener("click", emptyList );
saveListButton.addEventListener("click", saveList);

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    // creates a text node — a special container for text that you want to
    // put inside a HTML element using JavaScript — and fills it with the
    // contents of the itemText variable that is passed into the function.
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);
    // checks if the value for the completed variable that was passed to 
    // newToDoItem is true. If it is, then it will add the class completed 
    // to the li element, which will change how it looks on the page.
    if (completed) {
        toDoItem.classList.add("completed");
    }
    toDoList.appendChild(toDoItem);
    // attaches an event listener for a double-click to the toDoItem, and tells 
    // it to call a function named toggleToDoItemState in response.
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}


//get the text from the box and pass it to the newToDoItem function
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
    // Since a new to-do item is never complete, 
    // you can always pass false to the completed 
    // parameter of the newToDoItem function.
}


//To identify the item that was clicked, you’ll need
// to use a new JavaScript keyword: this.
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}






function clearCompleted() {
    alert("Clear Completed button clicked!");
}

function emptyList() {
    alert("Empty List button clicked!");

}

function saveList() {
    alert("Save button clicked!");

}




