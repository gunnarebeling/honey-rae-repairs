import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketServices"

export const App = () => {
const [allTickets, setAllTickets] = useState([])

useEffect(() => {
  getAllTickets().then((ticketArray) => {
    setAllTickets(ticketArray)
  })
}, [])

return (
<div className="tickets-container">
  <h2>tickets</h2>
  <article className="tickets">
    {allTickets.map(ticket =>{
      return (
        <section className="ticket">
          <header className="ticket-info">#{ticket.id}</header>
        </section>
      )
    })}
  </article>

</div>

)
          
        }
  