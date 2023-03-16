
import { Link } from 'react-router-dom';

export default function SeeComments (article_id) {
    return(<>
    <Link  className="see-comments" to={`/articles/${article_id}/comments`}>see comments
                    </Link>
    </>)
}