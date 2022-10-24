import { createContext, useState,useEffect,useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url"
import { AuthContext } from "./AuthContext"
export const ProgressContext = createContext({});


export const ProgressProvider = (props) => {
    const {config} = useContext(AuthContext);
    const [progress,setProgress] = useState (0)
    
    useEffect (()=>{
        axios.get(`${BASE_URL}/habits/today`,{ headers:{Authorization: `Bearer ${config}`}})
        .then(res => {
            doneHabitsPercentage (res.data)
            }
            )
        .catch(err=>console.log(err.response.data))
    },[])
    function doneHabitsPercentage(habits){
        if (habits.length === 0 ){
            setProgress (0)
        }else {
        let numberDoneHabits=(habits.filter((h)=>h.done===true))
        let percentage = numberDoneHabits.length/habits.length*100
        setProgress(percentage)}
       }
    
    return(
        <ProgressContext.Provider value = {{progress,setProgress}}>
            {props.children}
        </ProgressContext.Provider>
    )
}

