"use client";

import { useState } from "react";

const UpvoteButton = () => {
  const [upvoted, setUpvoted] = useState(false);
  const [count, setCount] = useState(0);

  const handleUpvote = () => {
    setUpvoted(!upvoted);
    if (upvoted) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    console.log("SSS", upvoted, count);
  };


  return (
    <button
      onClick={handleUpvote}
      className={`h-[52px] px-4 py-2 rounded-md ${
        upvoted ? "bg-white border border-orange-500" : "bg-orange-500"
      } ${
        upvoted ? "text-black" : "text-white"
      }`}
    >
      {upvoted ? "Upvoted" : "Upvote"} {count != 0 ? count : ""}
    </button>
  );
};

export default UpvoteButton;
