
// import { useState} from "react";
import { Link } from 'react-router-dom';

export default function ArticlesPreviews ({articlesList, setPage, page}) {

    const formatDate = (date) => {
        return  date.slice(8,10)+"."+date.slice(5,7)+"."+date.slice(0,2)+" at "+date.slice(11,16);
    }

return (

    <div >
        <section ><ul className="articles-list">
        {
            articlesList.map((article) => {
                        
                return (
                    <li className="articles-preview-card" key={article.article_id}>
                    <h5>{article.title}</h5> 
                    <p className="article-preview-details">posted {formatDate(article.created_at)}
                    &nbsp;by {article.author}
                    <br></br>
                    &nbsp;votes: {article.votes}
                    &nbsp;comments: {article.comment_count}
                    <br></br>
                    <Link className="single-article" to="/articles/:article_id">see details
                    </Link></p>
                    </li> 
                )
                    
            })
        }
        </ul></section>

        {/* <button className="active-button" id="prev" onClick={() => setPage(countPage(-1))}>prev</button>
        <button className="idle-button" id="page">{page}</button>
        <button className="active-button" id="next" onClick={() => setPage(countPage(1))}>next</button> */}
    </div>
)
}