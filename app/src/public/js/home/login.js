"use strict";

console.log("Hello");
console.log("bye");

const id = document.querySelector("#id");
const passwd = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

console.log(id);

loginBtn.addEventListener("click", login);

function login() {
  console.log("login()");
  console.log(id.value);
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(req);
}
