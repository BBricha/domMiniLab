
let h1 = document.querySelector('h1')
h1.textContent = 'some text'

let hideButton = document.getElementById('hide-button')
hideButton.addEventListener('click', () => {
    let h1 = document.querySelector('h1')
    h1.style.display = 'none'
}
)