const API_KEY = "9058b8590b2f4c27bae26220171488b2"
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener('load',()=> fetchNews("India"));

const fetchNews = async (query)=>{
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json()
    bindData(data.articles)
}

const bindData = (articles) => {
    const cardsContainer = document.getElementById('cards-container');
}