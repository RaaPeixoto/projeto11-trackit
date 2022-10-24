import styled from "styled-components"
import {CheckSquare} from "@styled-icons/boxicons-solid/CheckSquare"
export default function DayClicked ({clickedDay,historicClickedDay}){
    
  
    return (
       <PageContainer>
      
       <Title>{clickedDay}</Title>
       {historicClickedDay.map ((h)=>
       <HabitContainer key= {h.id}>
      
       <HabitTitle>{h.name}</HabitTitle>
       <CheckIcon isHabitDone = {h.done}/>
       </HabitContainer>
      
       )}
</PageContainer>
    )
}


const PageContainer =styled.div `
margin-top: 20px;
display:flex;
flex-direction:column;  
width:100%;

padding-bottom:100px;
`

const Title = styled.p `
margin-bottom: 10px;
font-family: 'Lexend Deca',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`
const HabitTitle = styled.p`

font-family: 'Lexend Deca',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
width:230px;
width:230px;
overflow-wrap: break-word;

`

const HabitContainer = styled.div `
margin-bottom:10px;
padding: 13px 15px 13px 13px;
display:flex;
justify-content: space-between;
align-items:center;
width: 100%;
min-height: 94px;
background: #FFFFFF;
border-radius: 5px;

`

const CheckIcon = styled(CheckSquare) `
color: ${props => props.isHabitDone?"#8FC549" :"#EBEBEB"};
width:80px;
`