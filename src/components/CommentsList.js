import { useParams } from 'react-router-dom';

export default function CommentsList () {

    const {article_id} = useParams();
    
    console.log(article_id);

    return (
    <>
    <>Comments list will be here:</>

    {/* 
     GET /api/articles/:article_id/comments
    an array of comments for the given article_id of which each comment should have the following properties:
comment_id
votes
created_at
author
body
article_id

    //   <CommentsList />
    //   <Vote />
    //   <AddCommentBtn />
    //   <ViewCommentsBtn />
    //   <Next />
    //   <BackToArticleBtn /> 
    */}
    </>
)
}