import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from './component/notes';
import ToDoList from './component/to-do-list';
import Login from './component/login';
import SignUp from './component/signup';
import AppProvider from './Context/AppProvider';
import Note from './component/note';

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/security" element={<AppProvider/>}/>
        <Route path="/note" element={<Note/>}/>
        <Route path="/todolist" element={<ToDoList/>}/>
      </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
