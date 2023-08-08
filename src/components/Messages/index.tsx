import react from 'react'

import {
    MessagesStyled,
    MessageStyled,
    UserStyled,
    TextStyled
} from './styled'

interface Message {
  user: {
    name: string;
  };
  message: string;
}

interface MessagesProps {
  messages: Message[];
  name: string;
}

const Messages: React.FC<MessagesProps> = ({ messages, name }) => {
  return (
    <MessagesStyled>
      {messages.map(({ user, message }, i) => {
        const itsMe = user.name.trim().toLowerCase() === name.trim().toLowerCase();

        return (
          <MessageStyled key={i} itsMe={itsMe}>
            {!itsMe && <UserStyled>{user.name}</UserStyled>}
            <TextStyled itsMe={itsMe}>{message}</TextStyled>
          </MessageStyled>
        );
      })}
    </MessagesStyled>
  );
};

export default Messages;
