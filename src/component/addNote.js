import { Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../Context/AppProvider";

export default function AddNote({ addPopup, setAddPopup }) {
  const { user, setUser, note, setNote } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const addData = {
    title,
    description,
  };

  const addNote = async () => {
    if (!(title == "" && description == "")) {
      const id = await sessionStorage.getItem("id");
      const response = await fetch(`http://localhost:2500/add/${id}`, {
        method: "POST",
        body: JSON.stringify(addData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setNote([addData, ...note]);
      setAddPopup(false);
      toast.success(data.message);
    } else {
      toast.error("Fill Some Data");
    }
  };

  const handleClose = () => {
    setAddPopup(false);
  };

  return (
    <Dialog open={addPopup} onClose={handleClose}>
      <div className="text-click-2">
        <input
          type="string"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="note-text-field"
        ></input>
        <textarea
          placeholder="Take a note..."
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          className="note-text-field"
        ></textarea>
        <div className="add-btn">
          <Fab
            size="small"
            color="primary"
            onClick={() => addNote()}
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    </Dialog>
  );
}
