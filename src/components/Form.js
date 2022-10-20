import styled from "styled-components";

export default function FormItem (props) {
    return(
    <FormContainer>
    {props.children}
    </FormContainer>)
}

const FormContainer = styled.div `

    form {
        display:flex;
        flex-direction:column;
        align-items:center;
        
    }
    input{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;   
        padding-left:11px;
        margin-bottom:6px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder{
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        }
        &:disabled{
        background: #F2F2F2;
        border: 1px solid #D5D5D5;
        }
    }
    button {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        box-shadow:none;
        border:none;
        &:disabled{
        background: #F2F2F2;
        border: 1px solid #D5D5D5;
        background: #52B6FF;
        opacity: 0.7;
        }
        img {
            width:70px;
        }
    }

`