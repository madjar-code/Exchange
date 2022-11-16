import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from '../../components/Common/Header/Header'
import InfoItem from "../../components/Common/InfoItem/InfoItem";
import AvatarBlock from "../../components/ProfilePage/AvatarBlock/AvatarBlock";
import Description from "../../components/Common/Description/Description"
import GoToStorage from "../../components/ProfilePage/GoToStorage/GoToStorage";
import ChangeProfileButton from "../../components/ProfilePage/ChangeProfileButton/ChangeProfileButton";
import AuthContext from "../../context/AuthContext";
import APIService from "../../API/APIService";

import cl from './ProfilePage.module.css'



const ProfilePage = () => {
  const params = useParams()
  const userSlug = params.userSlug
  
  let [currentUser, setCurrentUser] = useState(null)
  let [isMyProfile, setMyProfile] = useState(false)
  let { authTokens } = useContext(AuthContext)

  let navigate = useNavigate()

  const handleChangeProfile = () => {
    navigate('/change-profile')
  }

  useEffect(() => {
    if (!userSlug) {
      APIService.getCurrentUser(
        setCurrentUser, authTokens)
      setMyProfile(true)
    }
    else {
      APIService.getOneUser(
        setCurrentUser, userSlug)
    }
  }, [userSlug])

  let address = (!currentUser?.address ?
                  'не указано' : 
                  currentUser?.address)

  return (
    <div>
      <Header>
      <AvatarBlock username={currentUser?.username}/>
      <div className={cl.infoBlock}>
        <InfoItem title={'Адрес'} data={address}/>
        <InfoItem title={'Почта'} data={currentUser?.email}/>
        <Description
          title={'Немного о себе'}
          description={currentUser?.description}/>
      </div>
      
      {isMyProfile
        ? <ChangeProfileButton
            handleChangeProfile={handleChangeProfile}/>
        : <GoToStorage userSlug={userSlug}/>}

      </Header>
    </div>
  )
};

export default ProfilePage;
