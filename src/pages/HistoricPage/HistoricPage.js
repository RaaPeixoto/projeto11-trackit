import styled from "styled-components"
import { AuthContext } from "../../contexts/AuthContext"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { useContext, useEffect, useState } from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Calendar from 'react-calendar'
import "../../assets/style/calendarStyle.css"
import DayClicked from "./DayClicked"
import loadingPage from "../../assets/images/loadingPage.gif"

export default function HistoricPage() {

    const {config} = useContext(AuthContext);
    const[historic,setHistoric] =useState(null)
    const [clickedDay,setClickedDay] = useState (null)
    const [historicClickedDay, setHistoricClickedDay] = useState ([])
    
 
    useEffect (()=>{
        
        axios.get(`${BASE_URL}/habits/history/daily`,{ headers:{Authorization: `Bearer ${config}`}})
        .then(res => {
            setHistoric(res.data)
           
            }
            )
        .catch(err=>console.log(err.response.data))
    },[])

    function compareDate(date){
        const day = historic.map((a)=> a)
        let formatedDay= formatDate(date);
    for (let i=0; i< day.length; i++){

            if (formatedDay === day[i].day){
               let dayHabits= day[i].habits
              
               let isAllDone = true;
                for (let j =0; j<dayHabits.length; j++){
                   
                   isAllDone = isAllDone && dayHabits[j].done
                   
                }
                    if (isAllDone === true){
                        return "done"
                    } else { 
                        return "notDone"}
        
          
        }
      

    }
}
    function formatDate(date){
        let formatDate = new Intl.DateTimeFormat(
            'pt-BR', 
            {
              year: "numeric", 
              month: "2-digit", 
              day: "2-digit"
            }).format(date)
         return(formatDate) 
        
    }
    function selectDay(date){
        setHistoricClickedDay([])
       let formatedClickedDay= formatDate(date)
       setClickedDay(formatedClickedDay)
            const day = historic.map((a)=> a)
           
            for (let i=0; i< day.length; i++){
    
                if (formatedClickedDay === day[i].day){
                   let dayHabits= day[i].habits
                   setHistoricClickedDay(dayHabits)
                   }
                }
        
       
    }
  
    return (
        <>
    
        <NavBar/>
        {historic === null  ? 
          <Loading > <img src={loadingPage} alt="loading"/></Loading>
          :
          <PageContainer>
        <Title>Histórico</Title>
        <Calendar 
        tileClassName = { ({date})=>
        compareDate(date)
    }
        onClickDay = {(day)=> selectDay (day)}
        />
        {clickedDay===null?
        <></>
        :
        <DayClicked clickedDay={clickedDay} historicClickedDay={historicClickedDay}/>
    } </PageContainer>
    }
        
        <Footer/>
   </>
    )
}

const PageContainer =styled.div `
padding: 92px 18px 100px  18px;
display:flex;
flex-direction:column;  
align-items:center;
height:100vh;
background: #E5E5E5;
`
const Title = styled.div `
width:100%;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-bottom:11px;
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