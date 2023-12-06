const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/winnie.jpg") {
    myImage.setAttribute("src", "images/winnie1.jpg");
  } else {
    myImage.setAttribute("src", "images/winnie.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");

if(!myName) {
setUserName();
} else {
localStorage.setItem("name",myName);
  myHeading.textContent = `I love you, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Everything works out in the end, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};