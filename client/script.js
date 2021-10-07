const getStartedButton = document.getElementById('getStartedButton');
const conductButton = document.getElementById('conductButton');

getStartedButton.addEventListener('click', e => {
    window.location.href = 'articles.html';
});

window.onscroll = () => windowScroll();

const windowScroll = () => {
    let nav = document.querySelector('nav')
    let navLogo = document.getElementById('navLogo');
    let navButton = document.getElementById('getStartedButton');

    if (document.documentElement.scrollTop > 80) {
        navLogo.src = 'assets/updated logo/logo_small_icon_only_inverted.png';
        navLogo.style.height = '50px';
        nav.style.height = '75px';
        navLogo.style.top = '12px';
        navLogo.style.left = '70px';
        navButton.style.top = '15px';
        nav.style.transition = 'height 0.2s'

    } else {
        navLogo.src = 'assets/updated logo/logo_small.png';
        navLogo.style.height = '80px';
        nav.style.height = '100px';
        navLogo.style.top = '10px';
        navLogo.style.left = '40px';
        navButton.style.top = '30px';
        nav.style.transition = 'height 0.2s'
    }
}
