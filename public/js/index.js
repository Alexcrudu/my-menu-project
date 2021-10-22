"use strict";

let maki = [
    {
      img: "img/hoso-maki.png",
      name: "Hoso-Maki",
      price: 8.75,
    },
    {
       img: "img/futo-maki.png",
       name: 'Futo-Maki',
       price: 9.75,
    },
    {
        img: "img/ura-maki.png",
        name: 'Ura-Maki',
        price: 9.95,
    },
    {
        img: "img/te-maki.png",
        name: 'Te-Maki',
        price: 10.25,
    },
    {
        img: "img/gunkan-maki.png",
        name: 'Gunkan-Maki',
        price: 10.25,
    },
    {
        img: "img/hitsuji-maki.png" ,
        name: 'Hitsuji-Maki' ,
        price:  10.00,
    },
    {
        img:  "img/nigiri-maki.png",
        name:  'Nigiri-Maki',
        price: 10.50,
    },
    {
        img: "img/sashimi-maki.png",
        name: 'Sashimi-Maki',
        price: 10.20,
    }
  ];

  let wok = [
      {
          img: "img/udong-ebi.png",
          name: 'Udong Ebi',
          price: 9.90
      },
      {
          img:"img/udong-veggie.png",
          name: 'Udong Veggie',
          price: 8.90,
      },
      {
          img: "img/yaki-soba-chicken.png",
          name: 'Yaki Soba Chicken',
          price: 8.90,
      },
      {
          img: "img/yaki-soba-pork.png",
          name: 'Yaki Soba Pork',
          price: 9.75,
      }
  ];

  let drinks =[
      {
          img: "img/amazake.png",
          name: 'Amazake',
          price: 3.50,
      },
      {
          img: "img/genmaicha.png",
          name: 'Genmaicha',
          price: 2.50,
      },
      {
          img: "img/sake.png",
          name: 'Sake',
          price: 2.25,
      },
      {
          img: "img/green-tea.png",
          name: 'Green Tea',
          price: 1.80,
      },
      {
          img: "img/oolong-tea.png",
          name: 'Oolong Tea',
          price: 2.50,
      },
      {
          img: "img/mugicha.png",
          name: 'Mugicha Tea',
          price: 3.25,
      },
  ]

  let desserts = [
      {
          img: "img/banana-sushi.png",
          name: 'Banana Sushi',
          price: 3.50,
      },
      {
          img: "img/purin.png",
          name: 'Purin',
          price: 3.25 ,
      },
      {
          img: "img/coffe-jelly.png",
          name: 'Coffe Jelly',
          price: 2.25,
      },
      {
          img: "img/rice-krispies.png",
          name: 'Rice Krispies',
          price: 3.75,
      },
      {
          img: "img/green-ice-cream.png",
          name: 'Grren Ice-Cream',
          price: 3.00,
      },
      {
          img: "img/daifuku-mochi.png",
          name :'Daifuku Mochi',
          price: 3.20,
      }
  ]

  const makiContainer = document.querySelector('#maki');
  const wokContainer = document.querySelector('#wok');
  const drinksContainer = document.querySelector('#drinks');
  const dessertsContainer = document.querySelector('#desserts');


const createMenu = (arr, container) => {

    for (let i=0; i< arr.length; i++) {
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
      let content = `
                      <div class="menu-item-title">
                        <img src=${arr[i].img} alt="${arr[i].name}" width="120px" height="120px"/>
                        <h3>${arr[i].name}</h3>
                      </div>
                      <div class="menu-item-price">${arr[i].price}€</div>
                      <button class="btn-order" type="button">order</button>
                    `
    menuItem.innerHTML = content;
    container.append(menuItem)
    }
}

createMenu(maki, makiContainer);
createMenu(wok, wokContainer);
createMenu(drinks, drinksContainer);
createMenu(desserts, dessertsContainer);




// CONSTANTS
const header = document.querySelector(".header");
const navToggler = document.querySelector(".nav-toggler");
const menuTabs = document.querySelector(".menu-tabs");


// FUNCTION

const toggleNav = () => {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
};

// events

navToggler.addEventListener("click", toggleNav);

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".nav-item")) {
    toggleNav();
  }
});

window.addEventListener("scroll", () => {
  if (pageYOffset > 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

menuTabs.addEventListener("click", (evt) => {
  // debugger
  if (
    evt.target.classList.contains("menu-tab-item") &&
    !evt.target.classList.contains("active")
  ) {
    const target = evt.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    evt.target.classList.add("active");
    const menuSection = document.querySelector(".menu-section");
    menuSection
      .querySelector(".menu-tab-content.active")
      .classList.remove("active");
    menuSection.querySelector(`#${target}`).classList.add("active");
  }
});
