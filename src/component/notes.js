// import React, { useContext, useEffect, useState } from "react";
// import BaseApp from "../baseApp";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// import { Dialog } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import EditNotes from "./addNote";
// import AddNote from "./addNote";
// import AppProvider, { AppContext, AppState } from "../Context/AppProvider";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditNote from "./editNote";

// // const userSchemaValidation = yup.object({
// //     email: yup.string().email().required("Email is required"),
// //     password: yup
// //       .string()
// //       .required("Password is Rquired")
// //       .min(7, "Minimum 7 charactor is required"),
// //   });

// export default function Notes() {


//     const {user,setUser,note,setNote} =useContext(AppContext)
  



//   const [details, setDetails] = useState("");
//   // const [note, setNote] = useState([]);

//   const [open, setOpen] = useState(false);
//   const [update, setUpdate] = useState(false);
//   const [noteId, setNoteId] = useState("")

//   const navigate = useNavigate();
//   const token = sessionStorage.getItem("token");
  

//   // const updateData = async(note_id)=>{
//   //   const selectedNote =await note.find((data) => {
//   //     return data.id == note_id;
//   //   });
//   //   console.log(selectedNote)

//   //   setDetails(selectedNote)
//   //   setUpdate(true);
//   // }
//   // const handleClickOpen = () => {
//   //   setOpen(true);
//   // };

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

//   const logout = () => {
//     sessionStorage.clear();
//     navigate("/login");
//   };

//   const getUserData = async () => {
//     try {
//       const id = await sessionStorage.getItem("id");
//       //   console.log(id);

//       const response = await fetch(`http://localhost:2500/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await response.json();
//          setUser(data)
//       // setDetails(data.user);
//       setNote(data.user.notes);
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

//   useEffect(() => {
//     if (sessionStorage.getItem("token")) {
//       getUserData();
//     } else {
//       toast.error("Session Expired Login Again");
//       logout();
//     }
//   }, []);

//   useEffect(() => {
//     if (user.message == "User Data Fetched Successfully") {
//       toast.success(user.message);
//     } else if (
//       user.message ==
//       ("Token Experied" || "Token Not Found" || "User Does't Exist")
//     ) {
//       toast.error(user.message);
//       logout();
//     }
//   }, [user]);

//   // console.log("details-1", details);
//   // setNote(user.notes)
//   // console.log("Notes",note)

//   // console.log("notes",user.user[0].notes)
//   return (
//     <BaseApp>
//       <div className="note-container">
//         <div className="container ">
//           <div className="row justify-content-center ">
//             <div className="col-6 text-field-container justify-content-center">
//               <div onClick={()=>setOpen(true)} className="text-click">
//                 <span>Take a note...</span>
//               </div>
//               <AddNote open={open} setOpen={setOpen}/>
//               {/* <Dialog open={open} onClose={handleClose}>
//                 <div className="text-click-2">
//                   <input
//                     type="string"
//                     placeholder="Title"
//                     className="note-text-field"
//                   ></input>
//                   <textarea
//                     placeholder="Take a note..."
//                     rows="5"
//                     className="note-text-field"
//                   ></textarea>
//                   <div className="add-btn">
//                     <Fab size="small" color="primary" aria-label="add">
//                       <AddIcon />
//                     </Fab>
//                   </div>
//                 </div>
//               </Dialog> */}
//             </div>
//           </div>
//         </div>
//         <EditNote update={update} setUpdate={setUpdate} details={details} setDetails={setDetails}/>
//         <div className="container">
//           <div className="row justify-content-center">
//             {/* for(var i in details){
//                         <div key={i} className="col-10 col-sm-5 col-lg-2 noteee">
//                             <b>{details.notes[i].title}</b>
//                             <p>{details.notes[i].description}</p>
//                         </div>
//                     } */}
//                     {/* {console.log("user",user)} */}
//             {note && note.map((data, index) => (
//               <div key={data.id} onClick={()=>setUpdate(true)} className="col-10 col-sm-5 col-lg-2 noteee">
//                 <b>{data.title}</b>
//                 <p>{data.description}</p>
//                 <div className="delete">
//                 <DeleteIcon className="delete-btn"/>
//                 </div>
//               </div>
//             ))}
//             {/* {console.log("console note", note)} */}
//             {/* {console.log("console", details)} */}
//             {/* <div className="col-10 col-sm-5 col-lg-2 noteee">
//                         <b>Title</b>
//                         <p>Ut nulla ad magna laborum ullamco. cididunt aliquip officia aliqua est in nostrud. Labmet reprehenderit minim qui reprehenderit quis. Dolor tempor nulla laborum veniam laboris cupidatat et id ut aute commodo duis. Est sint fugiat eu nostrud labore.</p>
//                     </div> */}
//           </div>
//         </div>
//       </div>
//     </BaseApp>
//   );
// }
