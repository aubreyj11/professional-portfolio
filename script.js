const toggleButton = document.getElementsByClassName('toggle-button')[0]
const ul = document.getElementsByTagName('ul')[0]

toggleButton.addEventListener('click', () => {
    ul.classList.toggle('active')
})