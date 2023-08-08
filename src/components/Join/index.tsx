import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import {
    ContainerStyled,
    TitleStyled,
    FormStyled,
    GroupStyled,
    InputStyled,
    ButtonStyled
} from './styled';

interface JoinProps {}

interface Values {
    name: string;
    room: string;
}

const Join: React.FC<JoinProps> = () => {
    const [values, setValues] = useState<Values>({ name: "", room: "" });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        const isDisabled = Object.values(values).some((value) => !value);

        if (isDisabled) {
            event.preventDefault();
        }
    };

    return (
        <ContainerStyled>
            <TitleStyled> Join </TitleStyled>
            <FormStyled>
                <GroupStyled>
                    <InputStyled
                        className='input'
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Username"
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </GroupStyled>
                <GroupStyled>
                    <InputStyled
                        className='input'
                        type="text"
                        name="room"
                        value={values.room}
                        placeholder="Room"
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </GroupStyled>
                <GroupStyled>
                    <Link to={`/chat?name=${values.name}&room=${values.room}`} onClick={handleClick}>
                        <ButtonStyled type='submit'>
                            Sign in
                        </ButtonStyled>
                    </Link>
                </GroupStyled>
            </FormStyled>
        </ContainerStyled>
    );
};

export default Join;
