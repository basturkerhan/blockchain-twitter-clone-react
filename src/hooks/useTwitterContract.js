import { useSelector } from "react-redux"

export const useTwitterContract = () => {
    const signer = useSelector(state => state.contracts.twitter);
    return signer;
}