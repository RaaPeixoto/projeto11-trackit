import styled from "styled-components"
import {CheckSquare} from "@styled-icons/boxicons-solid/CheckSquare"
export default function TodayHabitItem ({h,checkHabit}){
    return(
        <HabitContainer key={h.id}> 
        <div>
            <HabitTitle> {h.name}</HabitTitle>
            <HabitProgress> 
            <p>Sequência atual: <CurrentSequence id={h.id} isHabitDone={h.done}>{h.currentSequence}</CurrentSequence></p> 
            <p>Seu recorde: <HighestSequence currentSequence = {h.currentSequence} highestSequence= {h.highestSequence}>{h.highestSequence}</HighestSequence>  </p>
            </HabitProgress>  
        </div>
        <CheckIcon id={h.id} isHabitDone={h.done} onClick={()=>checkHabit(h.done,h.id)}/>
    </HabitContainer>
    )
}


const HabitTitle = styled.p`
margin-bottom: 7px;
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
const HabitProgress = styled.div `
p{
width: 146px;
font-family: 'Lexend Deca',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
color: #666666;
}

`
const CurrentSequence = styled.span`
color: ${props => props.isHabitDone?"#8FC549" :"#666666"};
`

const HighestSequence = styled.span`
color: ${props => props.currentSequence===props.highestSequence && props.highestSequence ==! 0 ?"#8FC549" :"#666666"};
`

const CheckIcon = styled(CheckSquare) `
color: ${props => props.isHabitDone?"#8FC549" :"#EBEBEB"};
width:80px;
`
const HabitContainer = styled.div `
margin-bottom:10px;
padding: 13px 15px 13px 13px;
display:flex;
justify-content: space-between;
width: 100%;
min-height: 94px;
background: #FFFFFF;
border-radius: 5px;
div {
    display:flex;
    flex-direction:column;
    width:208px;
    margin-right: 38px;
}
`