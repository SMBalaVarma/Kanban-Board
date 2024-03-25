// Drag & Drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// Modal
var m = document.getElementById("darksoul-modal");

function modal() {
    m.style.display = "flex";
}

function modalclose() {
    m.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == m) {
        m.style.display = "none";
    }
}

var preview = document.getElementById("preview");
var color = "purple";
var icon_color_code = "BFBFFC";

function purple() {
    preview.setAttribute('Class', 'purple');
    color = "purple";
    icon_color_code = "BFBFFC";
}

function grey() {
    preview.setAttribute('Class', 'grey');
    color = "grey";
    icon_color_code = "DFDFDF";
}

function green() {
    preview.setAttribute('Class', 'green');
    color = "green";
    icon_color_code = "CFF2A5";
}

function blue() {
    preview.setAttribute('Class', 'blue');
    color = "blue";
    icon_color_code = "BFD3FC";
}

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let getday = weekday[d.getDay()];

var test = document.getElementById("test");
var todo_col = document.getElementById("todo-col");
var id = 5;

document.querySelector('.darksoul-form').addEventListener('submit', function() {
    var div = document.getElementById("div1");
    var platform = document.getElementById("platform").value;
    var task = document.getElementById("task").value;
    var description = document.getElementById("description").value;

    // Save data to local storage
    var todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    var todoItem = {
        id: id,
        platform: platform,
        task: task,
        description: description,
        color: color,
        icon_color_code: icon_color_code,
        date: d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getUTCFullYear()
    };
    todoList.push(todoItem);
    localStorage.setItem('todoList', JSON.stringify(todoList));

    // Append new item to the DOM
    appendTodoItem(todoItem);

    id = id + 1;
    return false;
});

// Function to append todo item to the DOM
function appendTodoItem(todoItem) {
    var div = document.getElementById("div1");
    div.insertAdjacentHTML('beforeend', '<div class="darksoul-gradient-card-' + todoItem.color + '" id="' + todoItem.id + '" draggable="true" ondragstart="drag(event)"><div class="card"><div class="header"><h5 class="' + todoItem.color + '">' + todoItem.platform + '</h5></div><div class="content"><h3>' + todoItem.task + '</h3><p>' + todoItem.description + '</p></div><div class="footer"><div class="date"><img width="25" height="25" src="https://img.icons8.com/sf-black-filled/64/' + todoItem.icon_color_code + '/calendar-plus.png" alt="calendar-plus"/><p>' + todoItem.date + '</p></div></div></div></div>');
}

// Function to load todo items from local storage
function loadTodoItems() {
    var todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    todoList.forEach(function(todoItem) {
        appendTodoItem(todoItem);
    });
}

// Load todo items when the page loads
loadTodoItems();




// // // --------------------------------dark and light effects ------------------
        // var bod = document.getElementById("bod");
        // var disclaimer = document.getElementById("disclaimer");
        // var heading = document.getElementsByTagName("h4");
        // var plus = document.getElementById("plus");
        // var card = document.getElementsByClassName("card");
        // var tasktitle = document.getElementsByTagName("h3");
        // var taskdesc = document.getElementsByTagName("p");
        // var gradient_purple = document.getElementsByClassName("darksoul-gradient-card-purple");
        // var gradient_grey = document.getElementsByClassName("darksoul-gradient-card-grey");
        // var gradient_blue = document.getElementsByClassName("darksoul-gradient-card-blue");
        // var gradient_green = document.getElementsByClassName("darksoul-gradient-card-green");
        // var modal_content = document.getElementsByClassName("darksoul-modal-content");
        // var modal_close_btn = document.getElementsByClassName("modal-close-btn");
        // var modal_submit_btn = document.getElementsByClassName("darksoul-button2");
        // var modal_submit_btn_glow = document.getElementsByClassName("darksoul-glowing-button2");
        // var flag = 0;
       

        // function roll() 
        // {
        //     if(flag==0)
        //     {bod.style.backgroundColor = "rgb(253, 253, 253)"; 
        //         disclaimer.style.color = "black";
        //         heading[0].style.color = "black";
        //         heading[1].style.color = "black";
        //         heading[2].style.color = "black";
        //         plus.src = "https://img.icons8.com/sf-black-filled/64/000000/plus.png";
        //         modal_content[0].style.backgroundColor = "white";
        //         modal_content[0].style.color = "black";
        //         modal_close_btn[0].style.backgroundImage = "url('https://img.icons8.com/external-creatype-glyph-colourcreatype/64/000000/external-close-essential-ui-v4-creatype-glyph-colourcreatype.png')";
        //         modal_submit_btn[0].style.backgroundColor = "white";
        //         modal_submit_btn[0].style.color = "black";
        //         modal_submit_btn_glow[0].style.background = "linear-gradient(var(--gradient-angle), rgb(255, 255, 255), rgb(0, 0, 0))";
        //         for(let i=0; i<card.length; i++)
        //         {
        //             card[i].style.backgroundColor = "white";
        //         }
        //         for(let j=0; j<tasktitle.length; j++)
        //         {
        //             tasktitle[j].style.color = "black";
        //         }
        //         for(let k=0; k<taskdesc.length; k++)
        //         {
        //             taskdesc[k].style.color = "black";
        //         }
        //         for(let k=0; k<gradient_purple.length; k++)
        //         {
        //             gradient_purple[k].style.background = "linear-gradient(var(--gradient-angle),white, rgb(191, 191, 252))";
        //         }
        //         for(let k=0; k<gradient_grey.length; k++)
        //         {
        //             gradient_grey[k].style.background = "linear-gradient(var(--gradient-angle),white, rgb(223, 223, 223))";
        //         }
        //         for(let k=0; k<gradient_blue.length; k++)
        //         {
        //             gradient_blue[k].style.background = "linear-gradient(var(--gradient-angle),white, rgb(191, 211, 252))";
        //         }
        //         for(let k=0; k<gradient_green.length; k++)
        //         {
        //             gradient_green[k].style.background = "linear-gradient(var(--gradient-angle),white, rgb(207, 242, 165))";
        //         }
        //         flag = 1;
        //     }
        //     else
        //     {
        //         bod.style.backgroundColor = "rgb(18, 18, 18)"; 
        //         disclaimer.style.color = "white";
        //         heading[0].style.color = "white";
        //         heading[1].style.color = "white";
        //         heading[2].style.color = "white";
        //         plus.src = "https://img.icons8.com/sf-black-filled/64/FFFFFF/plus.png";
        //         modal_content[0].style.backgroundColor = "black";
        //         modal_content[0].style.color = "white";
        //         modal_close_btn[0].style.backgroundImage = "url('https://img.icons8.com/external-creatype-glyph-colourcreatype/64/ffffff/external-close-essential-ui-v4-creatype-glyph-colourcreatype.png')";
        //         modal_submit_btn[0].style.backgroundColor = "black";
        //         modal_submit_btn[0].style.color = "white";
        //         modal_submit_btn_glow[0].style.background = "linear-gradient(var(--gradient-angle), rgba(255, 255, 255), rgb(0, 0, 0, 0))";
        //         for(let i=0;i<card.length;i++)
        //         {
        //             card[i].style.backgroundColor = "rgba(0, 0, 0, 0.852)";
        //         }
        //         for(let j=0; j<tasktitle.length; j++)
        //         {
        //             tasktitle[j].style.color = "white";
        //         }
        //         for(let k=0; k<taskdesc.length; k++)
        //         {
        //             taskdesc[k].style.color = "white";
        //         }
        //         for(let k=0; k<gradient_purple.length; k++)
        //         {
        //             gradient_purple[k].style.background = "linear-gradient(var(--gradient-angle),black, rgb(191, 191, 252))";
        //         }
        //         for(let k=0; k<gradient_grey.length; k++)
        //         {
        //             gradient_grey[k].style.background = "linear-gradient(var(--gradient-angle),black, rgb(223, 223, 223))";
        //         }
        //         for(let k=0; k<gradient_blue.length; k++)
        //         {
        //             gradient_blue[k].style.background = "linear-gradient(var(--gradient-angle),black, rgb(191, 211, 252))";
        //         }
        //         for(let k=0; k<gradient_green.length; k++)
        //         {
        //             gradient_green[k].style.background = "linear-gradient(var(--gradient-angle),black, rgb(207, 242, 165))";
        //         }
        //         modal_content[0].style.backgroundColor = "black";
        //         modal_content[0].style.color = "white";
        //         flag = 0;
        //     }
        // }
       