import { useSearchParams } from 'react-router-dom';

export default function ArticlesFilters ({
    setCurrentTopic, 
    currentTopic, 
    setOrderBy, 
    order_by, 
    setOrder, 
    order,
    topicsList}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get('topic');

    const setTopicQuery = (slug) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('topic', slug);
        setSearchParams(newParams);
    };


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

        <select value={currentTopic} onChange={(event) => {setCurrentTopic(event.target.value); setTopicQuery(event.target.value)}}>
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