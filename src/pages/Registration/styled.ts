import styled from 'styled-components';

import { Form, Button } from 'antd';

export const StyledTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 20px;
`

export const StyledTitle = styled.p`
    margin: 0;
    font-size: 25px;
    font-weight: 600;
`

export const StyledRegistrationWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(120deg, #ffc4c0 0, #ffc5b9 6.25%, #ffc7b3 12.5%, #ffc9ad 18.75%, #ffcba8 25%, #ffcda4 31.25%, #ffd0a1 37.5%, #f9d29e 43.75%, #f2d59d 50%, #ebd89d 56.25%, #e3da9e 62.5%, #dbdc9f 68.75%, #d3dea2 75%, #cae0a6 81.25%, #c2e2aa 87.5%, #b9e4b0 93.75%, #b1e5b6 100%);
`

export const StyledForm = styled(Form)`
    width: 500px;
    height: auto;
    border: solid silver 2px;
    border-radius: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
`

export const StyledButtonWrapper = styled(Form.Item)`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
`

export const StyledButton = styled(Button)`
    width: 400px;
    height: 40px;
    border-radius: 16px;
    margin: 0;

    &:hover {
        background-color: #4096ff !important;
    }
`
