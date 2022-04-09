let paragraph = document.createElement('p');
let userAge = parseInt(prompt("Welcome to the competition \n Enter your age").trim(),10)
let defaultAge = 16;

if (userAge >= defaultAge) {
  console.log("You are welcome to attend");
  paragraph.textContent = "You are welcome to attend";
  document.body.append(paragraph)
  paragraph.style.background = "green";
}

else {
  console.log("sorry your age didn't match");
  paragraph.textContent = "sorry your age didn't match";
  document.body.append(paragraph)
  paragraph.style.background = "red";
}