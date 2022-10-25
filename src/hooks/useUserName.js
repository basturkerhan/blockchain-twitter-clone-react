import { useSelector } from "react-redux"

export const useUserName = () => {
    const username = useSelector(state => state.user.username);
    return username;
}