import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'

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

export default ChatMessages;