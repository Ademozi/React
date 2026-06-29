import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';

export function ChatMessage(props) {
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