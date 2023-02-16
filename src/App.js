import React, { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Create from './routes/Create'
import List from './routes/List'


import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Notes from "./components/Notes";
import EditModal from "./components/EditModal";

export default function App() {

  let initTodo;
  if (localStorage.getItem("notes") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("notes"));
  }
 
  const [notes, setNotes] = useState(initTodo);
                             
  const [editId, setEditId] = useState("");


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>

      <Routes>
        <Route path='/' element={<Home notes={notes}/>} />
        <Route path='/create' element={<Create setNotes={setNotes} notes={notes}/>} />
        <Route path='/list' element={<List editId={editId} setEditId={setEditId} setNotes={setNotes} notes={notes} key={notes.id}/>} />

      </Routes>
      
      
      

      
      {/* <EditModal editId={editId} notes={notes} setNotes={setNotes} />
      <Navbar />
      <Form setNotes={setNotes} notes={notes}/>                                                     l
      <Notes setEditId={setEditId} setNotes={setNotes} notes={notes} key={notes.id}/> */}
    </>
  );

}
