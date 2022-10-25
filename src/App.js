import { useEffect } from "react";
import { TWITTERCONTRACT_ADDRESS } from "./constants/addresses";
import { TWITTERCONTRACT_ABI } from "./constants/abi";
import { ethers } from "ethers";
import { useSigner } from "./hooks/useSigner";
import { setProvider } from "./store/slices/data";
import { setTwitterContract } from "./store/slices/contract";
import { batch, useDispatch } from "react-redux";
import { Login } from "./components/Landing/Login";
import { Layout } from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch();
  const signer = useSigner();


  const getProvider = async() => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Metamask yüklü değil!");
      return;
    }
    
    const provider = new ethers.providers.Web3Provider(ethereum);

    const twitterContract = new ethers.Contract(
      TWITTERCONTRACT_ADDRESS,
      TWITTERCONTRACT_ABI,
      provider
    );
    batch(() => {
      dispatch(setProvider(provider));
      dispatch(setTwitterContract(twitterContract));
    });
  }

  useEffect(() => {
    getProvider();
  }, []);

  return (
    <>
      {signer === null ? (
        <Login />
      ) : (
        <>
          <Layout />
        </>
      )}
    </>
  );
}

export default App;
