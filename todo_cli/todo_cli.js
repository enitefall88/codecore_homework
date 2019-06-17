const readline = require("readline");
const fs = require("fs");
const readlineInstance = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

let todoList = {

mainMenu: function () {
console.log('\x1b[34m(v) View | (n) New | (cX) Complete | (dX) Delete | (q) Quit \x1b[0m');
releaseEvents.question('Choose your destiny...',(answer)=> {
  switch(answer.trim()) {
  case 'v':
      this.viewTodo();
      break;
      case  'n':
          this.addTodo();
          break;
          case 'cX':
              this.toggleCompleted();
              break;
              case 'dX':
              this.deleteTodo();
              break;
              case 'q':
                  quitTodo();
                  break;  
  }  
}
},   
    
}