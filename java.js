/*const ul = document.querySelector('.items')

ul.firstElementChild.textContent = 'hello'
ul.children[1].innerText = 'brad'
//ul.lastElementChild.remove()
ul.lastElementChild.innerHTML = '<h1>hello world</h1>'
//ul.remove()*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {  
    e.preventDefault('');

    if(nameInput.value === '' ||  emailInput.value === '' ) {
        msg.classList.add('error');
        msg.innerHTML = 'please fill all fields';

        setTimeout(() => msg.remove(), 3000);
        
    }     else{

        const li = document.createElement('li');
        li.appendChild(document.createTextNode
            (`${nameInput.value} : ${emailInput.value}`));

          userList.appendChild(li);

         // nameInput.value = ''
         // emailInput.value = ''
    }

}







