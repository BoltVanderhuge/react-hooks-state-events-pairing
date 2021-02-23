import React, { useState } from "react";
import Comment from "./Comment"

function Comments({comments}) {
    const [hidden, setHidden] = useState(false)
    const [search, setSearch] = useState("")

    let numberOfComments = comments.length
    
    function handleHideComments(){
        setHidden(!hidden) 
    }

    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    const allComments = comments.filter(comment => comment.user.includes(search))
    .map((comment) => (
        <Comment key={comment.id} id={comment.id} user={comment.user} comment={comment.comment}  />
    ))
    return (
        <div>
        <div>
        <br></br>
       <button onClick={handleHideComments} type="button">{hidden? "Show" : "Hide"} Comments</button>
       </div>
       <hr></hr>
        <h3>{numberOfComments} Comments</h3>
        <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Search..."
        />
        {hidden? null: allComments}
        </div>
    )
}
export default Comments;