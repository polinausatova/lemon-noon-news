import '../App.css';
import { useState} from "react";
import { updateVotes } from "../utils/api"

export default function Vote ({article_id, setVoteValue}) {

    const [isVotingErr, setIsVotingErr] = useState(false);
    const [voteDisplay, setVoteDisplay] = useState(0);

    const votesUpdate = (vote) =>{
        if (voteDisplay === 0) { //allows user to vote if current vote is zero
        
            setIsVotingErr(false);
            setVoteDisplay(vote); // vote indicator updates
            setVoteValue(vote); //votes updated optimistically

            updateVotes(article_id, vote) //patch request
            .catch(() => {
                setIsVotingErr(true);
                setVoteDisplay(0); // return vote indicator to its position
            });
        }
        else if (vote !== voteDisplay) { //allows user to revoke the vote and set it to 0
            
            setIsVotingErr(false);
            setVoteDisplay(0); // vote indicator updates
            setVoteValue(0); //votes updated optimistically

            updateVotes(article_id, vote) //patch request
            .catch(() => {
                setIsVotingErr(true);
                setVoteDisplay(-vote); // return vote indicator to its position
            });
        }
    }
    

   const message = voteDisplay ===-1 || voteDisplay ===1 ? 'Thank you for your vote!':'Give your vote for this article:';
   const errMessage = isVotingErr && 'Sorry something went wrong'

    return(<>
    <button className="idle-button">{errMessage ? errMessage : message}</button>
    <button className="active-button" onClick={() => votesUpdate(1)}>Up</button>
    <button className="idle-button">{voteDisplay}</button>
    <button className="active-button" onClick={() => votesUpdate(-1)}>Down</button>
    <br></br>
    </>)
}