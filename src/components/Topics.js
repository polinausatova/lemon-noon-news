import { Link } from 'react-router-dom';

const Topics = ({topicsObjects}) => {
    

    return (
        <ul className="articles-list">
            {topicsObjects.map((topic) => {
                return (
                    <li className="articles-preview-card" key={topic.slug}>
                        <p className="article-preview-details">
                        {topic.slug}:</p>
                        <h5>{topic.description}</h5>
                        <Link  className="article-preview-details" to={`/articles?topic=${topic.slug}`}>see all articles
                        </Link> 
                        <br></br><br></br>
                   </li> 
                )
            }) 
            }
        </ul>

    )
}

export default Topics;