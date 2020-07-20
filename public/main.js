let status = document.querySelectorAll('.status')
const statusBall = document.querySelectorAll('.statusColor')

status.forEach((elements) => {
    if (elements.innerHTML == 'Alive') {
        elements.style.color = '#55cc44'
    } else if (elements.innerHTML == 'Dead') {
        elements.style.color = 'red'
    }
})


statusBall.forEach((elements) => {
    let sibling = elements.firstElementChild
    if (sibling.innerHTML == 'Alive') {
        elements.style.backgroundColor = '#55cc44'
    } else if (sibling.innerHTML == 'Dead') {
        elements.style.backgroundColor = 'red'
    }
})
