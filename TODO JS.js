let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let task = document.createElement('li');
    task.innerText = inp.value;
    ul.appendChild(task);

    let delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    delbtn.classList.add('delete');
    task.appendChild(delbtn);

    inp.value = '';
});

ul.addEventListener('click', function(){
    if(event.target.nodeName == 'BUTTON'){
        let par = event.target.parentElement;
        par.remove(); 
    }
});

// let delbtns = document.querySelectorAll('.delete');

// for(delbtn of delbtns){
//     delbtn.addEventListener('click', function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// };

