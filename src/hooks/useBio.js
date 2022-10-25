import { useSelector } from "react-redux"

export const useBio = () => {
    const bio = useSelector(state => state.user.bio);
    return bio;
}