import { useState, useEffect } from "react";
import { getTopics } from "../utils/api"

import '../App.css';


export default function ArticlesFilters ({
    setTopic, 
    topic, 
    setOrderBy, 
    order_by, 
    setOrder, 
    order}) {

    const [topicsList, setTopics] = useState([
        'all topics','coding', 'football', 'cooking'
    ]);

    useEffect(() => {
        getTopics()
        .then((topics) => {
            setTopics(topics)
        });  
    }, [])

    const orderBy = [
        "created_at",
        "title",
        "author",
        "votes",
        "comment_count"
    ];

    const showOrderBy = (orderKey) => {
        if (orderKey === "created_at") return "created";
        if (orderKey === "comment_count") return "comments";
        else return orderKey;
    }

    const handleOrder = () => {
        if (order === 'asc') setOrder('desc');
        if (order === 'desc') setOrder('asc');
    }

    const showOrder = () => {
        if (order === 'asc') return 'desc';
        if (order === 'desc') return 'asc';
    }

    return (
    <>

    <div>
        <button>Search by topic:</button>

        <select value={topic} onChange={(event) => {setTopic(event.target.value)}}>
            {
                topicsList.map((topicOption) => {    
                    return (
                        <option value={topicOption} key={topicOption}>{topicOption}</option>
                    )   
                })
            }
        </select>
    </div>

    <div>
        <button className="idle-button">Order by:</button>

        <select value={order_by} onChange={(event) => {setOrderBy(event.target.value)}}>
                {
                    orderBy.map((orderOption) => {    
                        return (
                            <option value={orderOption} key={orderOption}>{showOrderBy(orderOption)}</option>
                        )   
                    })
                }
        </select>

        <button className="active-button" onClick={() => handleOrder()}>{showOrder(order)}</button>
        <br></br>
    </div>
    </>
    )
}