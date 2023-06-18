console.log("js file started");

//Initially employee array(done)
//(done)creating a function zero to show 0 employeees added if the array is empty
//(done) Add user function
//show function
//delete event listener in show function
//Add Local Storage 

let arr=[];
let id=0;
let addButton=document.getElementsByClassName("addUser")[0];
let viewContainer= document.getElementsByClassName("viewContainer")[0];
let successContainer= document.getElementsByClassName("SuccessMessage")[0];
let errorContainer= document.getElementsByClassName("ErrorMessage")[0];
console.log(addButton,viewContainer,successContainer,errorContainer);
function zero(){
    if(arr.length==0){
        viewContainer.innerHTML='';
        let message=document.createElement('p');
        message.className='default';
        message.innerText='You have 0 Employees';
        viewContainer.append(message);
    }
}
zero();

addButton.addEventListener('click',addUser);
function addUser(){
    let name=document.getElementById("Name").value;
    let profession=document.getElementById("Profession").value;
    let age=document.getElementById("Age").value;
    console.log(name,profession,age);

    // Validation
    if(!name || !profession || !age){
        let error=document.createElement('p');
        error.className='ErrorMessage';
        error.innerText="Error: Please make sure that All the fields are filled before adding an Employee";
        errorContainer.innerHTML='';
        successContainer.innerHTML='';
        errorContainer.append(error);
        setTimeout(()=>{
            error.remove();
        },3000);
        return;
    }
    let Success=document.createElement('p');
    Success.className='SuccessMessage';
    Success.innerText="Success: Congo Employee Added";
    errorContainer.innerHTML='';
    successContainer.innerHTML='';
    successContainer.append(Success);
    setTimeout(()=>{
        Success.remove();
    },3000);
    id=id+1;
    let info=document.createElement("div");
    info.className='info';
    info.innerHTML=`<div class="id">${id}.</div>
    <div class="name">Name:${name}</div>
    <div class="profession">Profession:${profession}</div>
    <div class="age">Age:${age}</div>
    `
    arr.push(info);
    show();
    zero();
}



function show(){
    viewContainer.innerHTML='';

    arr.forEach(element=>{
        let viewFlex=document.createElement('div');
        viewFlex.className='viewFlex';
        viewFlex.append(element);
        let DeleteContainer=document.createElement('div');
        let DeleteButton=document.createElement('button');
        DeleteButton.className='deleteButton';
        DeleteButton.innerText='Delete User'
        
        DeleteButton.addEventListener('click',()=>{
            arr=arr.filter(item=>item!=element);
            show();
            zero();
        })
        DeleteContainer.append(DeleteButton);
        viewFlex.append(DeleteContainer);
        viewContainer.append(viewFlex);

    })
}
