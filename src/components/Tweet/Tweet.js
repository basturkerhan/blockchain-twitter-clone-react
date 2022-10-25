import React, { useEffect } from "react";
import { BigNumber } from "ethers";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useAvatarImage } from "../../hooks/useAvatarImage";
import { useTwitterContract } from "../../hooks/useTwitterContract";
import { setAllTweets } from "../../store/slices/data";
import { useDispatch } from "react-redux";

const Tweet = ({ data }) => {
  const avatarImage = useAvatarImage();
  const twitterContract = useTwitterContract();
  const dispatch = useDispatch();

  const likeButton = async (tweetId) => {
    if (!twitterContract) return;
    await twitterContract.changeLikeTweet(tweetId);
  };

  // KONTRATA YENİ GELEN BİR EVENTİ DİNLEMEK
  useEffect(() => {
    if (!twitterContract) return;

    const listener = (tweetId, likeStatus) => {
      let newData = data.map((tweet) => {
        if (
          BigNumber.from(tweet.id).toNumber() ===
          BigNumber.from(tweetId).toNumber()
        ) {
          console.log("Bu tweet: ", tweet.likeCount);
          // (likeStatus) ? Object.assign( BigNumber.from(1), tweet.likeCount) : Object.assign(BigNumber.from(0), tweet.likeCount);
          const objCopy = { ...tweet };
          objCopy.likeCount = (likeStatus) 
          ? BigNumber.from(BigNumber.from(objCopy.likeCount).toNumber()+1) 
          : BigNumber.from(BigNumber.from(objCopy.likeCount).toNumber()-1);
          return objCopy;
        }
        return tweet;
      });
      console.log(newData);
      dispatch(setAllTweets(newData));
    };
    // ilk parametre eventin ismi, ikinci parametre listener fonksiyonu
    twitterContract.on("LikeTweet", listener);
    return () => {
      twitterContract?.off("LikeTweet", listener);
    };
  }, [twitterContract, data]);

  return (
    data && (
      <>
        {data.map((tweet) => (
          <div className="tweet-container" key={tweet.id}>
            <div className="tweet-body">
              <div
                className="tweet-avatar"
                as={Link}
                to={`/profiles/${tweet.username}`}
              >
                <img src={avatarImage} alt={tweet.username} />
              </div>

              <div className="tweet-content">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/tweets/${tweet.id}`}
                >
                  <div className="tweet-header">
                    <strong>{tweet.username}</strong>
                    <span>{tweet.username}</span>
                    <div className="dot" />
                  </div>

                  <div className="tweet-description">{tweet.tweetText}</div>
                </Link>

                <div className="icons">
                  <Link
                    className="status"
                    style={{ textDecoration: "none" }}
                    to={`/tweets/${tweet.id}`}
                  >
                    <BiCommentDetail className="icon" />
                    {BigNumber.from(tweet.commentCount).toNumber()}
                  </Link>
                  <div className="status" />
                  <div className="status" onClick={() => likeButton(tweet.id)}>
                    <FcLike className="icon" />
                    {BigNumber.from(tweet.likeCount).toNumber()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  );
};

export default Tweet;
