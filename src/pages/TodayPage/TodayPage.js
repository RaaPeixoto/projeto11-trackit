import styled from "styled-components"
import dayjs from 'dayjs'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import {CheckSquare} from "@styled-icons/boxicons-solid/CheckSquare"
export default function TodayPage () {
const date = new Date(Date.UTC(dayjs().$y, dayjs().$M, dayjs().$D));

const weekday = (new Intl.DateTimeFormat('pt-BR', { weekday: "long" }).format(date));
const day = (new Intl.DateTimeFormat('pt-BR').format(date));

    return (
        
    <PageContainer>
        <NavBar/>
        <Title> {weekday[0].toUpperCase() + weekday.substring(1)} , {day}</Title>
        <NoProgress> Nenhum hábito concluído ainda </NoProgress> {/* quando não tem nenhum hábito concluido */}
        <Progress> 67% dos hábitos concluídos </Progress> {/* porcentagem virá da API */}

        <HabitContainer> 
            <div>
                <HabitTitle> Estudaaaar</HabitTitle>
                <HabitProgress> 
                Sequência atual: 3 dias
                Seu recorde: 5 dias
                </HabitProgress>
                
                
            </div>
            <CheckIcon/>
        </HabitContainer>

        <HabitContainer> 
            <div>
                <HabitTitle> Estudaaaar</HabitTitle>
                <HabitProgress> 
                Sequência atual: 3 dias
                Seu recorde: 5 dias
                </HabitProgress>
                
                
            </div>
            <CheckIcon/>
        </HabitContainer>

        <Footer/>
    </PageContainer>
    )
}

const PageContainer =styled.div `
padding: 92px 18px 100px  18px;
display:flex;

flex-direction:column;  
height:100vh;
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
display:none;
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
color:#EBEBEB;
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
`
const HabitProgress = styled.p `
width: 146px;
font-family: 'Lexend Deca',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
color: #666666;

`
