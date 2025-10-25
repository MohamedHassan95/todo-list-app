const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("You Must Write Something!")
    }else{
        // make li Element and put it into list container
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //make X mark in a span to delete the task 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" ;
        li.appendChild(span);
    }
    //Remove input value after click on Add
    inputBox.value = '';
    saveData();
}




//Check , uncheck and remove tasks from list
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false);



// savedata in local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


//showdata when reload the page
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()