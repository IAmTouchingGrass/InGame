"use client"

import React, { useState } from 'react';
import styles from './chat.module.css';

const Messenger = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello, how can I help you?', author: 'Bot' },
    { text: 'Hi, I need help with my account.', author: 'User' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: newMessage, author: 'User' }]);
      setNewMessage('');
    }
  };

  return (
    <div className={styles.messenger}>
      <div className={styles.header}>
        <h2>Messenger</h2>
      </div>
      <div className={styles.chat}>
        <ul className={styles.messageList}>
          {messages.map((message, index) => (
            <li key={index} className={`${styles.message} ${message.author === 'User' ? styles.userMessage : styles.botMessage}`}>
              <p>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.input}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className={styles.inputField}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

export default Messenger;