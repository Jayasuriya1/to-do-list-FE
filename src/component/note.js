import React, { useContext, useEffect, useRef, useState } from "react";
import BaseApp from "../baseApp";
import { AppContext } from "../Context/AppProvider";
import AddNote from "./addNote";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EditNote from "./editNote";


export default function Note(){
    const [loading,setLoading] =useState(true)
    const {user,setUser,note,setNote} =useContext(AppContext)
    const navigate = useNavigate();

    const [addPopup, setAddPopup] = useState(false);
    const [updatePopup, setUpdatePopup] = useState(false);
    const [updateDetails2 ,setUpdateDetails2] = useState({})
    const updateDetails = useRef({})

    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    const logout = () => {
        sessionStorage.clear();
        navigate("/login");
      };

      const getUserData = async () => {
        try {
            const id = sessionStorage.getItem("id");
            const token = sessionStorage.getItem("token");
          const response = await fetch(`http://localhost:2500/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
        //   const response = await fetch(`http://localhost:2500/${id}`, {
        //     headers: { Authorization: `Bearer ${token}` },
        //   });
          const data = await response.json();
          setUser(data)
          console.log("consoling on useEffect-User-",user)
          setNote(data.user.notes)
          console.log("consoling on useEffect-Notes-",note)
          setLoading(false)
          if (data.message == "User Data Fetched Successfully") {
            toast.success(data.message);
          } else if (
            data.message ==
            ("Token Experied" || "Token Not Found" || "User Does't Exist")
          ) {
            toast.error(data.message);
            logout();
          }
        } catch (error) {
          console.log(error);
        }
      };

      const updateData = (note_id,data)=>{
        setUpdateDetails2(data)
        console.log("setUpdateDetails2-",updateDetails2)
        const id = sessionStorage.getItem("id");
        console.log("node_id:",note_id)
        const selectedNote = note.find((data)=>{
          return data.id === note_id
        })
        console.log(selectedNote)
        
        updateDetails.current=selectedNote
        console.log("Details:",updateDetails)
        setUpdatePopup(true)
      }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
          getUserData();
        } else {
          toast.error("Session Expired Login Again");
          logout();
        }
      }, []);

      useEffect(() => {
       if(user !== null){
        if (user.message == "User Data Fetched Successfully") {
            toast.success(user.message);
          } else if (
            user.message ==
            ("Token Experied" || "Token Not Found" || "User Does't Exist")
          ) {
            toast.error(user.message);
            logout();
          }
       }
      }, [user]);

    if(loading) return <h1>LOADING.....</h1>
    return(
        <BaseApp>
            <div className="note-container">
        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col-6 text-field-container justify-content-center">
              <div onClick={()=>setAddPopup(true)} className="text-click">
                <span>Take a note...</span>
              </div>
              <AddNote addPopup={addPopup} setAddPopup={setAddPopup}/>
            </div>
          </div>
        </div>
         {/* details={details} setDetails={setDetails} */}
        {/* <EditNote updatePopup={updatePopup} setUpdatePopup={setUpdatePopup} /> */}
        <EditNote updatePopup={updatePopup} setUpdatePopup={setUpdatePopup} updateDetails2={updateDetails2} updateDetails={updateDetails}/>
        <div className="container">
          <div className="row justify-content-center">
           
                    {/* {console.log("user",user)} */}
            {note && note.map((data, index) => (
              <div key={data.id} onClick={()=>updateData(data.id,data)}  className="col-10 col-sm-5 col-lg-2 noteee">
                <b>{data.title}</b>
                <p>{data.description}</p>
              </div>
            ))}
            {/* {console.log("console note", note)} } */}
            {/* {console.log("console", details)} */}
            <div className="col-10 col-sm-5 col-lg-2 noteee">
                        <b>Title</b>
                        <p>Ut nulla ad magna laborum ullamco. cididunt aliquip officia aliqua est in nostrud. Labmet reprehenderit minim qui reprehenderit quis. Dolor tempor nulla laborum veniam laboris cupidatat et id ut aute commodo duis. Est sint fugiat eu nostrud labore.</p>
            </div>
          </div>
        </div>
        </div>
        </BaseApp>
    )
}