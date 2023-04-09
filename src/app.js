/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let typeExtension = [
  ".com",
  ".org",
  ".net",
  "int",
  ".edu",
  ".gov",
  ".cr",
  ".us",
  ".biz",
  "info",
  ".name",
  ".pro",
  ".io"
];

let domainCompleto = [];

let listDomain = "";

for (let ext in typeExtension) {
  for (let varPron in pronoun) {
    for (let varAdj in adj) {
      for (let varNou in noun) {
        domainCompleto.push(
          pronoun[varPron] + adj[varAdj] + noun[varNou] + typeExtension[ext]
        );
      }
    }
  }
}

let domains = domainCompleto.map((item, index) => {
  console.log("Posible Dominio: " + item);
  listDomain += "<li>" + item + "</li>";
  return listDomain;
});

window.onload = function() {
  //write your code here
  let viewPage = document.querySelector("#list");
  for (let x in domains) {
    viewPage.innerHTML = domains[x];
  }
};
