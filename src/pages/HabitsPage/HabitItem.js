import styled from "styled-components"
import {Trash} from "@styled-icons/bootstrap/Trash"

export default function HabitItem({habitName,habitDays}){
    const days = [
        {name:"D",value:0},
        {name:"S",value:1},
        {name:"T",value:2},
        {name:"Q",value:3},
        {name:"Q",value:4},
        {name:"S",value:5},
        {name:"S",value:6}
    
    ]
   console.log(habitDays)     
return (
    <HabitsContainer>
            <p>{habitName}</p>
           {/*  Vai vir de api os dias para o map  */}
            <div>{days.map((d)=><Day key ={d.index} index={d.value} habitDays={habitDays}>{d.name}</Day>)} </div>
            <DeletHabit/>
    </HabitsContainer> 
         
)

}

const HabitsContainer= styled.div `
margin-top :29px;   
position:relative;
display:flex;
flex-direction:column;
padding: 13px 15px;
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
    p{
        font-family: 'Lexend Deca',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom:8px;
    }
    div{
        display:flex;
      
    }
`
const Day = styled.div`
    margin-right:4px;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 30px;
    height: 30px;
    background: ${props=> (props.habitDays).includes(props.index)? "#CFCFCF": "#FFFFFF"}; 
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: ${props=> props.habitDays.includes(props.index)? "#FFFFFF": "#DBDBDB"}; 
`
const DeletHabit = styled(Trash) `
position:absolute;
top:11px;
right:11px;
color: #666666;
width:18px;
`