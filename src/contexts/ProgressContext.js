import { createContext, useState } from "react";

export const ProgressContext = createContext({});

export const ProgressProvider = (props) => {

    const [progress,setProgress] = useState (0)
 
    
    
    return(
        <ProgressContext.Provider value = {{progress,setProgress}}>
            {props.children}
        </ProgressContext.Provider>
    )
}

