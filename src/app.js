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

let combDomain = [];
for (let varPron in pronoun) {
  for (let varAdj in adj) {
    for (let varNou in noun) {
      combDomain.push(pronoun[varPron] + adj[varAdj] + noun[varNou]);
    }
  }
}

let domainCompleto = [];

for (let ext in typeExtension) {
  for (let title in combDomain) {
    domainCompleto.push(
      "<li>" + combDomain[title] + typeExtension[ext] + "</li>"
    );
  }
}
let domainConsola = "";
domainCompleto.map((item, index) => {
  domainConsola = item.replace("<li>", "");
  domainConsola = domainConsola.replace("</li>", "");
  console.log(domainConsola);
});

window.onload = function() {
  //write your code here
  //console.log(domain);
  document.querySelector("#list").innerHTML = domainCompleto;
};
