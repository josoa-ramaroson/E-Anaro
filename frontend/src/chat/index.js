import React, { useContext, useEffect, useState } from 'react'

import { logo, sendIcon } from "./assets";
import { profile } from './assets';
import { Link } from 'react-router-dom';
import Button from './components/button';
import { ChatMain } from './layouts';
import axios from 'axios';
import { AuthContext } from '../layout/authContext';
import NavHeader from '../components/NavHeader';

export default function ChatPage({ className, userId, currentMessage }) {
  const [messageList, setMessageList] = useState([]);
  const [nouveauMessage, setNouveauMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [counter, setCounter] = useState(1)
  const { token, logout } = useContext(AuthContext);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messageList'));
    const counter = JSON.parse(localStorage.getItem('counter'));
    if (storedMessages) {
      setMessageList(storedMessages);
      setCounter(counter);
    }
  }, []);
  // Function to update message list and store it in local storage
  useEffect(() => {
    localStorage.setItem('messageList', JSON.stringify(messageList));
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [messageList]);

  const handleChange = (e) => {
    setNouveauMessage(e.target.value);
  }


  const handleSubmit = async (e) => {
    if (nouveauMessage.trim() === '') return;

    setIsLoading(true);
    const message = {
      'id': counter,
      'fromMe': true,
      "content": nouveauMessage
    }
    setCounter((current) => current++);

    setMessageList((current) => [...current, message])
    setNouveauMessage("");

    try {
      const response = await axios.post(
        'http://127.0.0.1:8082/chat',
        {
          message: nouveauMessage
        },
        {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json'
          }
        }
      );


      const botMessage = {
        'id': counter,
        'fromMe': false,
        'content': response.data.response
      }

      setCounter((current) => current++);
      setIsLoading(false)
      setMessageList((current) => [...current, botMessage]);
    }
    catch (error) {
      console.error('Error communicating with ChatBotKit API:', error);
    }
    console.log(messageList);
  };
  return (
    <div>
      <div className="bg-secondary py-3 pr-[6%] shadow-xl">
        <NavHeader />
      </div>
      <div className="flex py-10 justify-center h-screen-70 ">
        <div>
          <h1 className="text-center text-title">Demande ce tu veux, nous sommmes gentil!</h1>
          <ChatMain listeDeMessage={messageList} />
          {isLoading && <p>Generating answer...</p>}
          <div className="px-12 w-full h-24 bg-blur backdrop-blur-sm shadow-white shadow-sm flex justify-around items-center gap-12">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Entrez un message"
                onChange={handleChange}
                value={nouveauMessage}
                className="w-full py-3 px-5 h-14 rounded-full drop-shadow-xl" />
            </div>
            <Button
              text="Send"
              onClick={handleSubmit}
              className="h-10 w-10" />
          </div>

        </div>
      </div>
    </div>
  )
}
