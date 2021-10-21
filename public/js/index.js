"use strict";

// const { response } = require("express");

// CONSTANTS
const header = document.querySelector(".header");
const navToggler = document.querySelector(".nav-toggler");
const menuTabs = document.querySelector(".menu-tabs");
const inputUser = document.querySelector("#inputUser");
const inputPass = document.querySelector("#inputPass");
const buttonLogin = document.querySelector("#buttonLogin");

const login = () => {
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
  console.log();

  fetch(loginRequest)
    .then((response) => response.text())
    .then((response) => console.log(response))
    .catch(console.log);
};

buttonLogin.addEventListener("click", login);

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
  // console.log(pageYOffset);
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
