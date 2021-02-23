import React, { useState } from "react";

function Video({video}) {
    const {title, embedUrl, views, createdAt, upvotes, downvotes} = video;
    const [upvote, setUpvotes] = useState(upvotes)
    const [downvote, setDownvote] = useState(downvotes)

    function handleDownvote(){
        setDownvote(downvote - 1)
    }

   function handleUpVote(){
       setUpvotes(upvote+1)
   }
    return (
     
    <div className="Video">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
        <h2>{title}</h2>
        <span>{views} Views | Uploaded {createdAt}</span>
        <br></br>
        <button type="button" onClick={handleUpVote}>{upvote}🌻</button>
        <button type="button" onClick={handleDownvote}>{downvote}🥦</button>
       
    </div>
    )
}
export default Video;