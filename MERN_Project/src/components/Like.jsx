import { useState } from "react";
import LikeDislike from "./ToogleLike"; 

function Likes() {
const [likes,setLikes] = useState(0);
const [dislike,setDisLikes] = useState(0);

const handlelike = () => {
    setLikes(likes + 1)
}

const handledislike = () => {
    setDisLikes(dislike + 1)
}

return (
    <div className="header-like">
        <p>Likes Counts</p>
        <button onClick={handlelike}>Like {likes}</button>
        <button onClick={handledislike}>DisLike {dislike}</button>
    </div>
)
}

export default Likes;