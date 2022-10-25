import React, { Fragment, useEffect, useState } from 'react';
import { useAvatarImage } from '../../hooks/useAvatarImage';
import {useTwitterContract} from '../../hooks/useTwitterContract';
import Tweet from '../Tweet/Tweet';
import { useAddress } from '../../hooks/useAddress';
import { useParams } from 'react-router-dom';
import { EditProfile } from './EditProfile';
import {SiBlockchaindotcom} from "react-icons/si";

const ProfilePage = () => {
    const avatarImage = useAvatarImage();
    const [profile, setProfile] = useState(null);

    const twitterContract = useTwitterContract();
    const address = useAddress();
    const params = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [userTweets, setUserTweets] = useState(false);

    useEffect(() => {
      const loadProfile = async () => {
        let result = await twitterContract.getUser(params.id);
        setProfile(result);
        console.log(result);
        result = await twitterContract.getUserTweets(params.id);
        setUserTweets(result);
      }
      loadProfile();
    }, [twitterContract, params, modalShow]);

    return (
        <Fragment>
          <EditProfile setModalShow={setModalShow} show={modalShow} onHide={() => setModalShow(false)} />
          <div className="banner">
            <div>
              <img className="avatar"
                src={avatarImage}
                alt={profile?.username ? profile.username : params.id}
              />
            </div>
          </div>
    
          <div className="profile-data">
            {(params.id===address) && <button className="button edit-button" onClick={() => setModalShow(true)}>Set up profile</button>}
            
            <h1>{profile?.name ? profile.name : params.id}</h1>
            <h2>@{profile?.username ? profile.username : params.id}</h2>
    
            <p>{profile?.bio ? profile.bio : ""}</p>
            <div>
              <SiBlockchaindotcom style={{marginRight:"0.5rem"}}/><small>{params.id}</small>
            </div>
            
          </div>
    
          {/* <Feed /> */}
          <div className="container-100-vh">
          <div className="tweets">
            {
              userTweets && <Tweet data={userTweets} />
            }
          </div>
          </div>
        </Fragment>
      );
}

export default ProfilePage;
