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
garden.setAttribute("src", "https://res.cloudinary.com/simpleview/image/upload/crm/newyorkstate/brooklynbotanicgarden_taggeryanceyiv_9877_0e54d36f-f030-c3e1-4b0f882ab20cdf99.jpg")
