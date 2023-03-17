
import { Link } from 'react-router-dom';

export default function ArticleLinks ({article_id}) {
    console.log(article_id)
    return(
    <>
        <Link  className="links" to={"/articles"}>back to articles</Link>
        {' | '}
        <Link  className="links" to={`/articles/${article_id}/comments`}>see comments</Link>
        <br></br><br></br>
    </>
    )
}