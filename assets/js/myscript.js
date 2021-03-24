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

const iframeD = document.querySelector('iframe');

iframeD.classList.add('testit');


