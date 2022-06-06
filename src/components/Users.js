import React from 'react';
import UserCard from './UserCard';

function Users({users, page, totalPages, getUsers}) {
  return (
    <div className="users">
      <h1>Working with GET request</h1>
      <div className="users__container">
        {users.length > 0 &&
          users.map((user) => <UserCard user={user} key={user.id} />)}
      </div>
      {page !== totalPages && (
        <button onClick={() => getUsers(users, page)}>Show more</button>
      )}
    </div>
  );
}

export default Users;
