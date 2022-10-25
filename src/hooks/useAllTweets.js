import { useSelector } from "react-redux"

export const useAllTweets = () => {
    const allTweets = useSelector(state => state.data.allTweets);
    return allTweets;
}