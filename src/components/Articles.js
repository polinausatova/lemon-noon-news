import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

import { getArticles } from "../utils/api"

import ArticlesFilters from "./ArticlesFilters"
import ArticlesOrder from "./ArticlesOrder"

export default function Articles () {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [articlesList, setArticles] = useState([]);

    const [displayNumber, setNumber] = useState(5);

    const [topic, setTopic] = useState('');

    const formatDate = (date) => {
        return date.slice(0,10)+" at "+date.slice(11,16);
    }

    const [order_by, setOrderBy] = useState('created_at');

   

    const [order, setOrder] = useState('desc');

    console.log(order);
    

    //add css

    //restructure all (?) parts into new components

    //add see details

    //add Next with new utility !!!


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
      {/* //   <ArticlesFilters />
    //   <ArticlesPreviewsList />
    //   <Next />
    //   <OrderBy /> */}

    <ArticlesFilters setNumber={setNumber} setTopic={setTopic} topic={topic}/>

    <br></br>
    <div >
    <section ><ul >
        {
            articlesList.map((article) => {
                        
                return (
                    <li className="articles-list" key={article.article_id}>
                    <h5>{article.title}</h5> 
                    <p className="article-preview-details">{formatDate(article.created_at)}
                     by {article.author}
                     votes: {article.votes}</p>
                     <p> <Link className="single-article" to="/articles/:article_id">see details

</Link></p>
                    </li> 
                )
                    
            })
        }
    </ul></section></div>

    <ArticlesOrder setOrderBy={setOrderBy} order={order} />

    {/* <button>Order by:</button>
    <select value={order_by} onChange={(event) => {setOrderBy(event.target.value)}}>
        {
            orderBy.map((order_by) => {    
                return (
                    <option key={order_by}>{order_by}</option>
                )   
            })
        }
    </select>

    <button className="asc-desc-button" id="list-5" onClick={() => handleOrder()}>{showOrder(order)}</button>
    <br></br><br></br> */}

    </>
)
}