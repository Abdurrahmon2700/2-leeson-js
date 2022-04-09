let moneyUser = parseInt(prompt("How much your money ?").trim(),10);
let paragraph = document.createElement('p');
let phoneCost = 100

if (moneyUser >= phoneCost){
  console.log("Congratulations! You have enough money");
  paragraph.textContent = "Congratulations! You have enough money!😊"
  document.body.appendChild(paragraph);
  paragraph.style.background = "green";
}
else {
  console.log("Unfortunately you don't have enough money");
  paragraph.textContent = "Unfortunately you don't have enough money 😭"
  document.body.appendChild(paragraph);
  paragraph.style.background = "red";
}

