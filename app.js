// DOM Manipulation


// // GetElementbyID()
// const title = document.getElementById('main-heading');
// console.log(title);

// // GetElementByClassName()
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// // Get ElementByTagName()
// const ul = document.getElementsByTagName('ul');
// console.log(ul);


// // querySelector() : selects the first element
// const container = document.querySelector('div');
// console.log(container);

// //querySelectorAll() : selects all elements

// const title = document.querySelector('#main-heading');
// title.style.color = 'red'

// const listItems = document.querySelectorAll('.list-items');
// console.log(listItems)
// for(i=0; i<listItems.length;i++ ){
//     listItems[i].style.fontSize = '80px';
// }

// creating elements
// document.createElement('li');

// TRAVERSE THE DOM

// parent node traversal
// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// child node traversal

// console.log(ul.childNodes);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// sibling node traversal

// console.log(ul.nextElementSibling);
// console.log(ul.previousElementSibling);

// ------------------------------------
// event listeners
// element.addEventListener("click",function);

const button = document.querySelectorAll('.list-items')

function alertBtn(){
    alert('I ,on the other hand, love js')
}

button[1].addEventListener("click",alertBtn)

function changeBgColor(){
    button[2].style.backgroundColor = 'red';
}

function resetBgColor(){
    button[2].style.backgroundColor = 'white';
}

button[2].addEventListener("click",changeBgColor);
button[3].addEventListener("click",resetBgColor);

// reveal event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
        revealBtn.innerText = 'Reveal More'
    }else {
        hiddenContent.classList.add('reveal-btn')
        revealBtn.innerText = 'Hide'
    }
}

revealBtn.addEventListener("click",revealContent)

