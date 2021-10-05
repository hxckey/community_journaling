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



const getGiphy = async(query) => {
    let gifs = [];
    try {
        let response =  await fetch(`http://localhost:5000/gifs/${query}`)
        let jsonResponse = await response.json();

        for(result in jsonResponse.output.data){
            //console.log(jsonResponse.output.data[result].url);
            gifs.push(jsonResponse.output.data[result].images.downsized.url);
        } 

        return gifs;
    } catch(error) {
        console.error("There was an error handling your request: " + error.message);
    } 
};


let searchGif = document.getElementById('searchGif');
let gifQuery = document.getElementById('gifSearchQuery');
let gifResults = document.getElementById('gifResults');
searchGif.addEventListener('click', e => {
    e.preventDefault();
    while(gifResults.firstChild){
        gifResults.firstChild.remove();
    }
    getGiphy(gifQuery.value).then(resultList => {
        for(item of resultList){
            let newGif = document.createElement('div');
            newGif.innerHTML = `<iframe src="${item}">`;
            gifResults.appendChild(newGif);
        }
    }) 
});

let exampleComments = [
    {comment:'Very good', gif: 'https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif'}, 
    {comment:'Great post', gif: ''}, 
    {comment:'I agree', gif: 'https://media.giphy.com/media/WVjmqI7jPwIUM/giphy.gif'},
    {comment:`This is the best thing I've ever read`, gif: ''},
    {comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', gif: ''}
];
let viewComments = document.getElementById('viewComments');
let commentsList = document.getElementById('commentsList');
viewComments.addEventListener('click', e => {
    for(comment in exampleComments){
        let commentTitle = document.createElement('dt');
        let commentDesc = document.createElement('dd');
        commentTitle.textContent = 'Anonymous';
        commentDesc.textContent = exampleComments[comment].comment;
        if(exampleComments[comment].gif){
            let commentGif = document.createElement('iframe');
            commentGif.src = exampleComments[comment].gif;
            commentsList.insertAdjacentElement('afterbegin', commentGif);
        }
        commentsList.insertAdjacentElement('afterbegin', commentDesc);
        commentsList.insertAdjacentElement('afterbegin', commentTitle);
    }
});





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