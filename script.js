const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
    submitButton.disabled = true
    e.preventDefault()
    window.location.href = window.location.origin + '/Personal_Page/html/success.html'
})
