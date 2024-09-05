import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"


export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergency] = useState(false)
    const [filterdTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

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

    useEffect(()=>{
        const searchedTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredTickets(searchedTickets)
    }, [searchTerm, allTickets])

    return (
    <div className="tickets-container">
    <h2>tickets</h2>
    <FilterBar setShowEmergency={setShowEmergency} setSearchTerm={setSearchTerm}/>

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