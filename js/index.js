// CONSTANTS
const header = document.querySelector('.header')
const navToggler = document.querySelector(".nav-toggler");

// FUNCTION

const toggleNav = () => {
    navToggler.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open')

}

// init

const init = () => {

}


// events

navToggler.addEventListener('click', toggleNav);

document.addEventListener('click', (evt)=> {
    if(evt.target.closest('.nav-item')){
        toggleNav();
    }
})

window.addEventListener('scroll', ()=> {
    // console.log(pageYOffset);
    if(pageYOffset > 60){
        header.classList.add('sticky')
    }else {
        header.classList.remove('sticky')
    }
})

// init()

init()
