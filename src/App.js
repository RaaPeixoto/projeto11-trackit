
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/style/GlobalStyle"
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {
  

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/cadastro" element={<SignUpPage/>}/>
      <Route path="/habitos" element={<HabitsPage/>}/>
      <Route path="/hoje" element={<TodayPage/>}/>
      <Route path="/historico" element={<HistoricPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
