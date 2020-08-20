const contactBtn = document.querySelector("#contactBtn") 
const contactBg = document.querySelector("#contact-bg")
const closeBtn = document.querySelector('.close')

// console.log(contactBg)
contactBtn.addEventListener('click',()=>{
    contactBg.style['visibility'] = 'visible' 
})

closeBtn.addEventListener('click',()=>{
    contactBg.style['visibility'] = 'hidden' 
})

// contactBg.addEventListener('click',()=>{
//     contactBg.style['visibility'] = 'hidden' 
// })