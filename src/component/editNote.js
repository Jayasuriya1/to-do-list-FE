import { Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../Context/AppProvider";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EditNote({ updatePopup, setUpdatePopup,updateDetails,updateDetails2}) {
    // console.log("UpdateDetails-2:",updateDetails)
    // console.log("UpdateDetails2--totto:",updateDetails2)
    // console.log("UpdateDetails-3 title:",updateDetails.current.title)
    
  const { user, setUser, note, setNote } = useContext(AppContext);

  const[title,setTitle] = useState()

//   const [title, setTitle] = useState(updateDetails.current.title);
  const [description, setDescription] = useState();
  
  useEffect(()=>{
    if(title !== updateDetails.current.title){
      setTitle(updateDetails.current.title)
    }
  
    if(description !== updateDetails.current.description){
      setTitle(updateDetails.current.description)
    }
    console.log(title,description)

  },[])
  


  

  const editNote = async () => {
    if (!(title == "" && description == "")) {
      const editData = {
        id:updateDetails.current.id,
        title,
        description,
        color:updateDetails.current.color,
        lastEdited:new Date().toString()
      };
      console.log("editedData",editData)
      const id = await sessionStorage.getItem("id");
      const response = await fetch(`http://localhost:2500/update/${id}/${updateDetails.current.id}`, {
        method: "PUT",
        body: JSON.stringify(editData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const index = note.findIndex((data)=>{
        return data.id == updateDetails.current.id
    })
      note[index]= editData
      console.log("editedData:",editData)
      setUpdatePopup(false);
      toast.success(data.message);
    } else {
      toast.error("Fill Some Data");
    }
  };


  const deleteNote = async () => {
      const id = await sessionStorage.getItem("id");
      const response = await fetch(`http://localhost:2500/delete/${id}/${updateDetails.current.id}`, {
        method: "DELETE"
      });
      const data = await response.json();
      const filterData = note.filter((data)=>{
        return data.id !== updateDetails.current.id
    })
      console.log("FilterData",filterData)
      setNote(filterData);
      setUpdatePopup(false);
      toast.success(data.message);
  };

  const handleClose = () => {
    setUpdatePopup(false);
  };

  return (
    <Dialog open={updatePopup} onClose={handleClose}>
      <div className="text-click-2">
        <input
          type="string"
          placeholder="Title"
          // defaultValue={title}
          defaultValue={updateDetails.current.title}
          
          onChange={(e) => setTitle(e.target.value)}
          className="note-text-field"
        ></input>
        {/* {console.log("title",title)} */}
        <textarea
          placeholder="Take a note..."
          // defaultValue={description}
          defaultValue={updateDetails.current.description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          className="note-text-field"
        ></textarea>
        <div className="update-btn" >
        <Fab
            size="small"
            color="error"
            onClick={() => deleteNote()}
            aria-label="delete"
            
          >
            <DeleteIcon />
          </Fab>
          <Fab
            size="small"
            color="secondary"
            onClick={() => editNote()}
            aria-label="edit"
          >
            <EditIcon />
          </Fab>
        </div>
      </div>
    </Dialog>
  );
}
