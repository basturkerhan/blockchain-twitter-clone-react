import { useSelector } from "react-redux"

export const useName = () => {
    const name = useSelector(state => state.user.name);
    return name;
}