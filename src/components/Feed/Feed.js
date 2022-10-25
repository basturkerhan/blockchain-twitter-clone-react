import React from "react";
import {useAllTweets} from '../../hooks/useAllTweets';
import Tweet from '../Tweet/Tweet';

const Feed = () => {
  const allTweets = useAllTweets();

    return (
        <div className="container-100-vh">
          <div className="tab">Tweets</div>
          <div className="tweets">
            {
              allTweets && <Tweet data={allTweets} />
            }
          </div>
        </div>
      );
}

export default Feed;
