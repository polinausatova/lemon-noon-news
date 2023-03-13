import { useState, useEffect } from "react";
import '../App.css';

import { getArticles } from "../utils/api"


export default function Articles ({topic}) {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [articlesList, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getArticles(topic) 
        .then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setIsError(true);
            });
        }, [topic]);
    
        if (isLoading) return <p>Loading...</p>;
        if (isError) return <p>Something went wrong</p>;

return (
    <>
    <>articles previews list:</>

    
    {/* //   <TopicsFilterDd />
    //   <ArticlesPreviewsList />
    //   <Next />
    //   <OrderBy /> */}

    <section className="articles-list"><ul >
        {
            articlesList.map((article) => {
                        
                return (
                    <li key={article.article_id}>
                    <h5>{article.title}</h5> 
                    <h6>{article.created_at}</h6>
                    <h6>{article.author}</h6>
                    </li> 
                )
                    
            })
        }
    </ul></section>

    </>
)
}