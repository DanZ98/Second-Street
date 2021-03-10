// retrieving hamgburger menu
const hamRotate = document.querySelector('#ham-rotate');
const hamDisplay = document.querySelector('#ham-display');

// execute ham rotate/display click function and toggle class
hamRotate.addEventListener('click', function(){
    hamRotate.classList.toggle('rotated-ham');
    hamDisplay.classList.toggle('nav-heading__mobile-navlist--displaynone');
    
});




