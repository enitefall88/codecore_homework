const readline = require("readline");
const fs = require("fs");
const readlineInstance = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

let todoList = {
    todos: [],
    mainMenu: function () {
        console.log('(v) View | (n) New | (cX) Complete | (dX) Delete | (q) Quit ');
        readlineInstance.question('Choose your destiny...', (answer) => {
            switch (answer.trim()) {
                case 'v':
                    this.viewTodo();
                    break;
                case 'n':
                    this.addTodo();
                    break;
                case 'cX':
                    this.toggleCompleted();
                    break;
                case 'dX':
                    this.deleteTodo();
                    break;
                case 'q':
                    this.quitTodo();
                    break;
                default:
                    console.log("Enter a valid option");
                    this.mainMenu();
            }
        })
    },

    viewTodo: function () {
        if (this.todos.length === 0) {
            console.log('Todo-list is empty')
        };
        this.todos.forEach(element => {
            if (element.completed === true) {
                console.log(`[✓] ${element.todoText}`)
            } else {
                console.log(`[ ] ${element.todoText}`)
            }
        });
        this.mainMenu();
    },

    addTodo: function () {
        console.log('Please, type in your todo');
        readlineInstance.question('What?', answer => {
            if (answer) {
                this.todos.push({
                    todoText: answer,
                    completed: false,
                });
                this.mainMenu()
            };
        })

    },

    toggleCompleted: function (position) {
        readlineInstance.question('please choose your todo', answer => {
            this.todos[answer - 1].completed = !this.todos[answer - 1].completed;
            this.mainMenu();
        })

    },

    deleteTodo: function () {
        readlineInstance.question('Enter a number to delete a todo', answer => {
            this.todos.splice(parseInt(answer - 1), 1);
            this.mainMenu();
        })
    },

    quitTodo: function () {
        readlineInstance.close();
        console.log('Have a nice day!');
    }
}

todoList.mainMenu();