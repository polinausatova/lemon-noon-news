import { useParams } from 'react-router-dom'

import { useState, useEffect } from "react";

import { getArticle } from "../utils/api"

import '../App.css';

import ArticleDisplay from "./ArticleDisplay"
import Vote from "./Vote"
import ArticleLinks from "./ArticleLinks"

export default function SingleArticle () {

    const {article_id} = useParams();    

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [article,setArticle]=useState({});

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        
        getArticle(article_id) 
        .then((article) => {
            setArticle(article);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setIsError(true);
            });
        }, []
    );
    
    if (isLoading) return <p>Article loading...</p>;
    if (isError) return <p>Something went wrong</p>;    

    return (
    <>
    <ArticleDisplay article={article}/>
    <Vote article_id={article_id} setArticle = {setArticle}/>
    <ArticleLinks article_id={article_id}/>

    </>
)
}