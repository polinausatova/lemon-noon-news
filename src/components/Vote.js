import '../App.css';
import { useState} from "react";
import { updateVotes } from "../utils/api"

export default function Vote ({article_id, setVoteValue}) {

    const [isVotingErr, setIsVotingErr] = useState(false);
    const [voteDisplay, setVoteDisplay] = useState(0);

    const votesUpdate = (vote) =>{
        if (voteDisplay === 0) {
        
            setIsVotingErr(false);
            setVoteDisplay(vote);
            setVoteValue(vote);

            updateVotes(article_id, vote)
            .catch(() => {
                setIsVotingErr(true);
                setVoteDisplay(0);
            });
        }
        else if (vote !== voteDisplay) {
            
            setIsVotingErr(false);
            setVoteDisplay(0);
            setVoteValue(0);

            updateVotes(article_id, vote)
            .catch(() => {
                setIsVotingErr(true);
                setVoteDisplay(-vote);
            });
        }
    }
    
   const message = voteDisplay ===-1 || voteDisplay ===1 ? 'Thank you for your vote!':'Give your vote for this article:';
   const errMessage = isVotingErr && 'Sorry something went wrong'

    return(<>
    <button className="idle-button">{errMessage ? errMessage : message}</button>
    <button className="active-button" onClick={() => votesUpdate(1)}>Up</button>
    <button className="idle-button">{voteDisplay}</button> 
    {/* intentionally shows users current vote. votes count is up on article display */}
    <button className="active-button" onClick={() => votesUpdate(-1)}>Down</button>
    <br></br>
    </>)
}