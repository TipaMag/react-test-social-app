import React from 'react'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div className='profile'>
      <ProfileInfo profile={props.profile}
                  profileStatus={props.profileStatus}
                  updateProfileStatus={props.updateProfileStatus}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile