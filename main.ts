#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

let todos = [];
console.log(chalk.blueBright.bold("\n \t welcome to 'codewithQurathameed' - updated todo-list App \t \n") );

 let condition = true;

 while(condition){
 let addTask = await inquirer.prompt(
     [
         {
             name: "todo",
             type: "input",
             message: chalk.yellowBright("what you want to add in your todos?")

         },
          {
             name: 'addmore',
             type: "confirm",
             message: chalk.cyanBright('Do you want to add more?'),
             default: "false"


         },
      
    ]

 );
 //console.log(addtask.todo);

 todos.push(addTask.todo);
 condition = addTask.addmore;
 console.log(todos)

 } 
 let Condition = true;
async function CreateTodo(todos:String[]) {
 do {
     let ans = await inquirer.prompt({
      name: 'select',
      type: 'list',
      message: chalk.yellowBright("select an operation"),
      default: 'true',
      choices: ["add","update","view","delet","Exit"],

      });
      if (ans.select == "Exit"){
        condition = false;
        console.log(todos);
      }
      if (ans.select == "add"){
        let addtodo = await inquirer.prompt({
        name: "todo",
        type: "input",
        message: chalk.yellowBright("add item"),
        });
        todos.push(addtodo.todo);
        console.log(todos);
      }
     if (ans.select == "update"){
       let updatetodo =  inquirer.prompt({
        name: "todo",
        type: 'list',
        message: chalk.yellowBright("select item for update"),
        choices: ['todos.map((item) => item)'],
    });
    let addtodo =  await inquirer.prompt({
      name: "todo",
      type: "input",
      message: "add item",
    });
let newtodos = todos.filter((val) => val !== 'updatetodo.todo');
todos = [...newtodos,addtodo.todo];
console.log(todos);

     }
     if(ans.select == "view") {
      console.log(todos);
     }
if(ans.select == "delet") {
  let delettodo = await inquirer.prompt({
     name: "todo",
     type: "list",
     message: chalk.yellowBright("select item for delet"),
     choices: ['todos.map((item) => item)'],
  });
  let newtodo = todos.filter((val) => val !== delettodo.todo);
  todos = [...newtodo];
  console.log(todos);
 } 

} while (condition);
}
CreateTodo(todos);