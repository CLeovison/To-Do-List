const tdlForm = document.querySelector('#tdl-form');
const tdlInputText = document.querySelector('#tdl-inputxt');
const tasksContainer = document.querySelector('#tasks-container')

// ----------
const userName = document.querySelector('#tdl-name')
const savedName = localStorage.getItem('name')
if(savedName) {
    userName.value = savedName
} else {
    userName.focus()
}

userName.addEventListener('change', e => {
    localStorage.setItem('name', userName.value)
})
// ----------

tdlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(tdlInputText.value == ''){
        alert('empty')
        return
    }
        addTask()
});

function addTask(){
    const newForm = tdlInputText.value;

    const tdlTask = document.createElement('div');
    tdlTask.classList.add('tasks');

    const tdlMainTask = document.createElement('div');
    tdlMainTask.classList.add('tdl-task');

    tdlTask.appendChild(tdlMainTask);

    const tdlNewInput = document.createElement('input');
    tdlNewInput.classList.add('tdl-text');
    tdlNewInput.type = 'text';
    tdlNewInput.value = newForm;
    tdlNewInput.setAttribute('readonly', 'readonly');

    tdlMainTask.appendChild(tdlNewInput);

    const tdlActionbtns = document.createElement('div');
    tdlActionbtns.classList.add('tdl-actionbtn');

    const tdlEditbtns = document.createElement('button');
    tdlEditbtns.classList.add('tdl-edit');
    tdlEditbtns.innerText = 'Edit';

    const tdlDeletebtns = document.createElement('button');
    tdlDeletebtns.classList.add('tdl-delete');
    tdlDeletebtns.innerText = 'Delete';

    tdlActionbtns.appendChild(tdlEditbtns);
    tdlActionbtns.appendChild(tdlDeletebtns);

    tdlTask.appendChild(tdlActionbtns);
    tasksContainer.appendChild(tdlTask);

    tdlInputText.value = '';



    tdlEditbtns.addEventListener('click', (e) =>{
            if (tdlEditbtns.innerText.toLowerCase() == "edit") { 
                tdlEditbtns.innerText = "Save";
                tdlNewInput.removeAttribute("readonly");
                tdlNewInput.focus();
            } else {
                tdlEditbtns.innerText = "Edit";
                tdlNewInput.setAttribute("readonly", "readonly");
            }
    });

    tdlDeletebtns.addEventListener('click', (e) => {
        tasksContainer.removeChild(tdlTask);
});}

//Key Concept Needed

//

//append();
//createElement
//classList
//innerText 