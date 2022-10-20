import styled from "styled-components"

import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export default function HistoricPage() {


    return (
        
    <PageContainer>
        <NavBar/>
        

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