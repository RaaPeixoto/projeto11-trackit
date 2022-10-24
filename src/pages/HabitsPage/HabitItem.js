import styled from "styled-components"
import { Trash } from "@styled-icons/bootstrap/Trash"
import { BASE_URL } from "../../constants/url"
import { AuthContext } from "../../contexts/AuthContext"
import axios from "axios"
import { useContext } from "react"
export default function HabitItem({ habitName, habitDays, habitId, setHabitsList }) {
    const days = [
        "D",
        "S",
        "T",
        "Q",
        "Q",
        "S",
        "S"

    ]
    const { config } = useContext(AuthContext);
    function confirmDeleteHabit(habitId, habitName) {
        if (window.confirm(`Você tem certeza que deseja deletar : ${habitName}?`)) {
            deleteHabit(habitId)
        }
    }
    function deleteHabit(habitId) {

        axios.delete(`${BASE_URL}/habits/${habitId}`, { headers: { Authorization: `Bearer ${config}` } })
            .then(() => {

                habitsRealod()
            })

            .catch(err => {
                alert(err.response.data.message)

            })

    }
    function habitsRealod() {
        axios.get(`${BASE_URL}/habits`, { headers: { Authorization: `Bearer ${config}` } })
            .then(res => setHabitsList(res.data))
            .catch(err => console.log(err.response.data))
    }
    return (
        <HabitsContainer>
            <p>{habitName}</p>

            <div>{days.map((d, index) => <Day key={index} index={index} habitDays={habitDays}>{d}</Day>)} </div>
            <DeletHabit onClick={() => confirmDeleteHabit(habitId, habitName)} />
        </HabitsContainer>

    )

}

const HabitsContainer = styled.div`
margin-top :29px;   
position:relative;
display:flex;
flex-direction:column;
padding: 13px 15px;
width: 340px;
min-height: 91px;
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
        width:230px;
        overflow-wrap: break-word;
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
    background: ${props => (props.habitDays).includes(props.index) ? "#CFCFCF" : "#FFFFFF"}; 
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: ${props => props.habitDays.includes(props.index) ? "#FFFFFF" : "#DBDBDB"}; 
`
const DeletHabit = styled(Trash)`
position:absolute;
top:11px;
right:11px;
color: #666666;
width:18px;
`