import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

import { getArticles } from "../utils/api"

import ArticlesFilters from "./ArticlesFilters"
import ArticlesPreviews from "./ArticlesPreviews"
import ArticlesOrder from "./ArticlesOrder"

export default function Articles () {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [articlesList, setArticles] = useState([]);

    const [displayNumber, setNumber] = useState(5);

    const [topic, setTopic] = useState('');

    const [order_by, setOrderBy] = useState('created_at');

    const [order, setOrder] = useState('desc');

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        
        getArticles(displayNumber, topic, order_by, order) 
        .then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setIsError(true);
            });
        }, [displayNumber, topic, order_by, order]
    );
    
    if (isLoading) return <p>News loading...</p>;
    if (isError) return <p>Something went wrong</p>;

return (
    <>
    <ArticlesFilters setNumber={setNumber} setTopic={setTopic} topic={topic}/>
    <ArticlesPreviews articlesList={articlesList} />
    <ArticlesOrder setOrderBy={setOrderBy} order_by={order_by} setOrder={setOrder} order={order} />
    </>
)
}