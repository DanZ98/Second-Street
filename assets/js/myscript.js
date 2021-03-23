// retrieving elements/classes
const hamRotate = document.querySelector('#ham-rotate');
const hamDisplay = document.querySelector('#ham-display');
const arrow = document.querySelector('#arrow');
const subUnorderedList = document.querySelector('.subunordered--display');
// const navIndex = document.querySelector('#nav-main__index');


// executing ham rotate/display click function and toggle class
hamRotate.addEventListener('click', function () {
    hamRotate.classList.toggle('rotated-ham');
    hamDisplay.classList.toggle('nav-heading__mobile-navlist--displaynone');
});

// executing arrow display sub list and toggle arrow rotate class
arrow.addEventListener('click', function () {
    subUnorderedList.classList.toggle('subunordered--display');
    arrow.classList.toggle('arrow-rotate');
});

// Current URL: https://my-website.com/page_a
const nextURL = 'https://danz98.github.io/Second-Street/mens-products.html';
const nextTitle = 'Mens Products Page';
const nextState = { additionalInformation: 'Updated the URL with JS' };

// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL);

// This will replace the current entry in the browser's history, without reloading
window.history.replaceState(nextState, nextTitle, nextURL)

