// variables

const sideBar = document.querySelector('.side-bar')
const sideBarBackground = document.querySelector(".side-bar__background")
const open = document.querySelector('.open')
const close = document.querySelector('.close')

const mentionsBtn = document.querySelector('.mentions-btn')
const closeMentions = document.querySelector('.close-mentions')
const mentions = document.querySelector('.mentions')
const mentions__background = document.querySelector('.mentions__background')

const creditsBtn = document.querySelector('.credits-btn')
const closeCredits = document.querySelector('.close-credits')
const credits = document.querySelector('.credits')
const credits__background = document.querySelector('.credits__background')

//show and hide side-bar with navigation

open.addEventListener('click', () => {
    sideBar.classList.add('open-nav')
    sideBarBackground.style.visibility="visible"
})

close.addEventListener('click', () => {
    sideBar.classList.remove('open-nav')
    sideBarBackground.style.visibility="hidden"
})

//show and hide mentions legales 

mentionsBtn.addEventListener('click', () => {
    mentions.classList.add('open-mentions')
    mentions__background.style.visibility="visible"
})

closeMentions.addEventListener('click', () => {
    mentions.classList.remove('open-mentions')
    mentions__background.style.visibility="hidden"
})

//show and hide credits 

creditsBtn.addEventListener('click', () => {
    credits.classList.add('open-credits')
    credits__background.style.visibility="visible"
})

closeCredits.addEventListener('click', () => {
    credits.classList.remove('open-credits')
    credits__background.style.visibility="hidden"
})