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
    // Generate a unique ID for the task item
    var taskId = "task_" + todoItem.id;
    div.insertAdjacentHTML('beforeend', '<div class="darksoul-gradient-card-' + todoItem.color + '" id="' + taskId + '" draggable="true" ondragstart="drag(event)"><div class="card"><div class="header"><h5 class="' + todoItem.color + '">' + todoItem.platform + '</h5></div><div class="content"><h3>' + todoItem.task + '</h3><p>' + todoItem.description + '</p></div><div class="footer"><div class="date"><img width="25" height="25" src="https://img.icons8.com/sf-black-filled/64/' + todoItem.icon_color_code + '/calendar-plus.png" alt="calendar-plus"/><p>' + todoItem.date + '</p></div></div></div></div>');
    // Increment id for next task
    id++;
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
