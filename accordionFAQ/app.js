// variable 
// i get all the elements with that class name
const accordion = document.getElementsByClassName('content-container');

// for loop to iterate over all the elements in the accordion array
for(i=0 ; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        // constructor this that refers to the elem accordion[i]
        // toggle a class when clicked
        this.classList.toggle('active');
    })
}