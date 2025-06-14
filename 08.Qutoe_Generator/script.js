const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://dummyjson.com/quotes/random"
console.log(api_url)

const getQuote = function () {
    fetch(api_url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            quote.innerHTML = data.quote;
            author.innerHTML = data.author;
        })
        .catch(error => console.error(error))

}

getQuote()


function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by " + author.innerHTML, "Tweet Window", "width=600", "height=300")
}
