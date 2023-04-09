/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [];

function randomNum(arrSelect) {
  let number = Math.floor(Math.random() * arrSelect.length);
  return arrSelect[number];
}

let excuseView = () => {
  return (
    "<h4 >" +
    randomNum(who) +
    " " +
    randomNum(action) +
    " " +
    randomNum(what) +
    " " +
    randomNum(when) +
    "</h4>"
  );
};

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseView();
  });
};
