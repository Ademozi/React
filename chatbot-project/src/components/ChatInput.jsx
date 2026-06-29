import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingSpinner from '../assets/loading-spinner.gif';



export function ChatInput({ chatMessages, setChatMessages }) {
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