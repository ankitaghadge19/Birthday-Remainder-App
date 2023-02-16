import React, {useState} from 'react'
import './form.css'
import uniqid from 'uniqid'

export default function Form({setNotes, notes}) {                      

    const [note, setNote] = useState({
        name:"",
        birthDate:""
      });

    const [id, setId] = useState(uniqid())
   

const inputHandler =(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setNote({...note, [name]:value, id})
    
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(note.name!=="" && note.birthDate!==""){
    
        setNotes(notes => [...notes, note]);
        setId(uniqid());
    // console.log(notes);
    }
   
    setNote({name:"", birthDate:""});

}

  return (
    <>
       <div className='formCont'>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="name" name="name" className="form-control" id="name" placeholder='Enter Your name'value={note.name} onChange={inputHandler}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Birthday</label>
                        <input name="birthDate" type='date' id="birthDate" value={note.birthDate} className='form-control' onChange={inputHandler}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" >Add Birthday</button>
                </form>
            </div>
        </div>

       </div>
    </>
  )
}
