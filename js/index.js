// CONSTANTS
const header = document.querySelector('.header')
const navToggler = document.querySelector(".nav-toggler");
const menuTabs = document.querySelector('.menu-tabs')

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

menuTabs.addEventListener('click', (evt)=> {
    if (evt.target.classList.contains('menu-tab-item') && !evt.target.classList.contains('active')){
        const target = evt.target.getAttribute('data-target');
        menuTabs.querySelector('.active').classList.remove('active');
        evt.target.classList.add('active');
        const menuSection = document.querySelector('.menu-section');
        menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
        menuSection.querySelector(`#${target}`).classList.add('active')
    }
})

// init()

init()
