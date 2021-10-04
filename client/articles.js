// Store the required arrays
const modals = document.getElementsByClassName('ourModal');
const readBtn = document.querySelectorAll('button.readBtn');
const commentsBtn = document.querySelectorAll('button.commentBtn');
const closeBtn = document.getElementsByClassName('closeBtn');

// When the user clicks the 'Read' button, open the article modal
for (let i = 0; i < readBtn.length; i++) {
    readBtn[i].onclick = function(e) {
       e.preventDefault();
       let modal = document.querySelector(e.target.getAttribute("href"));
       modal.style.display = "block";
    }
}

// When the user clicks the 'Comments' button, open the comments modal
for (let i = 0; i < commentsBtn.length; i++) {
    commentsBtn[i].onclick = function(e) {
       e.preventDefault();
       let modal = document.querySelector(e.target.getAttribute("href"));
       modal.style.display = "block";
    }
}

// When the user clicks on (x), close the modal
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
    for (let index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
        }
    }
}
   
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('ourModal')) {
    for (let index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
        }
    }
}








// //Functions to open and close modal
// function openModal() {
//     modal.style.display = 'block';
// }

// function closeModal() {
//     modal.style.display = 'none';
// }

// //Function to close modal if outside click
// function outsideClick(e) {
//     if(e.target == item){
//         modal.style.display = 'none';
//     }
// }

// // Listen for open click
// readModalBtn.addEventListener('click', openModal);

// // Listen for close click
// closeBtn.addEventListener('click', closeModal);

// //Listen for outside click
// window.addEventListener('click', outsideClick);

////////////////////////////////////////
// Original code saved for referance / in case of drastic failure :O

// // Get required elements
// const modal = document.getElementsByClassName("ourModal")[0];
// const readModalBtn = document.getElementsByClassName("readBtn")[0];
// const closeBtn = document.getElementsByClassName("closeBtn")[0];

// console.log(modal);
// console.log(readModalBtn);
// console.log(closeBtn);

// // Listen for open and close click
// readModalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);

// //Listen for outside click
// window.addEventListener('click', outsideClick);

// //Functions to open and close modal
// function openModal() {
//     modal.style.display = 'block';
//     console.log('modal opened');
// }

// function closeModal() {
//     modal.style.display = 'none';
//     console.log('modal closed');
// }

// //Function to close modal if outside click
// function outsideClick(e) {
//     if(e.target == modal){
//         modal.style.display = 'none';
//         console.log('outside click = modal closed');
//     }
// }