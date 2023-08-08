import styled from 'styled-components';

export const MessagesStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

export const MessageStyled: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 5px;
    width: 100%;

    ${(props: any) => props.itsMe && {
        ...{
            'align-items': 'flex-end;'
        }
    }};
`

export const UserStyled = styled.span`
    align-items: flex-start;
    font-size: 14px;
    color: rgb(176, 176, 176);
`

export const TextStyled: any = styled.div`
    padding: 10px;
    border-radius: 12px;
    font-size: 15px;
    color: #fff;

    ${(props: any) => props.itsMe ? {
        ...{
            background: '#0d49d7;',
            'align-items': 'flex-end;'
        }
    }: {
        background: '#514c4c;'
    }};
`
