// src/components/TweetList.jsx
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import './TweetForm.css'; // Importul fișierului CSS

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const tweetsCollection = collection(firestore, 'tweets');
    const q = query(tweetsCollection, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tweetsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetsData);
    });

    return () => unsubscribe();
  }, []);

  const formatTimestamp = (timestamp) => {
    if (timestamp) {
      return new Date(timestamp.toDate()).toLocaleString();
    }
    return '';
  };

  return (
    <div className="tweet-list-container"> {/* Adăugarea clasei aici */}
      <h2>New Tweets</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            {tweet.timestamp && `posted at: ${formatTimestamp(tweet.timestamp)}, `}
            <strong>{tweet.userDisplayName}:</strong> {tweet.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetList;
