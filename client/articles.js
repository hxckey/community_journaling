// Store the required arrays
const readModal = document.getElementsByClassName("readModal");
const readModalBtn = document.getElementsByClassName("readBtn");
const closeBtn = document.getElementsByClassName("closeBtn");

//Functions to open and close modal
function openModal(item) {
    item.style.display = 'block';
}

function closeModal(item) {
    item.style.display = 'none';
}

//Function to close modal if outside click
function outsideClick(e, item) {
    if(e.target == item){
        item.style.display = 'none';
    }
}


// Switch statment setting correct modal



// Listen for open and close click
readModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', outsideClick);











////////////////////////////////////////
// Original code saved for referance / in case of drastic failure :O

// // Get required elements
// const readModal = document.getElementsByClassName("readModal")[0];
// const readModalBtn = document.getElementsByClassName("readBtn")[0];
// const closeBtn = document.getElementsByClassName("closeBtn")[0];

// // Listen for open and close click
// readModalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);

// //Listen for outside click
// window.addEventListener('click', outsideClick);

// //Functions to open and close modal
// function openModal() {
//     readModal.style.display = 'block';
// }

// function closeModal() {
//     readModal.style.display = 'none';
// }

// //Function to close modal if outside click
// function outsideClick(e) {
//     if(e.target == readModal){
//         readModal.style.display = 'none';
//     }
// }