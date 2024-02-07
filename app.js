function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskText = taskInput.value.trim();

  if (taskText !== '') {
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.innerHTML = '<input type="checkbox" onchange="toggleTask(this)"> ' + 
                   '<span></span>' +
                   '<button onclick="editTask(this)">Editar</button>' +
                   '<button onclick="deleteTask(this)">Eliminar</button>';
    taskList.appendChild(li);
    updateTaskText(li, taskText);
    taskInput.value = '';
  }
}

function deleteTask(element) {
  var li = element.parentNode;
  li.parentNode.removeChild(li);
}

function editTask(button) {
  var li = button.parentNode;
  var span = li.querySelector('span');
  var newText = prompt('Editar tarea:', span.innerText);

  if (newText !== null) {
    updateTaskText(li, newText);
  }
}

function toggleTask(checkbox) {
  var li = checkbox.parentNode;
  var span = li.querySelector('span');
  var deleteButton = li.querySelector('button');

  if (checkbox.checked) {
    li.classList.add('completed');
    deleteButton.disabled = true;
    checkbox.disabled = true; // Deshabilitar la casilla de verificación
  } else {
    li.classList.remove('completed');
    deleteButton.disabled = false;
    // Permitir desmarcar solo si la tarea no ha sido editada
    var editButton = li.querySelector('button:nth-child(2)');
    if (!editButton.disabled) {
      checkbox.disabled = false; // Habilitar la casilla de verificación
    }
  }
}


function updateTaskText(li, newText) {
  var span = li.querySelector('span');
  span.innerText = newText;
  var checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.checked = false;
  checkbox.disabled = false;
  var deleteButton = li.querySelector('button');
  deleteButton.disabled = false;
}
