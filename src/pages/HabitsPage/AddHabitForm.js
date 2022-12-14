import styled from "styled-components"
import { useState ,useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import loadingGif from "../../assets/images/loadingGif.gif"
export default function AddHabitForm ({setOpenForm,form,setForm}) {
const [loading,setLoading]=useState(false)
    const {config} = useContext(AuthContext);
    const WeekDays = [
  
        "D",
        "S",
        "T",
        "Q",
        "Q",
        "S",
        "S"

    
    ]
   
    function handleForm(e){
        const {name,value} = e.target
        setForm({ ...form, [name]: value })
    }
    function addDay(i){
        
        if (form.days.includes(i)){
            setForm({...form,days:form.days.filter((days)=>days!==i)})
        }else{
            setForm({...form,days:[...form.days,i]})
        }
    
    }
    function postHabit(e){
        e.preventDefault()
    
        
        axios.post(`${BASE_URL}/habits`,form,{ headers:{Authorization: `Bearer ${config}`}})
        .then(res => {
            setOpenForm(false)
            setForm({
                name: "",
                days: []
          
            })
        })
        .catch(err => {
            alert(err.response.data.message)
             setLoading(false) 
        })
        setLoading(true) 
    }
    return(
        <Form onSubmit={postHabit}>
        <input 
        disabled = {loading}
         type = "text"
         name ="name" 
         value ={form.name}
         onChange={handleForm}
        placeholder="nome do hábito"
        required
        />
        <DaysButtonsContainer>
        {WeekDays.map ((d,index)=> <DayButton type="button" disabled ={loading} key={index} index={index} selectedDays= {form.days}onClick ={()=> addDay(index)}> {d} </DayButton>)}
        </DaysButtonsContainer>

        <ActionsButtonsContainer> 
            <p onClick={()=> setOpenForm(false)}>Cancelar</p>
            <button type="submit" disabled = {loading}> {loading? <img src={loadingGif} alt ="icone carregando"/>:"Salvar"}</button>
            </ActionsButtonsContainer>
    </Form>

    )
}
const Form = styled.form`
margin-top:22px;
display:flex;
flex-direction:column;
padding:18px;
width:340px;
height:180px;
background: #FFFFFF;
border-radius: 5px;
    input{
    margin-bottom:8px;
    width: 303px;
    height: 45px;
    padding-left:11px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
        &::placeholder{
        font-family: 'Lexend Deca',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        }
        &:disabled{
            background: #F2F2F2;
        }
    }

`
const DaysButtonsContainer = styled.div`
display:flex;
`
const DayButton=styled.button`
 
        margin-right :4px;
        display:flex;
        justify-content:center;
        align-items:center;
        width: 30px;
        height: 30px;
        background:${props=> (props.selectedDays).includes(props.index)? "#CFCFCF": "#FFFFFF"}; 
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props=> props.selectedDays.includes(props.index)? "#FFFFFF": "#DBDBDB"}; 
    
`
const ActionsButtonsContainer = styled.div`
margin-top:29px;
display:flex;
width:100%;
justify-content:flex-end;
align-items: center;
    p{
    margin-right :23px;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #52B6FF;
    }
    button{
        display:flex;
        align-items:center;
        justify-content:center;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #FFFFFF;
        border:none;
        box-shadow:none;
        &:disabled{
            opacity: 0.7;
        }
    }
    img {
        width:40px
    }
`
