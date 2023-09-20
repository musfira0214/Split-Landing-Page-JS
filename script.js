const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// ITS WORK LIKE A HOVER  HOVER IN JS (mouseenter)
left.addEventListener('mouseenter', ()=> container.classList.add('hover-left'))

// WHEN MOUSE LEAVE

left.addEventListener('mouseleave', ()=> container.classList.remove('hover-left'))


right.addEventListener('mouseenter', () => container.classList.add('hover-right'))

right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

