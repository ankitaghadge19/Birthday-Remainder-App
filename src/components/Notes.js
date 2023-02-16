import React from 'react'
import './notes.css'

export default function Notes({notes, setNotes, setEditId}) {
  console.log(notes);

  function deleteNote(id){
    setNotes(notes.filter(n => n.id != id))
  }

  const editNote =(id)=>{
    console.log(id);
    setEditId(id);

    notes.filter((elem)=>{
      if(elem.id === id){
        document.getElementById("editName").value = elem.name;
        document.getElementById("editBirthDate").value = elem.birthDate;
      }
    })
  }

  return (
    <>
         <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h1 className="mb-2">Birthday List</h1>
                 {
                 notes.length===0?
                 <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">Message:</h5>
                        <p className="card-text">No Birthday's are available for reading.</p>
                    </div>
                </div>
                :
                notes.map((element)=>{
                    return(
                  <div className="card my-3">
                      <div className="card-body text-captialiaze" style={{textTransform:"capitalize"}}>
                          <h5 className="card-title">{element.name}</h5>
                          <p className="card-text">{element.birthDate}</p>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => editNote(element.id)}data-bs-target="#exampleModal">
                              Edit
                          </button>

                          <button className="btn btn-danger " style={{marginLeft: '19rem'}} onClick={() => deleteNote(element.id)} >Remove</button>
                      </div>
                  </div>
                  )})}
      
              </div>
            </div>
          </div> 

    </>
  )
}
