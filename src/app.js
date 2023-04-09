/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let typeExtension = [".com", ".net", ".cr", ".biz", ".us", ".io"];

let temp = "";

let domain = typeExtension.map((item, index) => {
  temp = "<li>" + adj[index] + item + "</li>";
  return temp;
});
let tempDomain = "";

window.onload = function() {
  //write your code here
  console.log(domain);
  document.querySelector("#excuse").innerHTML = domain;

  for (let varPron in pronoun) {
    console.log(pronoun[varPron]);
    for (let varAdj in adj) {
      for (let varNou in noun) {
        tempDomain = pronoun[varPron] + adj[varAdj] + noun[varNou];
        console.log(tempDomain);
      }
    }
  }
};
