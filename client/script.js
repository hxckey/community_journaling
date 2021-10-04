const getStartedButton = document.getElementById('getStartedButton');
const conductButton = document.getElementById('conductButton');

getStartedButton.addEventListener('click', e => {
    window.location.href = 'articles.html';
});

conductButton.addEventListener('click', e => {
    window.location.href = 'conduct.html';
});


window.onscroll = () => windowScroll();

const windowScroll = () => {
    let nav = document.querySelector('nav')
    let navTitle = document.getElementById('navTitle');
    let navButton = document.getElementById('getStartedButton');

    if (document.documentElement.scrollTop > 80) {
        let newSpan = document.createElement('span');
        nav.style.height = '75px';
        navTitle.textContent = 'S';
        newSpan.textContent = 'H';
        navTitle.style.fontSize = '1.7em';
        navTitle.style.top = '0px';
        navButton.style.top = '15px';
        newSpan.style.color = '#61329c';
        navTitle.appendChild(newSpan);
        nav.style.transition = 'height 0.2s'

    } else {
        let newSpan = document.createElement('span');
        nav.style.height = '100px';
        navTitle.textContent = 'Street';
        newSpan.textContent = 'Hub';
        navTitle.style.fontSize = '2em';
        navTitle.style.top = '4px'
        navButton.style.top = '30px';
        newSpan.style.color = '#61329c';
        navTitle.appendChild(newSpan);
        nav.style.transition = 'height 0.2s'
    }
}
