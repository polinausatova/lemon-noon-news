import axios from 'axios';

const ln_news = axios.create({ baseURL: "https://lemon-noon-news-board-project-with.onrender.com/api"});

export const getArticles = (topic) => {

    return ln_news
    .get('/articles/')
    .then(({data: {articles}}) => {
        console.log(articles);
        return articles;
    })
}
