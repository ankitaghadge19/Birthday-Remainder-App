import React from 'react'

const RemainderList = ({notes, upcoming}) => {
  return (
    <ul>
        {iterate(notes, upcoming)}
    </ul>
  )
}

function iterate(data, flag){
  if(!data) return;
  const bgColor = flag ? {backgroundColor : "#ffe66d"}: {};
  return(
    <>
    {
      data.map((person, index)=>{
       
        return(
          <li key={index}>
              <div className="flex" style={bgColor}>
                  <div className="title">
                      <h3 className='name'>{person.name}</h3>
                      <h5>{ old(person.birthDate)} years</h5>
                  </div>
              </div>
          </li>
        )
      })
    }
    </>
  )
}

//How old the person is?
function old(personAge){
 let year = new Date(personAge).getFullYear();
 let currentYear = new Date().getFullYear();
 let age = currentYear - year;
//  console.log(age);
 return age;
}




export default RemainderList