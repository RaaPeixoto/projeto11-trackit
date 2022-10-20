import styled from "styled-components"
import { useState ,useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
export default function AddHabitForm ({setOpenForm}) {

    const {config} = useContext(AuthContext);
    const WeekDays = [
        {name:"D",value:0},
        {name:"S",value:1},
        {name:"T",value:2},
        {name:"Q",value:3},
        {name:"Q",value:4},
        {name:"S",value:5},
        {name:"S",value:6}
    ]
    const [form, setForm] = useState({
        name: "",
	    days: []
  
    })
   
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
    
        
        axios.post(`${BASE_URL}/habits`,form,config)
        .then(res => {
            
            console.log(res.data) 
            setOpenForm(false)
           
        })
        .catch(err => {
            console.log(err.data)
            /* setLoading(false) */
        })
        /* setLoading(true) */
    }
    return(
        <Form onSubmit={postHabit}>
        <input 
         type = "text"
         name ="name" 
         value ={form.name}
         onChange={handleForm}
        placeholder="nome do hábito"
        required
        />
        <DaysButtonsContainer>
        {WeekDays.map ((d,index)=> <DayButton key={index} index={index} selectedDays= {form.days}onClick ={()=> addDay(index)}> {d.name} </DayButton>)}
        </DaysButtonsContainer>

        <ActionsButtonsContainer> 
            <p onClick={()=> setOpenForm(false)}>Cancelar</p>
            <button type="submit"> Salvar</button>
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
    }

`


const DaysButtonsContainer = styled.div`
display:flex;
`
const DayButton=styled.div`
 
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
    }
`
