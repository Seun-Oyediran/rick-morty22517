const input = document.querySelector('.input')
const btn = document.querySelector('.trigger')
const tl = gsap.timeline({ reversed: true })
btn.addEventListener('click', (e) => {
    if (input.value > 30 || input.value < 1) {
        e.preventDefault()
        tl.play()
    }
})
tl.to('.error-cover', 0.1, { display: 'flex' }).to('.error-cover', 1, { opacity: 1, ease: 'slow' }).to('.box', 1, { y: 0, ease: 'slow' }, '-=1')
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('close') || e.target.classList.contains('error-cover')) {
        tl.reverse()
    }
})