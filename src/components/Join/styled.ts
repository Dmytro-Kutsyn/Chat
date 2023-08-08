import styled from 'styled-components';

export const ContainerStyled = styled.div`
    width: 370px;
    height: 300px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
`

export const TitleStyled = styled.h1`
    font-size: 32px;
    line-height: 48px;
    margin: 0;
    text-align: center;
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-top: 20px;
`

export const GroupStyled = styled.div`
    min-width: 320px;
    height: 48px;
`

export const InputStyled = styled.input`
    width: 98%;
    height: 100%;
    border-radius: 8px;
    border: solid silver 1px;
    text-indent: 20px;
    font-size: 16px;
`

export const ButtonStyled = styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    background: #0d49d7;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
`
