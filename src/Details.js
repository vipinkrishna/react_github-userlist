import React from 'react';
import './Details.css'

export default ({ user }) => {
  const userDetails = <div>
    <div className="UserName">Name: {user ? user.login : null}</div>
    <div className="UserId">Id: {user ? user.id : null}</div>
    <img className="UserAvatar" src={user? user.avatar_url : null} />
  </div>
  return <div className="UserDetails">
    <h1>User Details</h1>
    {user ? userDetails : null}
  </div>
}
