const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the page auto reload
    const location = search.value
    if (location.length === 0){
        messageTwo.textContent = ""
        return messageOne.textContent = "You must provide address"
    } 
    fetch('/weather?address='+location).then ((r) => {
    r.json().then((data) => {
        if (data.error) {
            messageTwo.textContent = ""
            messageOne.textContent = data.error
        }else{
        messageTwo.textContent = data.location + " " + data.temperature
        }
    })
})

})