import React, { useState } from "react";

function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null);

  const handleLike = () => {
    if (userReaction === "like") {
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === "dislike") {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setUserReaction("like");
    }
  };

  const handleDislike = () => {
    if (userReaction === "dislike") {
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === "like") {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setUserReaction("dislike");
    }
  };

  return (
    <div>
      <button
        onClick={handleLike}
        style={{ color: userReaction === "like" ? "green" : "black" }}
      >
        👍 Like {likes}
      </button>

      <button
        onClick={handleDislike}
        style={{ color: userReaction === "dislike" ? "red" : "black" }}
      >
        👎 Dislike {dislikes}
      </button>
    </div>
  );
}

export default LikeDislike;
