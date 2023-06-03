const inp = document.getElementById('input-box');
const lstOfTasks = document.getElementById('lst-of-tasks');


function saveData(){
    localStorage.setItem("data", lstOfTasks.innerHTML);
}

function addTask(){
    if(inp.value == ''){
        alert("write something");
    }
    else{
        removeAlert();
        let li = document.createElement('li');
        li.innerHTML = inp.value;
        lstOfTasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inp.value = '';
    saveData();
}

lstOfTasks.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
        addAlert();
    }

},false);

function addAlert(){
    if(localStorage.getItem("data").length === 0){
        let divEle = document.createElement('div');
        divEle.innerHTML = `<img src="images/warning.png" alt="">
        <h2>There are no task have been added.</h2>
        <p>Please add the task!</p>`;
        divEle.setAttribute('class','message');
        let cntnt = document.getElementById('tasks')
        cntnt.appendChild(divEle);
    }

}

function removeAlert(){
    if(lstOfTasks.innerHTML.length === 0){
        let blck = document.querySelector(".message");
        blck.parentElement.removeChild(blck);
    }
}

function showTask(){
    lstOfTasks.innerHTML =localStorage.getItem("data");
}

addAlert();
showTask();