// src/components/TweetForm.jsx
import React, { useState } from 'react';
import { firestore } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './TweetForm.css'; // Importul fișierului CSS

const TweetForm = ({ user }) => {
  const [tweetContent, setTweetContent] = useState('');

  const addTweet = async () => {
    try {
      const tweetsCollection = collection(firestore, 'tweets');

      if (tweetContent.trim() !== '') {
        await addDoc(tweetsCollection, {
          content: tweetContent,
          userDisplayName: user.displayName,
          userId: user.uid,
          timestamp: serverTimestamp(),
        });

        setTweetContent('');
      }
    } catch (error) {
      console.error('Error adding tweet:', error.message);
    }
  };

  return (
    <div className="tweet-form-container"> {/* Adăugarea clasei aici */}
      <h2>Post a New Tweet</h2>
      <textarea
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
        placeholder="What's happening?"
      />
      <br />
      <button onClick={addTweet}>Post Tweet</button>
    </div>
  );
};

export default TweetForm;
