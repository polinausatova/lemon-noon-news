import axios from 'axios';

const ln_news = axios.create({ baseURL: "https://lemon-noon-news-board-project-with.onrender.com/api"});

export const getArticles = (displayNumber, page, topic, order_by, order) => {

    let path='/articles?';

    if (topic) {  
        if (topic !== 'all topics')
        path += `topic=${topic}&`;
    }

    if (order_by) {  
        path += `sort_by=${order_by}&`;
    }

    if (order !== 'desc') {  
        path += `order=asc&`;
    }

    return ln_news
    .get(path)
    .then(({data: {articles}}) => {

        return articles.slice((displayNumber)*(page-1), displayNumber*page);
        //add upper border for the last page
    })
}

export const getTopics = () => {
    let path='/topics';
    return ln_news
    .get(path)
    .then(({data: {topics}}) => {
        return ['all topics', ...topics.map((topic) => {return topic.slug;})];
    })
}
