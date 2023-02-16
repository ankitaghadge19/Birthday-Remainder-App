import React from 'react'
import Navbar from '../components/Navbar'
import Notes from "../components/Notes";
import EditModal from "../components/EditModal";

const List = ({notes, setNotes, setEditId, editId}) => {
  return (
    <div>
        <EditModal editId={editId} notes={notes} setNotes={setNotes} />
        <Navbar/>
        <br />
        <Notes setEditId={setEditId} setNotes={setNotes} notes={notes} key={notes.id}/>

    </div>
  )
}

export default List