import React, { useState } from 'react'
import EmojiPiker, { Theme } from 'emoji-picker-react'
import { Socket } from 'socket.io-client';

import { Messages } from '../index'
import icon from '../../images/emoji.svg'

import {
    LeftStyled,
    FormStyled,
    TitleStyled,
    EmojiStyled,
    HeaderStyled,
    WrapperStyled,
    ImgWrapperStyled,
    InputWrapperStyled,
    ButtonWrapperStyled,
    MessagesWrapperStyled
}  from './styled'

interface ChatProps {
    socket: Socket;
    params: {
        name: string;
        room: string;
    };
    state: Array<{
        user: {
            name: string;
        };
        message: string;
    }>;
}

const Chat: React.FC<ChatProps> = (props) => {
    const [message, setMessage] = useState<string>("");
    const [isOpen, setOpen] = useState<boolean>(false);

    const hanleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setMessage(value);
    const onFocus = () => setOpen(false);
    const onEmojiClick = ({ emoji }: { emoji: string }) => setMessage(`${message} ${emoji}`);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!message) return;
        props.socket.emit("sendMessage", { message, params: props.params });
        setMessage("");
        setOpen(false);
    };

    return (
        <WrapperStyled>
            <HeaderStyled>
                <TitleStyled>
                    {props.params.room}
                </TitleStyled>
                <LeftStyled>
                    left the room
                </LeftStyled>
            </HeaderStyled>
            <MessagesWrapperStyled>
                <Messages messages={props.state} name={props.params.name} />
                {isOpen &&
                    <EmojiStyled>
                        <EmojiPiker
                            onEmojiClick={onEmojiClick}
                            theme={Theme.AUTO}
                            searchDisabled
                            height={477}
                            width="439px"
                            lazyLoadEmojis={true}
                            previewConfig={{
                                defaultCaption: "Pick one!",
                                defaultEmoji: "1f92a"
                            }}
                            skinTonesDisabled
                        />
                    </EmojiStyled>
                }
            </MessagesWrapperStyled>
            <FormStyled
                onSubmit={handleSubmit}
            >
                <InputWrapperStyled>
                    <input
                        type="text"
                        onFocus={onFocus}
                        name="message"
                        value={message}
                        placeholder="What do you want to say?"
                        onChange={hanleChange}
                        autoComplete="off"
                        required
                    />
                </InputWrapperStyled>
                <ImgWrapperStyled>
                    <img src={icon} alt="" onClick={() => setOpen(!isOpen)} />
                </ImgWrapperStyled>
                <ButtonWrapperStyled>
                    <button type="submit">Send</button>
                </ButtonWrapperStyled>
            </FormStyled>
        </WrapperStyled>
    );
};

export default Chat;
