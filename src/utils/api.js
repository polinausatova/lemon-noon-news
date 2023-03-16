import axios from 'axios';

const ln_news = axios.create({ baseURL: "https://lemon-noon-news-board-project-with.onrender.com/api"});

export const getArticles = (topic, order_by, order) => {

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

        return articles;
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

export const getArticle = (article_id) => {
    let path=`/articles/${article_id}`;
    return ln_news
    .get(path)
    .then(({data: {article}}) => {
        return article;
    })
}

export const updateVotes = (article_id, vote) => {
    const obj = {inc_votes: vote};
    let path=`/articles/${article_id}`;
    return ln_news
    .patch(path, obj)
    .then(({data: {article}}) => {
        return article;
    })

}