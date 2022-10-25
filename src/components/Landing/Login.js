import React,{useEffect} from "react";
import { ethers } from "ethers";
import { useProvider } from "../../hooks/useProvider";
import { setSigner, setAddress, setAccount } from "../../store/slices/data";
import { setTwitterContract } from "../../store/slices/contract";
import { setUsername, setName, setBio } from "../../store/slices/user";
import { batch, useDispatch } from "react-redux";
// import { GOERLI_TESTNET_NETWORK } from "../../constants/networks";
import { TWITTERCONTRACT_ADDRESS } from '../../constants/addresses';
import { TWITTERCONTRACT_ABI } from '../../constants/abi';
import { Button } from "react-bootstrap";

export const Login = () => {
  const dispatch = useDispatch();
  const provider = useProvider();

  useEffect(() => {
    if (!window.ethereum) return;
    // checkChain(GOERLI_TESTNET_NETWORK);
  }, []);


  // const checkChain = async (network) => {
  //   try {
  //     await window.ethereum.request({
  //       method: "wallet_switchEthereumChain",
  //       params: [{ chainId: network.chainId }],
  //     });
  //   } catch (switchError) {
  //     if (switchError.code === 4902) {
  //       try {
  //         await window.ethereum.request({
  //           method: "wallet_addEthereumChain",
  //           params: [
  //             {
  //               chainId: network.chainId,
  //               chainName: network.chainName,
  //               rpcUrls: network.rpcUrls,
  //               // nativeCurrency: network.nativeCurrency,
  //             },
  //           ],
  //         });
  //       } catch (addError) {
  //         // handle "add" error
  //       }
  //     }
  //   }
  // };

  const connectWithWallet = async () => {
    if (!provider) {
      return;
    }

    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => dispatch(setAccount(accounts[0])))
      .catch((err) => console.log(err));

    const signer = provider.getSigner();

    const twitterContract = new ethers.Contract(TWITTERCONTRACT_ADDRESS, TWITTERCONTRACT_ABI, signer);
    signer.getAddress().then((address) => {
      console.log(address)
      batch(async() => {
        dispatch(setSigner(signer));
        dispatch(setAddress(address));
        dispatch(setTwitterContract(twitterContract));
        // loadUserInfo(twitterContract, address);
        const result = await twitterContract.getUser(address);
        console.log(result)
        dispatch(setUsername(result.username));
        dispatch(setName(result.name));
        dispatch(setBio(result.bio));
      });
    });

  };

  return (
    <div id="landing">
      <div id="login-form">
        <Button variant="light" onClick={connectWithWallet}>Metamask ile giriş yap</Button>
      </div>
    </div>
  );
};
