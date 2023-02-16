import React from 'react'
import Navbar from '../components/Navbar'
import Form from "../components/Form";

const create = ({setNotes, notes}) => {

  return (
    <div>
        <Navbar />
        <Form setNotes={setNotes} notes={notes}/>
    </div>
  )
}

export default create