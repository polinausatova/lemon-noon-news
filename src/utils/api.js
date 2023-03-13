import axios from 'axios';

const ln_news = axios.create({ baseURL: "https://lemon-noon-news-board-project-with.onrender.com/api"});

export const getArticles = (displayNumber, topic, order_by, order) => {

    let path='/articles';

    if (topic) {  
        if (topic !== 'all')
        path += `?topic=${topic}`;
    }

    if (order_by) {  
        if (order_by !== 'created_at')
        path += `?sort_by=${order_by}`;
    }

    if (order == 'desc') {  
        if (order_by !== 'created_at')
        path += `?sort_by=${order_by}`;
    }

    return ln_news
    .get(path)
    .then(({data: {articles}}) => {
      
        return articles.slice(0, displayNumber);
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
