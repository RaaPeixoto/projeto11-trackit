
import styled from "styled-components"
import AddHabitForm from "./AddHabitForm"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import HabitItem from "./HabitItem"

export default function HabitsPage (){
    const [habitsList,setHabitsList] = useState ([])
    const {config} = useContext(AuthContext);
    const [openForm,setOpenForm]=useState (false)
    const [form, setForm] = useState({
        name: "",
	    days: []
  
    })
    useEffect (()=>{
        axios.get(`${BASE_URL}/habits`,config)
        .then(res => setHabitsList(res.data))
        .catch(err=>console.log(err.response.data))
    },[openForm])
    return (
        <PageContainer>
            <NavBar/>
            <TitleContainer> 
                <p> Meus hábitos</p>
                <AddHabits onClick={()=>setOpenForm(true)}>+</AddHabits>
            </TitleContainer>
             {openForm ? <AddHabitForm form = {form} setForm={setForm} setOpenForm={setOpenForm}/>: <></>}
            
              
            {habitsList.length === 0? 
            <NoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </NoHabits> 
            : 
            <>
            {habitsList.map ((h)=> <HabitItem key={h.id} setHabitsList={setHabitsList} habitId ={h.id} habitName={h.name} habitDays={h.days}/>)}
            </>
            }
            
            
            <Footer/>
        </PageContainer>
    )
}


const PageContainer =styled.div `
padding: 92px 18px 100px  18px;
display:flex;
align-items:center;
flex-direction:column;  
min-height:100vh;
background: #E5E5E5;
`

const TitleContainer = styled.div `
width: 340px;
display:flex;
justify-content:space-between;

p{
    font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}

`

const AddHabits = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Lexend Deca',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 26.976px;

color: #FFFFFF;
`



const NoHabits = styled.p`
    width: 340px;
    margin-top :28px;   
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #666666;
`


