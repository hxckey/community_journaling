//// Navbar JS
window.onscroll = () => windowScroll();

const windowScroll = () => {
    let nav = document.querySelector('nav')
    let navLogo = document.getElementById('navLogo');
    let navPostButton = document.getElementById('newPostButton');

    if (document.documentElement.scrollTop > 80) {
        navLogo.src = 'assets/updated logo/logo_small_icon_only_inverted.png';
        navLogo.style.height = '50px';
        nav.style.height = '75px';
        navLogo.style.top = '12px';
        navLogo.style.left = '70px';
        navPostButton.style.top = '15px';
        nav.style.transition = 'height 0.2s'

    } else {
        navLogo.src = './assets/updated logo/logo_small.png';
        navLogo.style.height = '80px';
        nav.style.height = '100px';
        navLogo.style.top = '10px';
        navLogo.style.left = '40px';
        navPostButton.style.top = '30px';
        nav.style.transition = 'height 0.2s'
    }
}



//// Functionality for the article modals 
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

// Functionality for New Post button
const postBtn = document.getElementById('newPostButton')
const newPost = document.getElementById('newPost');
const closePost = document.getElementById('closepostBtn')

const getArticles = () => {
    let articles = [];
    fetch('http://localhost:5000/articles')
    .then(response => response.json())
    // let ressies = response.json
    .then(data => {
        console.log(data)
        articles.push(data)
        console.log(articles);
        //display articles into boxes 
        for (item in data.results){
            let displayArticle = document.createElement('div')
            let articleBody = document.getElementById('article-body')
            displayArticle.innerHTML= 
                `<div class="card" id="box1">
                    <header>Article Title 1</header>
                    <p>${data.results[item].entry}</p>
                    <button class = "readBtn ourBtn" href="#item1">Read all</button>
                    <footer>
                        <button class="commentBtn ourBtn" href='#comment1'>Comments</button>
                        <p>Likes: <span id='likeCounter${item}'></span></p>
                        <p>Loves: <span id='heartCounter${item}'></span></p>
                        <p>Fire: <span id="fireCounter${item}"></span></p>            
                        <div id="formBtnContainer" class="btn-group u-pull-right">
                            <button class="btn likeEmoji" style="background-color: white;">Like<img src="./assets/like.png"></button>
                            <button class="btn heartEmoji" style="background-color: white;">Heart<img src="./assets/heart.png"></button>
                            <button class="btn fireEmoji" style="background-color: white;">Fire<img src="./assets/fire.png"></button>
                        </div>
                    </footer>
                </div>`
                            articleBody.append(displayArticle)
                            
                            
                            // Functions
                            //// Emoji counter
                            //Selectors
                            const likeBtn = displayArticle.querySelectorAll('.likeEmoji');
                            const heartBtn = displayArticle.querySelectorAll('.heartEmoji');
                            const fireBtn = displayArticle.querySelectorAll('.fireEmoji');
                            
                            //Event listener to change button style when clicked and alter the coutner
                            
                            // Sets the coutners intialy to zero and adds them to the html
                            let likeCount = 0;
                            let heartCount = 0;
                            let fireCount = 0;
                            
                            let likeCounter = document.getElementById(`likeCounter${item}`);
                            let heartCounter = document.getElementById(`heartCounter${item}`);
                            let fireCounter = document.getElementById(`fireCounter${item}`);
                        
                            
                            likeCounter.textContent = likeCount;
                            heartCounter.textContent = heartCount;
                            fireCounter.textContent = fireCount;
                            
                            // Like button
                            likeBtn.forEach(likebutton => likebutton.addEventListener('click', (e) => {
                                if(likebutton.style.backgroundColor === 'white') {
                                    likebutton.style.backgroundColor = 'rgb(41,114,250)';
                                    likebutton.style.border = 'black';
                                    likebutton.style.fontWeight = 'bolder';
                                    likeCount ++;
                                    likeCounter.textContent = likeCount;
                                    console.log(likeCount)
                                } else {
                                    likebutton.style.backgroundColor = 'white';
                                    likebutton.style.border = 'white';
                                    likebutton.style.fontWeight = 'normal';
                                    likeCount --;
                                    likeCounter.textContent = likeCount
                                    console.log(likeCount)
                                }
                            }));
                            
                            // Love button
                            heartBtn.forEach(heartbutton => heartbutton.addEventListener('click', (e) => {
                                if(heartbutton.style.backgroundColor === 'white') {
                                    heartbutton.style.backgroundColor = 'rgb(211,105,116)';
                                    heartbutton.style.border = 'black';
                                    heartbutton.style.fontWeight = 'bolder';
                                    heartCount++;
                                    heartCounter.textContent = heartCount;
                                } else {
                                    heartbutton.style.backgroundColor = 'white';
                                    heartbutton.style.border = 'white';
                                    heartbutton.style.fontWeight = 'normal'
                                    heartCount--;
                                    heartCounter.textContent = heartCount
                                }
                            }));
                            
                            // Fire button
                            fireBtn.forEach(firebutton => firebutton.addEventListener('click', (e) => {
                                if(firebutton.style.backgroundColor === 'white') {
                                    firebutton.style.backgroundColor = 'rgb(250,182,51)';
                                    firebutton.style.border = 'black';
                                    firebutton.style.fontWeight = 'bolder';
                                    fireCount++;
                                    fireCounter.textContent = fireCount;
                                } else {
                                    firebutton.style.backgroundColor = 'white';
                                    firebutton.style.border = 'white';
                                    firebutton.style.fontWeight = 'normal'
                                    fireCount--;
                                    fireCounter.textContent = fireCount
                                }
                            }));
                        }
                        
                        
                    });
                            
                        };
                        
                        
                        
                        
                        
            // change listener to be a display artidcles
            let inputBox = document.getElementById('postInputBox');
            let submitBtn = document.getElementById('postBtn');
            window.addEventListener('load', e => {
                e.preventDefault();
                let results = [];
                getArticles()
            })
            
            function closePostModal() {
                newPost.style.display = 'none';
            }
            
            function openPostModal() {
                newPost.style.display = 'block';
            }
            
            function outsidePostClick(e) {
                if(e.target == newPost){
                    newPost.style.display = 'none';
                }
            }
            
            // Listens for clicks
            postBtn.addEventListener('click', openPostModal);
            closePostBtn.addEventListener('click', closePostModal);
            window.addEventListener('click', outsidePostClick);
            
            const getGiphy = async(query) => {
                let gifs = [];
                try {
                    let response =  await fetch(`http://localhost:5000/gifs/${query}`)
                    let jsonResponse = await response.json();
                    
                    for(result in jsonResponse.output.data){
                        gifs.push(jsonResponse.output.data[result].images.downsized.url);
                    } 
                    
                    return gifs;
                } catch(error) {
                    console.error("There was an error handling your request: " + error.message);
                } 
            };
            
            let chosenGifs = [];
            
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
                        newGif.innerHTML = `<button style="background: url('${item}')" value="${item}" type="button" class="gifResult" onclick="chosenGifs.push('${item}')">`;
                        gifResults.appendChild(newGif);
                        
                    }
                })   
            });
            
            let clearGifs = document.getElementById('clearGifs');
            clearGifs.addEventListener('click', e => {
                while(gifResults.firstChild){
                    gifResults.firstChild.remove();
                }
            })
            
            let removeGif = document.getElementById('removeGif');
            removeGif.addEventListener('click', e => {
                chosenGifs = [];
                alert('Selected GIFs removed.');
            });
            
            let comments = [
                {comment:'Very good', gifs: ['https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif']}, 
                {comment:'Great post', gifs: []}, 
                {comment:'I agree', gifs: ['https://media.giphy.com/media/WVjmqI7jPwIUM/giphy.gif']},
                {comment:`This is the best thing I've ever read`, gifs: []},
                {comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', gifs: []}
            ]
            
            
            let viewComments = document.getElementById('viewComments');
            let commentsList = document.getElementById('commentsList');
            viewComments.addEventListener('click', e => {
                while(commentsList.firstChild){
                    commentsList.firstChild.remove();
                }
                for(comment of comments){
                    let commentTitle = document.createElement('dt');
                    let commentDesc = document.createElement('dd');
                    commentTitle.textContent = 'Anonymous';
                    commentDesc.textContent = comments[comment].comment;
                    if(comments[comment].gifs){
                        for(gifItem in comments[comment].gifs){
                            let commentGif = document.createElement('img');
                            commentGif.src = comments[comment].gifs[gifItem];
                            commentsList.insertAdjacentElement('afterbegin', commentGif);
                        } 
                    }
                    commentsList.insertAdjacentElement('afterbegin', commentDesc);
                    commentsList.insertAdjacentElement('afterbegin', commentTitle);
                }
            });
                
                let submitComment = document.getElementById('commentsForm');
                submitComment.addEventListener('submit', e => {
                    e.preventDefault();
                    alert('Comment Submitted');
                    comments.push({comment: submitComment.comments.value, gifs: chosenGifs || []});
                    chosenGifs = [];
                })
                
                
                
                
                
                        
                        






