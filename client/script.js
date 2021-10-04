const getStartedButton = document.getElementById('getStartedButton');
const conductButton = document.getElementById('conductButton');

getStartedButton.addEventListener('click', e => {
    window.location.href = 'articles.html';
});

conductButton.addEventListener('click', e => {
    window.location.href = 'conduct.html';
});
