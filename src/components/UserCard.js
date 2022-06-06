import React from 'react';

function UserCard({user}) {
  return (
    <div className="user__container">
      <img src={user.photo} alt="#" />
      <div>{user.name}</div>
      <div>
        <div>{user.position}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
      </div>
    </div>
  );
}

export default UserCard;
