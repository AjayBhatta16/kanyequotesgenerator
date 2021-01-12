let quote = document.querySelector('#quote')

function getQuote() {
  fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(json => {
      quote.textContent = `"${json.quote}"` 
    })
    .catch(error => {
      quote.textContent = `ERROR: ${error}`
    })
}

getQuote()