let btn = document.querySelector('button')
let body = document.querySelector('body')

let color = ['black','voilet','yellow','red','purple','green','blue']

body.style.background = 'grey'
btn.addEventListener('click',() =>{
    const colorDetect = parseInt(Math.random()*color.length)
    body.style.background = color[colorDetect]

})