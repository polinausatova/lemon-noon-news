import { useState, useEffect } from "react";
import '../App.css';

import { getArticles, getTopics } from "../utils/api"

export default function Articles () {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [articlesList, setArticles] = useState([]);

    const [displayNumber, setNumber] = useState(5);

    const [topicsList, setTopics] = useState(['all','coding', 'football', 'cooking']);
    const [topic, setTopic] = useState('');

    const [order_by, setOrderBy] = useState('created_at');
    const orderBy = [
    "created_at",
    "title",
    "author",
    "votes",
    "comment_count"];

    const [order, setOrder] = useState('desc');
    const handleOrder = () => {
        if (order === 'asc') setOrder('desc');
        if (order === 'desc') setOrder('asc');
    }

    console.log(order);

    // Error Message: WebSocketClient.js:16 WebSocket connection to 'ws://localhost:3000/ws' failed: 
    // WebSocketClient	@	WebSocketClient.js:16
    // initSocket	@	socket.js:24
    // (anonymous)	@	socket.js:48

    //update for dynamic topic list - done - in a case new topics have been added (they are not though - do I need it at all?)

    //consider getTopics and getArticles in same useEffect

    //change created_at at preview display
    //add votes at preview display
    //add see details

    //handle negative numbers of comments sorting

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getTopics()
        .then((topics) => {
            setTopics(topics)
        });
        getArticles(displayNumber, topic, order_by) 
        .then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setIsError(true);
            });
        }, [displayNumber, topic, order_by]);
    
        if (isLoading) return <p>News loading...</p>;
        if (isError) return <p>Something went wrong</p>;

return (
    <>
      {/* //   <TopicsFilterDd /> - done
    //   <ArticlesPreviewsList /> - done
    //   <Next />
    //   <OrderBy /> */}

    <button>Search by topic:</button>
    <select value={topic} onChange={(event) => {setTopic(event.target.value)}}>
        {
            topicsList.map((topic) => {    
                return (
                    <option key={topic}>{topic}</option>
                )   
            })
        }
    </select>
    <div className="number-buttons">

    <button>Display number:</button>

    <button className="number-button" id="list-5" onClick={() => setNumber(5)}>5</button>

    <button className="number-button" id="list-10" onClick={() => setNumber(10)}>10</button>

    <button className="number-button" id="list-20" onClick={() => setNumber(20)}>20</button>

    </div> 
    <br></br>

    <section className="articles-list"><ul >
        {
            articlesList.map((article) => {
                        
                return (
                    <li key={article.article_id}>
                    <h5>{article.title}</h5> 
                    <h6>{article.created_at}</h6>
                    <h6>{article.author}</h6>
                    <h6>{article.votes}</h6>
                    </li> 
                )
                    
            })
        }
    </ul></section>

    <button>Order by:</button>
    <select value={order_by} onChange={(event) => {setOrderBy(event.target.value)}}>
        {
            orderBy.map((order_by) => {    
                return (
                    <option key={order_by}>{order_by}</option>
                )   
            })
        }
    </select>

    <button className="asc-desc-button" id="list-5" onClick={() => handleOrder()}>{order}</button>
    <br></br><br></br>

    </>
)
}