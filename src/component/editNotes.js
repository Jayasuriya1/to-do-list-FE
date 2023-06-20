import { Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../Context/AppProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default async function EditNote({ updatePopup,setUpdatePopup }) {
//   const { user, setUser, note, setNote } = useContext(AppContext);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const { userId, noteId } = details;

  
//   const index =
//     note &&
//     note.findIndex((data) => {
//       return data.id == noteId;
//     });

    // console.log("SelectedNote", details);

    // setTitle(details.title);
    // setDescription(details.description);

 

  // setTitle(selectedNote.title)
  // setDescription(selectedNote.description)

//   const editedData = {
//     title,
//     description,
//   };

  ///update/:id/:note_id
//   const editNote = async () => {
//     if (!(title == "" && description == "")) {
//       const id = await sessionStorage.getItem("id");
//       const response = await fetch(
//         `http://localhost:2500/update/${id}/${details.id}`,
//         {
//           method: "PUT",
//           body: JSON.stringify(editedData),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//     
//       setOpen(false);
//       toast.success(data.message);
//     } else {
//       toast.error("Fill Some Data");
//     }
//   };

//   const deleteNote = () => {};

  // const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setUpdatePopup(false);
  };

  return (
    <Dialog open={updatePopup} onClose={handleClose}>
      <div className="text-click-2">
        <input
          type="string"
          placeholder="Title"
        //   defaultValue={title}
        //   onChange={(e) => setTitle(e.target.value)}
          className="note-text-field"
        ></input>
        <textarea
          placeholder="Take a note..."
        //   defaultValue={description}
        //   onChange={(e) => setDescription(e.target.value)}
          rows="5"
          className="note-text-field"
        ></textarea>
        <div className="add-btn">
          <Fab
            size="small"
            color="primary"
            // onClick={() => deleteNote()}
            aria-label="add"
          >
            <DeleteIcon />
          </Fab>
          <Fab
            size="small"
            color="secondary"
            // onClick={() => editNote()}
            aria-label="edit"
          >
            <EditIcon />
          </Fab>
        </div>
      </div>
    </Dialog>
  );
}
