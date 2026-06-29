// if we write react directly without / or./ this will search inside node-modules
import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import  ChatMessages from './components/ChatMessages';
import './App.css'


function App() {
          const [chatMessages, setChatMessages] = useState([]);
          // useState has two elements in the array, 
          // the first is the state 
          // and the second is the function to update the state
          // const chatMessages = array[0];
          // const setChatMessages = array[1];
          // we should always use the setChatMessages to update the data
          // ----------------------------------------------------
          // we can use Array Destructuring for shortcut
          // const [chatMessages, setChatMessages] = array;

          return (
            <div className="app-container">
                {chatMessages.length === 0 && (
                    <p className="welcome-message">
                        Welcome to the chatbot project! Send a message using the textbox below.    
                    </p>
                )}

                {/* ChatInput() */}
                {/* This is another way to use the component */}
                {/* by using React we can create our own HTML elements */}
                <ChatMessages
                  chatMessages={chatMessages}
                />
                <ChatInput
                  chatMessages = {chatMessages}
                  setChatMessages = {setChatMessages}
                /> 
            </div> 
          );
}

export default App
