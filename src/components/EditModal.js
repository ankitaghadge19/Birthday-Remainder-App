import React from 'react'

export default function EditModal({editId, notes, setNotes}) {

    const updateNote=()=>{
        console.log(editId);
        const updateNote = notes.map((elem)=>{
            console.log(elem);
            
            if(editId === elem.id){
            
                return(
                {...elem, name : document.getElementById("editName").value,
                birthDate : document.getElementById("editBirthDate").value}
                  )
            }
            else{
                return elem;
            }
          
        })
    console.log(updateNote);
    setNotes(updateNote);
    }

  return (
    <>
       
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Birthday Card</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="name" name='name' className="form-control" id="editName" placeholder='Enter Your name' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Birthday</label>
                        <input name="birthDate" id="editBirthDate" type='date' className='form-control' ></input>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateNote}>Edit Birthday</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
