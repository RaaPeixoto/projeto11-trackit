import { createContext, useState, useEffect } from "react";


export const AvatarContext = createContext({});

export const AvatarProvider = (props) => {

    const [avatar,setAvatar] = useState ({
        
        })
        
        useEffect (()=>{
            const imgStorage= localStorage.getItem("img")
           
            if (imgStorage){
                
              setAvatar(imgStorage)
            } else {
              setAvatar({})
            }
            
          },[])
    
    return(
        <AvatarContext.Provider value = {{avatar,setAvatar}}>
            {props.children}
        </AvatarContext.Provider>
    )
}