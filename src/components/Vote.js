import '../App.css';

import { useState} from "react";

import { updateVotes } from "../utils/api"

export default function Vote ({article_id, setArticle}) {

    const [isVotingErr, setIsVotingErr] = useState(false);
    const [userVote, setUserVote] = useState(0);


    const votesUpdate = (voted) =>{
        if (userVote === 0) {
        
        setIsVotingErr(false);

        console.log(voted);
        setUserVote(voted);
        setArticle((currentArticle) => {
            const votes = currentArticle.votes;
            currentArticle.votes = votes +voted;
            return currentArticle;
        }); 

        updateVotes(article_id, voted)
        .then((articleUpdated) => {
            setArticle(articleUpdated);
        })
        .catch(() => {
            setIsVotingErr(true);
            setUserVote(0);
        });
        }

        else if (voted !== userVote){
            setUserVote(0);
            updateVotes(article_id, voted)
            .then((articleUpdated) => {
        
                console.log(articleUpdated);
                setArticle(articleUpdated);
            })
            .catch(() => {
                setIsVotingErr(true);
                setUserVote(-voted);
            });
        }
    }

    console.log(userVote);

   const message1 = userVote ===-1 || userVote ===1 ? 'Thank you for your vote!':'Give your vote for this article:';

    return(<>
    <button className="idle-button">{message1}</button>
    <button className="active-button" onClick={() => votesUpdate(1)}>Up</button>
    <button className="idle-button">{userVote}</button>
    <button className="active-button" onClick={() => votesUpdate(-1)}>Down</button>
    <br></br>
    </>)
}