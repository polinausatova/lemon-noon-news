
import { useState} from "react";



export default function ArticlesOrder ({setOrderBy, order_by, setOrder, order}) {

    const orderBy = [
        "created_at",
        "title",
        "author",
        "votes",
        "comment_count"];

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
            <button className="idle-button">Order by:</button>
            <select value={order_by} onChange={(event) => {setOrderBy(event.target.value)}}>
                {
                    orderBy.map((orderOption) => {    
                        return (
                            <option key={orderOption}>{orderOption}</option>
                        )   
                    })
                }
            </select>

            <button className="active-button" id="list-5" onClick={() => handleOrder()}>{showOrder(order)}</button>
            <br></br><br></br>
        </>
    )
}