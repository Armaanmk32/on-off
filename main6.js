// let btnelement = document.getElementById("btn")
// let title = document.getElementsByTagName("p")[0]
// let tijabo = document.getElementsByClassName("btn")[0]


// let barasho = document.querySelector("form")
// console.log(btnelement)


// console.log(title)
// console.log(tijabo)
// console.log(barasho)
// const title = document.querySelector("#title")
// const describtion = document.querySelector(".desc")
// title.innerHTML = "this is dom js...."
// describtion.innerHTML = "this is dob js.......?"
// title.style.backgroundColor = "green"
// title.style.color = "red"
// const btn1 = document.querySelector(".btn")
// btn1.innerHTML = "waa kanaa ustaad......"
// btn1.style.color = "green"
// btn1.style.backgroundColor = "black"

// const button = document.querySelector(".btn")
// button.addEventListener("click", function(){
//     document.body.style.backgroundColor = "orange"
// })
const light = document.querySelector("#light")
const onbutton = document.querySelector("#onBtn")
const offbutton = document.querySelector("#offBtn")


onbutton.addEventListener("click", function(){
    light.style.backgroundColor = "yellow"
})
offbutton.addEventListener("click", function(){
    light.style.backgroundColor = "green"
})
