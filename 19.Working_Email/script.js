const scriptURL = 'https://script.google.com/macros/s/AKfycbxKmXsWE8cqw55AGr_WxU74R0v9wqWtTGDImirW5jTVm43_0Dulezi2qYAdVm-bwTBbrg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})