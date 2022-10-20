import styled from "styled-components"
import { useContext } from "react"
import { AvatarContext } from "../contexts/AvatarContext";

export default function NavBar (){
    const {avatar} = useContext(AvatarContext);
    return (
        <Container>
            <Logo>TrackIt</Logo>
            <Avatar src={avatar}/>
        </Container>
    )
}

const Container = styled.div `

width: 100%;
height: 70px;
position:absolute;
display:flex;
justify-content:space-between;
padding: 9px 18px ;
left: 0px;
top: 0px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const Logo = styled.p `

font-family: 'Playball', cursive;
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
`

const Avatar = styled.img `
border-radius: 98.5px;
width: 51px;
`