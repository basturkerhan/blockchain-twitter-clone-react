import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {AiOutlineTwitter} from "react-icons/ai";
import {BiExit} from "react-icons/bi";

import menuData from "../data/menu";
import { useAvatarImage } from '../../hooks/useAvatarImage';
import { useName } from '../../hooks/useName';
import { useAddress } from '../../hooks/useAddress';
import { useUserName } from '../../hooks/useUserName';
import { TweetBox } from '../Tweet/TweetBox';
import { batch, useDispatch } from 'react-redux';
import { setAddress, setProvider, setSigner, setAccount } from '../../store/slices/data';

const Menubar = () => {
  const avatarImage = useAvatarImage();
  const name = useName();
  const username = useUserName();
  const [modalShow, setModalShow] = useState(false);
  const address = useAddress();
  const dispatch = useDispatch();

  const urlEndpoint = {
    profile: `/${address}`
  }

  const exit = () => {
    batch(() => {
      dispatch(setAddress(null));
      dispatch(setProvider(null));
      dispatch(setSigner(null));
      dispatch(setAccount(null));
      window.location.reload();
    });
  }

    return (
        <div className="menu-container">
          <TweetBox setModalShow={setModalShow} show={modalShow} onHide={() => setModalShow(false)}/>

          <div className="topside">
            <AiOutlineTwitter className="logo" />
            {
              menuData.map((item,index) => {
                return (
                  <Link
                  to={ `${item.url}${item.endpoint?urlEndpoint[item.endpoint]:""}` } 
                  key={index} className={item.active ? "menu-button active" : "menu-button"}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </Link>                           
                )
              })
            }

        <button className="button" onClick={() => setModalShow(true)}>
          <span>Tweet</span>
        </button>
            
          </div>
          <div className="botside">
            <div className="menu-avatar">
              <img
                src={avatarImage}
                alt={name}
              />
            </div>
    
            <div className="profile-data">
              <strong>{name ? name : "Empty Right Now"}</strong>
              <span>@{username ? username : "emptyrightnow"}</span>
            </div>
            <BiExit onClick={(() => exit())} style={{cursor:"pointer"}} className="icon" />
          </div>
        </div>
      );
}

export default Menubar;
