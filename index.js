class TodoList {
  constructor() {
    this.addButton = document.getElementById('btn');
    this.inputField = document.getElementById('input');
    this.tasks = document.getElementById('box');
    this.removeButton = document.getElementById('rem');

    this.addButton.addEventListener('click', () => this.addTask());
    this.inputField.addEventListener('input', () => this.showButton());
    this.tasks.addEventListener('click', (e) => this.removeSpecificTask(e));
    this.removeButton.addEventListener('click', () => this.removeAllTasks());
  }

  showButton() {
    let val = this.inputField.value.trim();
    if (val === '') {
      this.addButton.style.display = 'none';
    } else {
      this.addButton.style.display = 'block';
    }
  }

  addTask() {
    document.getElementById('section2').style.animation = '1s slidein';
    let input = this.inputField.value;
    if (input === '') {
      alert('Please enter your task.');
    } else {
      let li = document.createElement('li');
      li.textContent = input;
      this.tasks.appendChild(li);
      document.querySelector('li').style.animation = '1s text';

      let a = document.createElement('a');
      a.textContent = 'x';
      a.href = '#';
      a.className = 'remove';
      li.appendChild(a);
      this.removeButton.style.display = 'block';
    }
    this.inputField.value = '';
    this.addButton.style.display = 'none';
  }

  removeSpecificTask(e) {
    let li = e.target.parentNode;
    if (li.nodeName === 'LI') {
      this.tasks.removeChild(li);
      if (this.tasks.childNodes.length === 0) {
        this.removeButton.style.display = 'none';
      }
    }
  }

  removeAllTasks() {
    document.getElementById('section2').style.animation = '2s fadeout';
    let animation = setTimeout(() => {
      this.tasks.innerHTML = '';
      this.removeButton.style.display = 'none';
    }, 2000);
  }
}

let MyTodoList = new TodoList();