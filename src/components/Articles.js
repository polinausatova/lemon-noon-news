import { useState, useEffect } from "react";
import '../App.css';

import { getArticles, getTopics } from "../utils/api"


export default function Articles () {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [articlesList, setArticles] = useState([]);
    const [topicsList, setTopics] = useState(['coding', 'football', 'cooking']);
    const [topic, setTopic] = useState('');


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
    
        if (isLoading) return <p>News loading...</p>;
        if (isError) return <p>Something went wrong</p>;

return (
    <>
      {/* //   <TopicsFilterDd />
    //   <ArticlesPreviewsList /> - done
    //   <Next />
    //   <OrderBy /> */}

    <>topics dropdown:</>
    <select value={topic} onChange={(event) => {setTopic(event.target.value)}}>
        {
            topicsList.map((topic) => {    
                return (
                    // <option value={topic} onChange={handleTopicChange}>{topic}</option>
                    <option key={topic}>{topic}</option>
                )   
            })
        }
    </select>

    <br></br><br></br>
    <>articles previews list:</>
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