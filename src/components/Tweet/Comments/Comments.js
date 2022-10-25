import React, { useEffect, useState } from "react";
import { useTwitterContract } from "../../../hooks/useTwitterContract";
import CommentBox from "./CommentBox";
import { setAllTweets } from "../../../store/slices/data";
import { useDispatch } from "react-redux";
import { useAllTweets } from "../../../hooks/useAllTweets";
import { BigNumber } from "ethers";

export const Comments = ({ tweetId }) => {
  const [comments, setComments] = useState(null);
  const twitterContract = useTwitterContract();
  const dispatch = useDispatch();
  const allTweets = useAllTweets();

  const addNewComment = (newComment) => {
    let newData = allTweets.map((tweet) => {
      if (
        BigNumber.from(tweet.id).toNumber() ===
        BigNumber.from(newComment.tweetId).toNumber()
      ) {
        console.log(tweet);
        const objCopy = { ...tweet };
        objCopy.commentCount++;
        return objCopy;
      }
      return tweet;
    });
    console.log(newData);
    dispatch(setAllTweets(newData));
    getAllComments();
  };

  useEffect(() => {
    getAllComments();
  }, [allTweets]);

  const getAllComments = async () => {
    const result = await twitterContract.getTweetComments(tweetId);
    setComments(result);
  };

  return (
    <div className="tweet-container">
      <CommentBox tweetId={tweetId} addNewComment={addNewComment} />
      <div className="comments-area">
        {comments &&
          comments.map((comment, index) => {
            return (
              <div className="tweet-body" key={comment.id}>
                <div className="tweet-content">
                  <div className="tweet-header">
                    {/* <strong>{comment.commentOwner}</strong> */}
                    <span>{comment.commentOwner}</span>
                  </div>

                  <div className="tweet-description">{comment.commentText}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
