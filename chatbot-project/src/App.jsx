// if we write react directly without / or./ this will search inside node-modules
import { useState, useRef, useEffect } from 'react';
import { Chatbot } from 'supersimpledev';
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import LoadingSpinner from './assets/loading-spinner.gif';
import './App.css'

        function ChatInput({ chatMessages, setChatMessages }) {
          const [inputText, setInputText] = useState('')

          function saveInputText(event) {
            // event.target = gives us the element that we're typing in
            // setInputText now every time we change the text 
            // it's gonna save the text inside inputText
            setInputText(event.target.value);

          }

          async function sendMessage() {
            const newChatMessages = [
              ...chatMessages,
              {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              },
              // add the Loading... message to the newChatMessages
              // but we have to remove it later
              {
                message: <img src={LoadingSpinner} className="loading-spinner" />,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ];

            setChatMessages(newChatMessages);

            // (clear the textbox immediately after clicking Send).
            setInputText('');

            // from the external library
            const response = await Chatbot.getResponseAsync(inputText);
            setChatMessages([
              ...newChatMessages.slice(0, newChatMessages.length - 1),
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ]);

          }

            return (
                <div className="chat-input-container">
                    <input 
                      placeholder="Send message to the Chatbot" 
                      size="30" 
                      onChange={saveInputText}
                      // when the inputText becomes empty this will become empty too
                      value={inputText}
                      className="chat-input"
                    />
                    <button
                      onClick={sendMessage}
                      className="send-button"
                    >Send</button>
                </div>
            );
        }

        function ChatMessage(props) {
          // destructuring
          // same as const message = props.message; const sender = props.sender;
          const {message, sender} = props;
          // or write {message, sender} as parameter of the function instead of props

          /*
          if (sender === "robot") {
            return (
              // we use div instead of <> because a div is block element that take a full line
              <div>
                <img src="robot.png" width="50" />
                {message}
                </div>
            );
          }
          */

          return (
            // we use div instead of <> because a div is block element that take a full line
            <div className={
              sender === 'user' 
              ? 'chat-message-user' 
              : 'chat-message-robot'
            }>
              {/* this is the guard operator */}
              {sender === "robot" && (
                <img src={RobotProfileImage} className="chat-message-profile" />
              )}
              <div className="chat-message-text">
                {message}
              </div>
              {sender === "user" && (
                <img src={UserProfileImage} className="chat-message-profile" />
              )}
            </div>
          );
        }

        function ChatMessages({ chatMessages }) {
          const chatMessagesRef = useRef(null);

          // react will run this function:
          // after components is created
          // every time the component is updated
          useEffect(() => {
            const containerElem = chatMessagesRef.current;
            if (chatMessagesRef) {
              containerElem.scrollTop = containerElem.scrollHeight;
              // scrollTop = how far from the top should we scroll
              // scrollHeight = total height of the element
            }
          }, [chatMessages]);
          // [] Controls when useEffect runs
          // empty [] = only run once, after the component is created

          return (
            <div className="chat-messages-container"
            ref={chatMessagesRef}>
              {chatMessages.map((chatMessage) => {
                return (
                  <ChatMessage 
                    message={chatMessage.message} 
                    sender={chatMessage.sender} 
                    key={chatMessage.id}
                  />
                );
              })}
            </div>
          );
        }

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
