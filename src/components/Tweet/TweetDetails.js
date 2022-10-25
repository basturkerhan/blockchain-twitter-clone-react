import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {AiOutlineRollback} from "react-icons/ai"
import {FcLike} from "react-icons/fc";
import {BiCommentDetail} from "react-icons/bi";

import {BigNumber} from "ethers";
import { useAvatarImage } from "../../hooks/useAvatarImage";
import { Comments } from "./Comments/Comments";
import { useAllTweets } from "../../hooks/useAllTweets";

export const TweetDetails = () => {
  const avatarImage = useAvatarImage();
  const [tweet, setTweet] = useState(null);
  const params = useParams();
  const allTweets = useAllTweets();

  useEffect(() => {
    const tweetId = params.id;
    setTweet(allTweets?.filter(x => BigNumber.from(tweetId).eq(x.id))[0]);
  }, [allTweets, params.id])


  return tweet && (
    <div className="tweet-container">
        <div className="back-header">
        <Link to={'/'} style={{textDecoration:"none"}}>
          <AiOutlineRollback className="back-icon" />
        </Link>
      </div>

      <div className="tweet-body">
        <Link className="tweet-avatar" to={`/profiles/${tweet.username}`}>
          <img src={avatarImage} alt={tweet.username} />
        </Link>

        <div className="tweet-content">
          <div className="tweet-header">
            <strong>{tweet.username}</strong>
            <span>{tweet.username}</span>
            <div className="dot" />
          </div>

          <div className="tweet-description">{tweet.tweetText}</div>

          <div className="icons">
            <div className="status">
              <BiCommentDetail className="icon" />{BigNumber.from(tweet.commentCount).toNumber()}
            </div>
            <div className="status" />
            <div className="status" onClick={() => console.log("click status")}>
              <FcLike className="icon" />{BigNumber.from(tweet.likeCount).toNumber()}
            </div>
          </div>
        </div>
      </div>

      <Comments tweetId={tweet.id} />
    </div>
  );
};
