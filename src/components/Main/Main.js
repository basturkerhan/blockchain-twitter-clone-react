import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useTwitterContract } from "../../hooks/useTwitterContract";
import Feed from "../Feed/Feed";
import { TweetDetails } from "../Tweet/TweetDetails";
import { setAllTweets } from "../../store/slices/data";
import ProfilePage from "../ProfilePage/ProfilePage";

const Main = () => {
  const twitterContract = useTwitterContract();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTweets();
  }, [twitterContract]);

  const getAllTweets = async () => {
    if(!twitterContract) return;

    const result = await twitterContract.getAllTweets();
    dispatch(setAllTweets(result));
    console.log(result);
  };
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="profiles/:id" element={<ProfilePage />} />
        <Route path="tweets/:id" element={<TweetDetails />} />
      </Routes>
    </div>
  );
};

export default Main;
