import axios from "axios"
import { useState } from "react"
import FormItem from "../../components/Form"
import loadingGif from "../../assets/images/loadingGif.gif"
import { BASE_URL } from "../../constants/url"
import { useNavigate } from "react-router-dom"
export default function SignUpForm () {
    const navigate = useNavigate()
    const [loading,setLoading] = useState (false)
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        image: ""
        
    })
    function handleForm(e){
        const {name,value} = e.target
        setForm({ ...form, [name]: value })
    }
    function signUp(e){
        e.preventDefault()
        
        axios.post(`${BASE_URL}/auth/sign-up`,form)
        .then(res => {
            navigate("/")
        })
        .catch(err => {
            alert(err.response.data.message)
            setLoading(false)
        })
        setLoading(true)
    }
    return (

        <FormItem>
            <form onSubmit={signUp}>
            <input 
                name ="email" 
                value ={form.email}
                onChange={handleForm}
                placeholder="email"
                type = "text"
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
            <input 
            name = "name"
            value ={form.name}
            onChange={handleForm}
            type="text"
            required
            placeholder="nome"
            disabled = {loading}
            />
            <input 
            name="image"
             value ={form.image}
             onChange={handleForm}
             type="link"
             required
            placeholder="foto"
            disabled = {loading}
            />
            <button type="submit" disabled = {loading}> {loading? <img src={loadingGif} alt ="icone carregando"/>:"Cadastrar"}</button>
            </form>
        </FormItem>
    
    )
}
