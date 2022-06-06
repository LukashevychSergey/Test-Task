import React, {useState, useEffect, useCallback} from 'react';
import {request} from './api/request';
import Header from './components/Header';
import ImageBlock from './components/ImageBlock';
import '../src/Styles/App/app.scss';
import Users from './components/Users';
import SignUpForm from './components/SignUpForm';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getUsers = useCallback(async (users, page, count = 6) => {
    const data = await request.getUsers(page, count);
    const currentUsers = data.users.sort(
      (a, b) =>
        new Date(b.registration_timestamp) - new Date(a.registration_timestamp)
    );
    setUsers([...users, ...currentUsers]);

    setPage((state) => state + 1);
    setTotalPages(data.total_pages);
  }, []);

  useEffect(() => {
    getUsers(users, page);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="common-container">
        <ImageBlock />
        <Users
          users={users}
          page={page}
          totalPages={totalPages}
          getUsers={getUsers}
        />
        <SignUpForm getUsers={() => getUsers([], 1)} />
      </div>
    </div>
  );
}

export default App;
