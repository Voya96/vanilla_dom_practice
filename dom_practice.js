console.log("no sleep for Brooklyn")
const myFoot = document.getElementById("myFooter")
console.log(myFoot)
const myHeader = document.querySelector("h2")
console.log(myHeader)
myHeader.innerText = "Welcome to Brooklyn!!!"
const myBody = document.getElementsByClassName("container")
console.log(myBody)
const list = document.querySelectorAll("li")
list[2].style.color = "purple"
list[4].innerText = "Jamboree sandwich at the Jambo-ree"

const garden = document.createElement("img")
garden.setAttribute("src", "https://www.fodors.com/assets/destinations/712993/cherry-blossom-trees-brooklyn-botanical-garden-brooklyn-new-york-city-new-york_main.jpg")
myBody[1].appendChild(garden)
