import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useState, useEffect } from "react";

import { getComments } from "../utils/api"

export default function CommentsList () {

    const {article_id} = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [comments, setComments]=useState({});

    const formatDate = (date) => {
        return  date.slice(8,10)+"."+date.slice(5,7)+"."+date.slice(0,2)+" at "+date.slice(11,16);
    }
    
    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        
        getComments(article_id) 
        .then((comments) => {
            setComments(comments);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setIsError(true);
            });
        }, [article_id]
    );
    
    if (isLoading) return <p>Comments loading...</p>;
    if (isError) return <p>Something went wrong</p>;   

    return (
    <>
    <section >
        <ul className="articles-list">
          {comments.map((comment) => {
            return (
            <li className="articles-preview-card">
            <p className="article-preview-details">Comment posted {formatDate(comment.created_at)}
            <br></br>by {comment.author}
           
            <br></br>votes: {comment.votes}
             </p> 
        
            <p className="article-body">
            {comment.body}   
            </p>
        </li>)
        })
        }
        </ul></section>
        <Link  className="links" to={`/articles/${article_id}`}>back to article</Link>
    </>
)
}