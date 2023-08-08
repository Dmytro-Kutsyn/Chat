import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';

import { Join } from '../../components';
import Chat from '../../components/Chat';

import {
    WrapperStyled
} from './styled'

const socket: Socket = io('http://localhost:5000');

interface Message {
    user: {
        name: string;
    };
    message: string;
}

interface ChatParams {
    name: string;
    room: string;
}

const ChatPage = () => {
    const { search } = useLocation();
    const [isShowChat, setShowChat] = useState<boolean>(false);
    const [state, setState] = useState<Message[]>([]);
    const [params, setParams] = useState<{ name: string; room: string }>({ name: '', room: '' });

    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(search)) as unknown as ChatParams;

        setParams(searchParams);

        if (!!searchParams.name && !!searchParams.room) {
            socket.emit('join', searchParams);
            setShowChat(true);
        } else {
            setState([]);
            setShowChat(false);
        }
    }, [search]);

    useEffect(() => {
        socket.on("message", ({ data }: { data: Message }) => {
            setState((prevState) => [...prevState, data]);
        });
    }, []);

    return (
        <WrapperStyled>
            {isShowChat ? (
                <Chat params={params} state={state} socket={socket} />
            ) : (
                <Join />
            )}
        </WrapperStyled>
    );
}

export default ChatPage;
