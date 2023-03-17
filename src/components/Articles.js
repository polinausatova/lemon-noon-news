import '../App.css';

import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import { getArticles } from "../utils/api"

import ArticlesFilters from "./ArticlesFilters"
import ArticlesPreviews from "./ArticlesPreviews"
import OnPage from "./OnPage"

export default function Articles ({topicsList}) {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [articlesList, setArticles] = useState([]);

    const [displayNumber, setNumber] = useState(5);
    const [page, setPage] = useState(1);

    const [ searchParams, setSearchParams ] = useSearchParams();
  
    const topicQuery = searchParams.get('topic')
  console.log (topicQuery);
  
    //console.log(topic);

    //const [currentTopic, setCurrentTopic] = useState(topic);

    const [order_by, setOrderBy] = useState('created_at');

    const [order, setOrder] = useState('desc');

    // useEffect(() => {
    //         setIsLoading(true);
    //         setIsError(false);
    
    //         getArticles(currentTopic, order_by, order) 
    //         .then((articles) => {
    //             setArticles(articles);
    //             setIsLoading(false);
    //         })
    //         .catch((err) => {
    //             setIsLoading(false);
    //             setIsError(true);
    //         });
    //     }, 
    //     [displayNumber, currentTopic, order_by, order, page, 
    //         //topic
    //     ]
    // );
    
    if (isLoading) return <p>News loading...</p>;
    if (isError) return <p>Something went wrong</p>;

    const articles = articlesList.slice((displayNumber)*(page-1), displayNumber*page);

return (
    <>
    {/* <ArticlesFilters setNumber={setNumber} setCurrentTopic={setCurrentTopic} currentTopic={currentTopic} setOrderBy={setOrderBy} order_by={order_by} setOrder={setOrder} order={order} topicsList = {topicsList}/> */}

    <ArticlesPreviews articles={articles}/>

    <OnPage setNumber={setNumber} setPage={setPage} page={page}/>
    </>
)
}