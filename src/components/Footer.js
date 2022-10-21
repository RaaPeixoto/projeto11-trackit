import styled from "styled-components"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../assets/style/progressBar.css"
import { Link } from "react-router-dom";
import { ProgressContext } from "../contexts/ProgressContext"
import { useContext } from "react";
export default function Footer () {
    const {progress} = useContext(ProgressContext);
    return (
        <FooterContainer>
            <StyledLink to ="/habitos"><p>Hábitos</p></StyledLink>
            <StyledLink  to ="/hoje"> <div> <CircularProgressbar value={progress} text="Hoje"/> </div></StyledLink>
            <StyledLink to ="/historico"> <p> Histórico</p></StyledLink>
        </FooterContainer>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const FooterContainer = styled.div `

width: 100%;
bottom:0;
right:0;
position:fixed; 
display:flex;
justify-content: space-between;
align-items:center;
padding: 0 36px;
height: 70px;
background: #FFFFFF;
    p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #52B6FF;
    }
    div {
        padding:6px;
    bottom: 10px;
    left: 50%;
    right: 50%;
    transform: translate(-50%,0%);
    position:absolute;
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 98.5px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #FFFFFF;

    }
`

