import React from 'react'
import Navbar from '../components/Navbar'
import './home.css'
import RemainderList from '../components/RemainderList';

const Home = ({notes}) => {
  return (
    <div className='homeCont'>
        <Navbar/>
        <div className="container mt-5">
            {/* <h1>Welcome to Notes App</h1> */}
            <main id='site-main'>
              <h1 className="text-dark title">Birthday Remainder</h1>
              <div className="board">
                  <RemainderList notes={today(notes)}/>
                  <h2 className='upcoming text-dark'>Upcoming</h2>
                  <RemainderList notes={upcoming(notes)} upcomimg={true}/>
              </div>
            </main>
            
        </div>
        
    </div>
  )
}



function today(person){
  let currDay = new Date().getDate();
  let currMonth = new Date().getMonth();
  // console.log(currDay, currMonth);
  let filter = person.filter(data =>{
    // console.log(data);

    let day = new Date(data.birthDate).getDate();
    let month = new Date(data.birthDate).getMonth();

    // console.log(day, month)
    return ( (currDay == day) && (currMonth == month) );
  })
  return filter;
}

//upcoming birthday
function upcoming(person){
  let currMon = new Date().getMonth();
  let currDay = new Date().getDate();

  let filter = person.filter(data=>{
    let month = new Date(data.birthDate).getMonth();
    let day = new Date(data.birthDate).getDate();

    if(currDay == day) return;
    if(day < currDay && month == currMon) return;

    return ((month >= currMon) && (month<=(currMon + 1))); 
  })

  return filter;


}




export default Home