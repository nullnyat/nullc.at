const button = document.querySelector('.article__top-button')

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        button.classList.remove('article__top-button--disabled')
    } else {
        button.classList.add('article__top-button--disabled')
    }
})
