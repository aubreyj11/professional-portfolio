const toggleButton = document.getElementsByClassName('toggle-button')[0]
const li = document.getElementsByClassName('li')[0]

toggleButton.addEventListener('click', () => {
    li.classList.toggle('active')
})