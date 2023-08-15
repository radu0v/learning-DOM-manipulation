// variables

let openBtn = document.getElementById('open-btn')
let modalContainer = document.getElementById('modal-container')
let closeBtn = document.getElementById('close-btn')

// event listeners

// event listener to show the modal when i click on the button
openBtn.addEventListener('click',function(){
    modalContainer.style.display = 'block';
});

// close the modal when i click on the x button
closeBtn.addEventListener('click',function(){
    modalContainer.style.display = "none";
});

// close the modal when i click anywhere in the page
window.addEventListener('click',function(e){
    if (e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});
