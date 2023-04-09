/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let typeExtension = [];

function randomNum(arrSelect) {
  let number = Math.floor(Math.random() * arrSelect.length);
  return arrSelect[number];
}

let domain = pronoun.map((item, index) => {
  let temp = item + adj[index];
  return temp;
});
let excuseView = () => {
  return "<h5 >" + randomNum(pronoun) + " " + randomNum(adj) + " " + "</h5>";
};

window.onload = function() {
  //write your code here
  console.log(domain);
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = domain;
  });
};
