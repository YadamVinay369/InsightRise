const API_KEY = "9058b8590b2f4c27bae26220171488b2"
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener('load',()=> fetchNews("india"));

const fetchNews = async (query)=>{
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json()
    bindData(data.articles)
}

const bindData = (articles) => {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card')
    cardsContainer.innerHTML = '';

    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article)
        cardsContainer.appendChild(cardClone)
    });
}

const fillDataInCard = (cardClone, article) => {
    const newsImg = cardClone.querySelector('#news-img')
    const newsTitle = cardClone.querySelector('#news-title')
    const newsSource = cardClone.querySelector('#news-source')
    const newsDesc = cardClone.querySelector('#news-desc')

    newsImg.src = article.urlToImage
    newsTitle.innerHTML = article.title
    newsDesc.innerHTML = article.description

    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    })

    newsSource.innerHTML = `${article.source.name} · ${date}`

    //click functionality and opening in new tab

    cardClone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank")
    })
}