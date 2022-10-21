import styled from "styled-components"
import dayjs from 'dayjs'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import {CheckSquare} from "@styled-icons/boxicons-solid/CheckSquare"
import { AuthContext } from "../../contexts/AuthContext"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { useContext, useEffect, useState } from "react"
import { ProgressContext } from "../../contexts/ProgressContext"
export default function TodayPage () {
    
    const date = new Date(Date.UTC(dayjs().$y, dayjs().$M, dayjs().$D));
    const [todayHabitsList,setTodayHabitsList]= useState([])
    const weekday = ((new Intl.DateTimeFormat('pt-BR', { weekday: "long" }).format(date))).replace("-feira","");
    const day = ((new Intl.DateTimeFormat('pt-BR').format(date))).slice(0, -5);
    const {config} = useContext(AuthContext);
    const {progress,setProgress} = useContext(ProgressContext);

    useEffect (()=>{
        axios.get(`${BASE_URL}/habits/today`,config)
        .then(res => {
            setTodayHabitsList(res.data)
            doneHabitsPercentage (res.data)
            }
            )
        .catch(err=>console.log(err.response.data))
    },[])
   function doneHabitsPercentage(habits){
    let numberDoneHabits=(habits.filter((h)=>h.done===true))
    let percentage = numberDoneHabits.length/habits.length*100
    setProgress(percentage)
   }
    function checkHabit (done,id){
        if (done) {
            deleteHabit(id)
        } else {
           
            addHabitCheck(id)
        }
    }
    function deleteHabit(id){
        axios.post(`${BASE_URL}/habits/${id}/uncheck`,{},config)
        .then(() => {
            
           habitsRealod()
            })
        
        .catch(err => {
            console.log(err.data)
             
        })
    }

    function addHabitCheck (id) {
      
        axios.post(`${BASE_URL}/habits/${id}/check`,{},config)
        .then(() => {
            
           habitsRealod()
            })
        .catch(err => {
            console.log(config)
            console.log(err.response.data)
        })
    }

    function habitsRealod (){
        axios.get(`${BASE_URL}/habits/today`,config)
        .then(res => {
            setTodayHabitsList(res.data)
            doneHabitsPercentage (res.data)
        })
        .catch(err=>console.log(err.response.data))
    }

    return (
        
    <PageContainer>
        <NavBar/>
        <Title> {weekday[0].toUpperCase() + weekday.substring(1)} , {day}</Title>

        {progress===0?<NoProgress > Nenhum hábito concluído ainda </NoProgress>:<Progress> {progress}% dos hábitos concluídos </Progress> }
     
        
        {todayHabitsList.map ((h)=>  
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
        
        ) }
    

        <Footer/>
    </PageContainer>
    )
}

const PageContainer =styled.div `
padding: 92px 18px 100px  18px;
display:flex;

flex-direction:column;  
min-height:100vh;
background: #E5E5E5;
`

const Title = styled.p `
font-family: 'Lexend Deca',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`

const NoProgress = styled.p `

margin-top:2px;
margin-bottom:28px;
font-family: 'Lexend Deca',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
`

const HabitContainer = styled.div `
margin-bottom:10px;
padding: 13px 15px 13px 13px;
display:flex;
justify-content:center;
width: 340px;
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

const CheckIcon = styled(CheckSquare) `
color: ${props => props.isHabitDone?"#8FC549" :"#EBEBEB"};
width:80px;
`
const Progress = styled.p `
font-family: 'Lexend Deca',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #8FC549;
margin-top:2px;
margin-bottom:28px;
`

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
color: ${props => props.currentSequence===props.highestSequence && props.highestSequence==!0 ?"#8FC549" :"#666666"};
`