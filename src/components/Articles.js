import { useState, useEffect } from "react";
import '../App.css';

import { getArticles, getTopics } from "../utils/api"

export default function Articles () {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [articlesList, setArticles] = useState([]);
    const [topicsList, setTopics] = useState(['all','coding', 'football', 'cooking']);
    const [topic, setTopic] = useState('');
    const orderBy = [
    "created_at",
    "title",
    "author",
    "votes",
    "comment_count"];

    // Error Message: WebSocketClient.js:16 WebSocket connection to 'ws://localhost:3000/ws' failed: 
    // WebSocketClient	@	WebSocketClient.js:16
    // initSocket	@	socket.js:24
    // (anonymous)	@	socket.js:48

    //update for dynamic topic list - done - in a case new topics have been added (they are not though - do I need it at all?)

    //consider getTopics and getArticles in same useEffect

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getTopics()
        .then((topics) => {
            setTopics(topics)
        });
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
      {/* //   <TopicsFilterDd /> - done
    //   <ArticlesPreviewsList /> - done
    //   <Next />
    //   <OrderBy /> */}

    <>topics dropdown:</>
    <select value={topic} onChange={(event) => {setTopic(event.target.value)}}>
        {
            topicsList.map((topic) => {    
                return (
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

    <>order_by dropdown:</>
    {/* <select value={order_by} onChange={(event) => {setTopic(event.target.value)}}>
        {
            orderBy.map((order_by) => {    
                return (
                    <option key={order_by}>{order_by}</option>
                )   
            })
        }
    </select> */}

    </>
)
}