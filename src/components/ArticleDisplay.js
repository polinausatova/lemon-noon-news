

export default function ArticleDisplay ({article, voteValue}) {

    const formatDate = (date) => {
        return  date.slice(8,10)+"."+date.slice(5,7)+"."+date.slice(0,2)+" at "+date.slice(11,16);
    }

    return(
        <li className="articles-preview-card">
            <h5>{article.title}</h5> 
            <p className="article-preview-details">Article posted {formatDate(article.created_at)}
            <br></br>by {article.author}
            <br></br>in topic: {article.topic}
            <br></br>votes: {article.votes + voteValue}
            &nbsp;comments: {article.comment_count}
            </p> 
            
            <p className="article-body">
            {article.body}   
            <br></br>
            <img src="{article_img_url}" alt="Cute illustration" />
            </p>
        </li>
    )
}