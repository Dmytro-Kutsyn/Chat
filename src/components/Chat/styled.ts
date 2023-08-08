import styled from 'styled-components';

export const WrapperStyled = styled.div`
    width: 400px;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    padding: 15px 0;
`

export const HeaderStyled = styled.div`
    width: 100%;
    color: #fff;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`

export const TitleStyled = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`

export const LeftStyled = styled.button`
    background: rgb(253, 73, 73);
    border-radius: 6px;
    font-size: 14px;
    padding: 10px;
    color: #fff;
    cursor: pointer;
    border: none;
`

export const MessagesWrapperStyled = styled.div`
    flex-grow: 1;
    width: 100%;
    color: #fff;
    font-size: 18px;
    max-height: 440px;
    background: rgb(35, 35, 35);
    padding: 20px;
    position: relative;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
`

export const FormStyled = styled.form`
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    background: rgb(51, 51, 51);
    justify-content: space-between;
    height: 80px;
    padding: 0 20px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
`

export const InputWrapperStyled = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 18px;
    font-weight: 500;

    input {
        width: 100%;
        height: 100%;
        color: #fff;
        font-weight: 500;
        border: none;
        background: none;
        outline: none;
        font-size: 16px;
        font-family: Rubik, Roboto, sans-serif;
    }
`

export const EmojiStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`

export const ImgWrapperStyled = styled.div`
    width: 40px;
    cursor: pointer;

    img {
        vertical-align: middle;
    }
`

export const ButtonWrapperStyled = styled.div`
    text-align: center;
    cursor: pointer;
    color: #fff;

    button {
        border: none;
        outline: none;
        color: rgb(48, 43, 43);
        font-family: Rubik, Roboto, sans-serif;

        background: #0d49d7;
        border-radius: 6px;
        font-size: 14px;
        padding: 10px 18px;
        color: #fff;
        cursor: pointer;
        border: none;
    }
`
