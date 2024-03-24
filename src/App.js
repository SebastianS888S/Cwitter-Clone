// src/App.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import Login from './components/Login';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className='big-container'>
      {user ? (
        <>
          <div className='welcome-container'>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={handleLogout}>Logout</button>
          </div>
          <TweetForm user={user} />
          <div>
            <TweetList />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
