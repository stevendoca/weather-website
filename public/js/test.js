console.log('testing')
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then ((data) => {
//         console.log(data)
//     })
// })



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
    fetch('http://localhost:3000/weather?address='+location).then ((r) => {
    r.json().then((data) => {
        if (data.error) {
            messageTwo.textContent = ""
            messageOne.textContent = data.error
        }else{
        messageTwo.textContent = data.location + " " + data.lattitude + " " + data.longitude
        messageOne.textContent = ""
        }
    })
})

})