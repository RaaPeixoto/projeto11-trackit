import styled from "styled-components"
import dayjs from 'dayjs'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { AuthContext } from "../../contexts/AuthContext"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { useContext, useEffect, useState } from "react"
import { ProgressContext } from "../../contexts/ProgressContext"
import TodayHabitItem from "./TodayHabitItem"
import loadingPage from "../../assets/images/loadingPage.gif"
export default function TodayPage () {
    
    const date = new Date(dayjs().$y, dayjs().$M, dayjs().$D); 
    
    const [todayHabitsList,setTodayHabitsList]= useState(null)
    const weekday = ((new Intl.DateTimeFormat('pt-BR', { weekday: "long" }).format(date))).replace("-feira","");
    const day = ((new Intl.DateTimeFormat('pt-BR').format(date))).slice(0, -5);
    const {config} = useContext(AuthContext);
    const {progress,setProgress} = useContext(ProgressContext);
  
    
    useEffect (()=>{
        axios.get(`${BASE_URL}/habits/today`,{ headers:{Authorization: `Bearer ${config}`}})
        .then(res => {
            setTodayHabitsList(res.data)
            doneHabitsPercentage (res.data)
            }
            )
        .catch(err=>console.log(err.response.data))
    },[])
   function doneHabitsPercentage(habits){
    if (habits.length === 0 ){
        setProgress (0)
    }else {
    let numberDoneHabits=(habits.filter((h)=>h.done===true))
    let percentage = numberDoneHabits.length/habits.length*100
    setProgress(percentage)}
   }
    function checkHabit (done,id){
        if (done) {
            deleteHabit(id)
        } else {
           
            addHabitCheck(id)
        }
    }
    function deleteHabit(id){
        axios.post(`${BASE_URL}/habits/${id}/uncheck`,{},{ headers:{Authorization: `Bearer ${config}`}})
        .then(() => {
            
           habitsRealod()
            })
        
        .catch(err => {
            alert(err.response.data.message)
             
        })
    }

    function addHabitCheck (id) {
      
        axios.post(`${BASE_URL}/habits/${id}/check`,{},{ headers:{Authorization: `Bearer ${config}`}})
        .then(() => {
            
           habitsRealod()
            })
        .catch(err => {
           
            alert(err.response.data.message)
        })
    }

    function habitsRealod (){
        axios.get(`${BASE_URL}/habits/today`,{ headers:{Authorization: `Bearer ${config}`}})
        .then(res => {
            setTodayHabitsList(res.data)
            doneHabitsPercentage (res.data)
        })
        .catch(err=>console.log(err.response.data))
    }

    return (
        
    <>
        <NavBar/>
        {todayHabitsList=== null  ? 
        <Loading > <img src={loadingPage} alt="loading"/></Loading>
        :
        <PageContainer>
        <Title> {weekday[0].toUpperCase() + weekday.substring(1)}, {day}</Title>

{progress===0?<NoProgress > Nenhum hábito concluído ainda </NoProgress>:<Progress> {progress}% dos hábitos concluídos </Progress> }

{todayHabitsList.map ((h)=>  
 <TodayHabitItem key={h.id} h={h} checkHabit={checkHabit}/> 

) }
         </PageContainer>
        
        }
        
    
        <Footer/>
  </>
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
const Loading = styled.div `
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
background: #E5E5E5;
img{
width: 200px;}

`