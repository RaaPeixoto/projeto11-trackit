import { AuthContext } from "../../contexts/AuthContext"
import { AvatarContext } from "../../contexts/AvatarContext"
import axios from "axios"
import { useState,useContext } from "react"
import FormItem from "../../components/Form"
import loadingGif from "../../assets/images/loadingGif.gif"
import { BASE_URL } from "../../constants/url"
import { useNavigate } from "react-router-dom"


export default function LoginForm (){
    let navigate = useNavigate()
    const {setConfig} = useContext(AuthContext);
    const {setAvatar} = useContext(AvatarContext);
    const [loading,setLoading] = useState (false)
   
    const [form, setForm] = useState({
        email: "",
        password: "",
  
    })
    function handleForm(e){
        const {name,value} = e.target
        setForm({ ...form, [name]: value })
        
    }
    function login (e){
        e.preventDefault()
        
        axios.post(`${BASE_URL}/auth/login`,form)
        .then(res => {
            
            setConfig (res.data.token)
            setAvatar (res.data.image) 
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("img",res.data.image)
         
            navigate("/hoje")
           
        })
        .catch(err => {
            alert(err.response.data.message)
            setLoading(false)
        })
        setLoading(true)
    }
    return (
    <FormItem>
        <form onSubmit={login}>
            <input 
            type = "email"
             name ="email" 
             value ={form.email}
             onChange={handleForm}
             placeholder="email"
             required
             disabled = {loading}
            />
            <input 
            name ="password"
            value ={form.password}
            onChange={handleForm}
            type="password"
            required
            placeholder="senha"
            disabled = {loading}
            />
            <button type="submit" disabled = {loading}> {loading? <img src={loadingGif} alt ="icone carregando"/>:"Entrar"}</button>
        </form>
    </FormItem>
)
    
}