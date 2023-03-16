
import { Link } from 'react-router-dom';

export default function ArticlesPreviews ({articles}) {

    const formatDate = (date) => {
        return  date.slice(8,10)+"."+date.slice(5,7)+"."+date.slice(0,2)+" at "+date.slice(11,16);
    }

return (

    <div >
        <section ><ul className="articles-list">
          {articles.map((article) => {
      
                return (
                    <li className="articles-preview-card" key={article.article_id}>

                    <h5>{article.title}</h5> 
                    <p className="article-preview-details">Article posted {formatDate(article.created_at)}

                      &nbsp;by {article.author}
                      <br></br>
                      &nbsp;votes: {article.votes}
                      &nbsp;comments: {article.comment_count}
                    </p>
                    <p>
                    <Link  className="article-preview-details" to={`/articles/${article.article_id}`}>see details
                    </Link></p> 
                    </li> 
                )
            })
        }
        </ul></section>
    </div>
)
}