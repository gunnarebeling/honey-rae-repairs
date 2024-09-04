import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices"
import "./Tickets.css"
import { Ticket } from "./Ticket"

export const TicketList = () => {
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
        {filterdTickets.map(ticketItem =>{
        return ( 
        <Ticket ticket={ticketItem} key={ticketItem.id} />
        )
        })}
    </article>

    </div>

    )
            
            
    
}