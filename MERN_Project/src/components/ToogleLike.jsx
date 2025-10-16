import React, { useState } from "react";

function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null); // "like" | "dislike" | null

  const handleLike = () => {
    if (userReaction === "like") {
      // If already liked → undo like
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      // If disliked earlier → remove dislike
      if (userReaction === "dislike") {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setUserReaction("like");
    }
  };

  const handleDislike = () => {
    if (userReaction === "dislike") {
      // If already disliked → undo dislike
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else {
      // If liked earlier → remove like
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
