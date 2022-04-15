// cache document elements 
let userinput = document.getElementById('userinput');
let button = document.getElementById('enter');
let ul = document.getElementById('mylist');

function inputLength() {
    return userinput.value.length;
}

function clickedElement(e) {
    elem = e.target;
    elem.classList.toggle('done');
}

function removeParent(e) {
    e.target.removeEventListener('click', removeParent, false);
    e.target.parentNode.remove();
}

function addElementToList() {

    //btn
    let btn = document.createElement('button');
    btn.innerHTML = 'Remove';
    btn.onclick = removeParent;

    // li
    let li = document.createElement('li');
    li.addEventListener('click', clickedElement);
    li.appendChild(document.createTextNode(userinput.value + ' '));
    li.appendChild(btn);
    ul.appendChild(li);





    userinput.value = '';
};

function addElementAfterClick() {

    if (inputLength() > 0) {
        addElementToList();
    }

}

function addListAfterKeyPress(e) {

    if (e.code === 'Enter' && inputLength() > 0) {
        addElementToList();
    }

}



button.addEventListener('click', addElementAfterClick);

userinput.addEventListener('keydown', addListAfterKeyPress)

