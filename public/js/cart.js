"use strict";

// Constants

const removeButtons = document.querySelectorAll(".btn-danger");
const quantityInputs = document.querySelectorAll(".cart-quantity-input");
const orderButtons = document.querySelectorAll(".btn-order");
const removeBtn = document.querySelector(".btn-purchase");
const order = document.querySelector(".order");
const orderContainer = document.querySelector(".content-section");
const cartToggler = document.querySelector(".cart-toggler");
const inputUser = document.querySelector("#inputUser");
const inputPass = document.querySelector("#inputPass");
const buttonLogin = document.querySelector("#buttonLogin");
const loginCenter = document.querySelector(".center");
let logedPos = false;

const login = (evt) => {
  evt.preventDefault();

  const loginRequest = new Request("/login", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      user: inputUser.value,
      pass: inputPass.value,
    }),
  });

  fetch(loginRequest)
    .then((response) => response.json())
    .then((data) => {

      if (data == true) {
        logedPos = true;
        if (logedPos) {
          loginCenter.classList.add("visually-hidden");
          orderContainer.classList.add("visually-hidden");
          inputUser.value = "";
          inputPass.value = "";

          alert("Thank you for you order");
          let cartItems = document.querySelector(".cart-items");

          while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild);
          }
          updateTotal();
        }
      } else {
        alert("Username or Passwort is incorect");
        inputUser.value = "";
        inputPass.value = "";
      }
    })
    .catch(console.log);
};


order.addEventListener("click", () => {
  orderContainer.classList.remove("visually-hidden");
});

cartToggler.addEventListener("click", () => {
  orderContainer.classList.add("visually-hidden");
});

// Functions

const updateTotal = () => {
  let cartContainer = document.querySelector(".cart-items");
  let cartRows = cartContainer.querySelectorAll(".cart-row");
  let total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let cartPrice = cartRow.querySelector(".cart-price");
    let quantityElement = cartRow.querySelector(".cart-quantity-input");

    let price = Number(cartPrice.innerText.replace("€", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }

  document.querySelector(".cart-total-price").innerText =
    Math.round(total * 100) / 100 + "€";
};

const removeCartItem = (evt) => {
  let buttonClicked = evt.target;
  buttonClicked.parentElement.parentElement.remove();
  updateTotal();
};

const quantityChange = (evt) => {
  let input = evt.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
};

const addItemToCard = (title, price, img) => {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  let cartItems = document.querySelector(".cart-items");
  let cartItemsNames = cartItems.querySelectorAll(".cart-item-title");
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      return;
    }
  }

  let content = `<div class="cart-item cart-column">
                     <img class="cart-item-image" src="${img}" width="100" height="100"/>
                     <span class="cart-item-title">${title}</span>
                   </div>
                   <span class="cart-price cart-column">${price}</span>
                   <div class="cart-quantity cart-column">
                   <input class="cart-quantity-input" type="number" value="1" />
                <button class="btn btn-danger" type="button">REMOVE</button>
                </div>`;
  cartRow.innerHTML = content;
  cartItems.append(cartRow);

  cartRow
    .querySelector(".btn-danger")
    .addEventListener("click", removeCartItem);
  cartRow
    .querySelector(".cart-quantity-input")
    .addEventListener("change", quantityChange);
};

const addToCard = (evt) => {
  let button = evt.target;
  let orderItem = button.parentElement;
  let titleItem = orderItem.querySelector("h3").innerText;
  let priceItem = orderItem.querySelector(".menu-item-price").innerText;
  let imageItem = orderItem.querySelector("img").src;
  addItemToCard(titleItem, priceItem, imageItem);
  updateTotal();
};

const removeAllItems = () => {
  loginCenter.classList.remove("visually-hidden");
  buttonLogin.addEventListener("click", login);

};


// Events

for (let i = 0; i < removeButtons.length; i++) {
  let button = removeButtons[i];
  button.addEventListener("click", removeCartItem);
}

for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChange);
}

for (let i = 0; i < orderButtons.length; i++) {
  let orderButton = orderButtons[i];
  orderButton.addEventListener("click", addToCard);
}

removeBtn.addEventListener("click", removeAllItems);
