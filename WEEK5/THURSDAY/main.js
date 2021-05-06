const password = "password";
let isOK = false;

const toDo = (evt) =>{
    if (input.value != ''){
        let control = input.value.toUpperCase();
        input.value =``;
        let canBeDone = contentControlList(control);
        if (canBeDone){
            let li = document.createElement(`li`);
            li.innerText = control;
            ul.appendChild(li);
            sortList();
        }//if contentControlList
    }//if input.value
}

const isUserValid = () =>{
    let userPassword = prompt(`what is your password`);
    return (userPassword == password) ? true : false;
}

const deleteLi = (e)=>{
    console.log(e);
}

function sortList() {
    let ul = document.querySelector(`ul`);
    Array.from(ul.getElementsByTagName("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
}

function contentControlList(pContent) {
    let ul = document.querySelector(`ul`);
    let ulList = Array.from(ul.getElementsByTagName("li"));
    if(ulList.length == 0)
    return true;
    let isOK = true;
    ulList.forEach(li=>{
        if(li.innerHTML == pContent)
        isOK = false;
    });
    return isOK;
}

let input = document.createElement(`input`);
input.classList.add('inputClass');
input.type = `text`;
input.id = `inputTd`;
let btn = document.createElement(`button`);
btn.innerText = `Button1`;
let ul = document.createElement(`ul`);
ul.innerText = 'MyList';
btn.addEventListener(`click`, toDo);

//ul.addEventListener(`click`,deleteLi(e));
while(!isOK){
    isOK = isUserValid();
}

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(ul);

const nameTheTarget = (evt)=>{
    console.log(evt.target.tagName);
    if(evt.target.tagName == `LI`){
        evt.target.remove();
        //ul.removeChild(evt.target);
    }
}
document.body.addEventListener('click', nameTheTarget);


