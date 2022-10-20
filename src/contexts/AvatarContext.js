import { createContext, useState } from "react";

export const AvatarContext = createContext({});

export const AvatarProvider = (props) => {

    const [avatar,setAvatar] = useState ({
        
        })
 
    
    
    return(
        <AvatarContext.Provider value = {{avatar,setAvatar}}>
            {props.children}
        </AvatarContext.Provider>
    )
}