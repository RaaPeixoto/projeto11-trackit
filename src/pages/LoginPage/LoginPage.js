import styled from "styled-components"
import logo from  "../../assets/images/logo.jpg"

import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
export default function LoginPage () {
return (
<PageContainer>
    <Logo src = {logo}/>
   <LoginForm/>
    <StyledLink to ="/cadastro"><SignUpMessage> Não tem uma conta? Cadastre-se!</SignUpMessage> </StyledLink>
</PageContainer>
)
}
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const PageContainer = styled.div `
    padding-top:68px ;
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
`

const Logo = styled.img `
    margin-bottom: 32px;
    width:180px;
`

const SignUpMessage= styled.p `
margin-top:25px;
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
`
