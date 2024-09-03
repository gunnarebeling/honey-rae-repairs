import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketServices"
import "./App.css"


export const App = () => {
const [allTickets, setAllTickets] = useState([])
const [showEmergencyOnly, setShowEmergency] = useState(false)
const [filterdTickets, setFilteredTickets] = useState([])


useEffect(() => {
  getAllTickets().then((ticketArray) => {
    setAllTickets(ticketArray)
    
  })
  
}, [])

useEffect(() =>{
  if(showEmergencyOnly){
    const emergencyTickets = allTickets.filter( ticket => ticket.emergency)
    setFilteredTickets(emergencyTickets)
    
    
  }else{
    setFilteredTickets(allTickets)
  }

}, [showEmergencyOnly, allTickets])

return (
<div className="tickets-container">
  <h2>tickets</h2>
  <div>
    <button className="filter-btn btn-primary" onClick={()=>setShowEmergency(true)}>Emergency</button>
    <button className="filter-btn btn-info" onClick={() => setShowEmergency(false)}>Show All</button>
  </div>

  <article className="tickets">
    {filterdTickets.map(ticket =>{
      return (
        <section className="ticket" key={ticket.id}>
          <header className="ticket-info">#{ticket.id}</header>
          <div>{ticket.description}</div>
          <footer>
              <div>
                <div className="ticket-info">emergency</div>
                <div>{ticket.emergency? "yes" : "no"}</div>
              </div>
          </footer>
        </section>
      )
    })}
  </article>

</div>

)
          
        }
  