document.addEventListener('DOMContentLoaded', () =>{
 let form= document.querySelector('form')
 form.addEventListener('submit',(e)=>{e.preventDefault()
let val= e.target['new-task-description'].value
let newTaskNode= document.createElement('li')
newTaskNode.textContent= val
let taskList = document.getElementById('tasks')
taskList.appendChild(newTaskNode)
form.reset()
deleteNode = document.createElement('button')
deleteNode.textContent= 'x'
newTaskNode.append(deleteNode)
deleteNode.addEventListener('click',(e) =>{
  newTaskNode.remove()
}
)



})
})









































/*
//event listener - waits for the dom to load before engaging in the js 
document.addEventListener("DOMContentLoaded", () => {

    //1. grab the form abd assign to cosnt 
  const form= document.getElementById('create-task-form')
  //document.querySelector('#create-task-form)
  //document.querySelector("form")

  //addEventListener- take 1. the event, 2. the callback 
  //we perform this function bc we want to prevent the default action which woudld redirect to a new link 
  form.addEventListener('submit', function(e){
    e.preventDefault();

    //get the value
    //we need the brackets in this form because the name contains dashes and that is reserved for subtraction in js
    //let newTaskName= 'new-task-description'
    //let val = e.target[newTaskName].value 
    let val = e.target['new-task-description'].value
    let priority = e.target.priority.value

    //check if val is an empty string
    if(val !==''){

    //put things in the DOM
    //1. create element 
    //2. put something in the element we created
    //3.append the element to something that alreayd exists 
      //1. get the element that alrdy exists 
      //2.append new node to said element

    let newTaskNode= document.createElement('li')
    newTaskNode.innerText = val 
    let priorityColors = {
      high: 'red',
      medium: 'yellow',
      low: 'green'


    }
    console.log(newTaskNode);
    let taskList = document.querySelector('#tasks')
    taskList.appendChild(newTaskNode);

    form.reset();

    //create delete button 
    let deleteNode = document.createElement('button');
    deleteNode.textContent= 'delete'
    newTaskNode.append(deleteNode);

    deleteNode.addEventListener('click', function(e){
      //actual removal of list element
      //taskList.removeChild(newTaskNode)
      newTaskNode.remove()
    })
const addNewTask= function(e){

}
const createDropDown= function(){
  const form= document.getElementById('create-task-form')
  let selectNode= document.createElement('select')
  form.append(selectNode)
  let optionHigh= document.createElement('option')
  optionHigh.innerText='high'
  let optionMed= document.createElement('option')
  optionMed.innerText='medium'
  let optionLow= document.createElement('option')
optionLow.innerText= 'low'
}
}})
})
*/