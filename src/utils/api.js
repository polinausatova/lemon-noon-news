import axios from 'axios';

const ln_news = axios.create({ baseURL: "https://lemon-noon-news-board-project-with.onrender.com/api"});

export const getArticles = (topic) => {
    let path='/articles';
    if (topic) {  
        if (topic !== 'all')
        path += `?topic=${topic}`;
    }
    return ln_news
    .get(path)
    .then(({data: {articles}}) => {
      
        return articles;
    })
}

export const getTopics = () => {
    let path='/topics';
    return ln_news
    .get(path)
    .then(({data: {topics}}) => {
        return ['all', ...topics.map((topic) => {return topic.slug;})];
    })
}
