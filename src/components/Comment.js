import React, { useState } from "react";


function Comment({user, comment}) {
    const [upvote, setUpvotes] = useState(0)
    const [downvote, setDownvote] = useState(0)
    const [deleted, setDeleted] = useState(false)


    function handleDownvote(){
        setDownvote(downvote - 1)
    }

   function handleUpVote(){
       setUpvotes(upvote+1)
   }
  function handleDelete(){
//     deletedID = id
//    console.log (deletedID)
    setDeleted(true)

   }

   
   return (
       deleted? null : <div id="comment">
            <h4>{user}</h4>
            <span>{comment}</span>
        
            <button type="button" onClick={handleUpVote}>{upvote}🌻</button>
            <button type="button" onClick={handleDownvote}>{downvote}🥦</button>
            <button type="button" onClick={handleDelete}>Delete☠☠☠</button>
        </div>
    )
}
export default Comment;