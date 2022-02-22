const burger = document.querySelector('.burger__menu')
const close = document.querySelector('.icon__close')

burger.addEventListener('click', () => {
    document.querySelector('.menu__burger').style.right = '0'
    document.querySelector('.menu__burger').style.transition = '1s'
})

close.addEventListener('click', () => {
    document.querySelector('.menu__burger').style.right = '-200px'
    document.querySelector('.menu__burger').style.transition = '1s'
})