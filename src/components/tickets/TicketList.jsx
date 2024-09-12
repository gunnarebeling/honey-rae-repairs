import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"


export const TicketList = ({currentUser}) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergency] = useState(false)
    const [filterdTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const getAndSetAllTickets = () => {
        getAllTickets().then((ticketArray) => {
            if (currentUser.isStaff){

                setAllTickets(ticketArray)
            }else{
                const customerTickets= ticketArray.filter(ticket => ticket.userId === currentUser.id)
                setAllTickets(customerTickets)
            }
            
        })
    }
    useEffect(() => {
        getAndSetAllTickets()
    
    }, [currentUser])

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
    <FilterBar setShowEmergency={setShowEmergency} currentUser={currentUser} setSearchTerm={setSearchTerm}/>

    <article className="tickets">
        {filterdTickets.map(ticketItem =>{
        return ( 
        <Ticket ticket={ticketItem} getAndSetAllTickets={getAndSetAllTickets} currentUser={currentUser} key={ticketItem.id} />
        )
        })}
    </article>

    </div>

    )
            
            
    
}