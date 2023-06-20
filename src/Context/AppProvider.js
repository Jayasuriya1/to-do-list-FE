import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null)

export default function AppProvider({children}){
    const [user,setUser] = useState(null)
    const [note,setNote] = useState(null)
    // const navigate = useNavigate();
    // const token = sessionStorage.getItem("token")

    // const logout = () => {
    //     sessionStorage.clear()
    //     navigate('/login')
    // }

    // const getUserData = async () => {
    //     try {
    //       const id = await sessionStorage.getItem("id");
    //         console.log("Step 1:",id);
    
    //       const response = await fetch(`http://localhost:2500/${id}`, {
    //         headers: { Authorization: `Bearer ${token}` },
    //       });
    //       const data = await response.json();
    //       console.log("step 2:",data)
    
    //     //   setDetails(data.user);
    //     //   setNote(data.user.notes);
    //       //   console.log("details-11", details);
    //       // setNote(details.notes)
    //       if (data.message == "User Data Fetched Successfully") {
    //         toast.success(data.message);
    //       } else if (
    //         data.message ==
    //         ("Token Experied" || "Token Not Found" || "User Does't Exist")
    //       ) {
    //         toast.error(data.message);
    //         logout();
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };


    // const getUserData = async()=>{
    //     try{
    //         const id = await sessionStorage.getItem("id")
    //         console.log(id)
            
    //         const response = await fetch(`http://localhost:2500${id}`,{
    //             headers:{Authorization:`Bearer ${token}`}
    //         });
    //         const data = await response.json()
    //         setUser(data)
    //         console.log(data)
    //         toast.success(data.message)
                
    //     }catch(error){
    //         if(error===400 ){
    //             toast.error(error.response.data.message)
    //             logout()
    //         }
    //     }
    // }

    // useEffect(()=>{
    //     if(token){
    //         getUserData()
    //         // navigate("/notes")
    //     }else{
    //         toast.error("Session Expired Login Again")
    //         logout()
        // }
        
    // },[])
    return(
        <AppContext.Provider
        value={{
            user,
            setUser,
            note,
            setNote
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const AppState = ()=>{
    return useContext(AppContext)
}