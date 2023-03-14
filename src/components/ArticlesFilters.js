import { useState, useEffect } from "react";
import { getTopics } from "../utils/api"


export default function ArticlesFilters ({setNumber, setTopic, topic}) {

const [topicsList, setTopics] = useState(['all topics','coding', 'football', 'cooking']);

useEffect(() => {
    getTopics()
    .then((topics) => {
        setTopics(topics)
    });  
}, [topic])

return (
<>
<div>

    <button>Display on page:</button>

    <button className="active-button" id="list-5" onClick={() => setNumber(5)}>5</button>

    <button className="active-button" id="list-10" onClick={() => setNumber(10)}>10</button>

    <button className="active-button" id="list-20" onClick={() => setNumber(20)}>20</button>

</div>
<div>

    <button>Search by topic:</button>

    <select value={topic} onChange={(event) => {setTopic(event.target.value)}}>
        {
            topicsList.map((topicOption) => {    
                return (
                    <option key={topicOption}>{topicOption}</option>
                )   
            })
        }
    </select>
</div>
</>

)}