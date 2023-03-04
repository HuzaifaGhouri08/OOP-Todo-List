 class TodoList {
    constructor() {
      this.tasks = [];
    }

    addTask(task) {
      this.tasks.push(task);
    }

    removeTaskByIndex(index) {
      this.tasks.splice(index, 1);
    }

    removeAllTasks() {
      this.tasks = [];
    }
  }

  let MyTodoList = new TodoList();

  let addButton = document.getElementById('btn');
  let inputField = document.getElementById('input');
  let tasks = document.getElementById('box');
  let removeButton = document.getElementById('rem');

  addButton.addEventListener('click', () => {
    let input = inputField.value;
    if (input === '') {
      alert('Please Enter Your Task.');
    } else {
      let li = document.createElement('li');
      li.textContent = input;
      tasks.appendChild(li);
      document.querySelector('li').style.animation = '1s text';

      let a = document.createElement('a');
      a.textContent = 'x';
      a.href = '#';
      a.className = 'remove';
      li.appendChild(a);
      removeButton.style.display = 'block';

      MyTodoList.addTask(input);
    }
    inputField.value = '';
    addButton.style.display = 'none';
  });

  inputField.addEventListener('input', () => {
    let val = inputField.value.trim();
    if (val === '') {
      addButton.style.display = 'none';
    } else {
      addButton.style.display = 'block';
    }
  });

  tasks.addEventListener('click', (e) => {
    let li = e.target.parentNode;
    if (li.nodeName === 'LI') {
      let index = Array.from(tasks.children).indexOf(li);
      MyTodoList.removeTaskByIndex(index);
      tasks.removeChild(li);
      if (tasks.childNodes.length === 0) {
        removeButton.style.display = 'none';
      }
    }
  });

  removeButton.addEventListener('click', () => {
    let section2 = document.getElementById('section2');
    section2.style.animation = '2s fadeout';

    section2.addEventListener(
      'animationend',
      () => {
        section2.style.animation = '';
        tasks.innerHTML = '';
        removeButton.style.display = 'none';
        MyTodoList.removeAllTasks();
      },
      { once: true }
    );
  });
