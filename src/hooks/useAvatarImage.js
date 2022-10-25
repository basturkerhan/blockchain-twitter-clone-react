import { useSelector } from "react-redux"

export const useAvatarImage = () => {
    const avatar = useSelector(state => state.user.avatarImage);
    return avatar;
}