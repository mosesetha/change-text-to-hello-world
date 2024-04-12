const paragraphText =document.querySelector(",text")
const clickButton = document.querySelector(",my button")
const secondButton =document.querySelector(",button")

clickButton.addEventListener('click',Function(){
    paragraphText.textContent="Hello World!"
})

secondButton.addEventListener('click',function(){
    paragraphText.textcontent="World is round"
})