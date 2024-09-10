import { useEffect, useState } from "react"
import { getEmployees } from "../../services/employeeService"
import { assignTicket, updateTicket } from "../../services/ticketServices"

export const Ticket = ({ticket, currentUser, getAndSetAllTickets}) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() =>{
        getEmployees().then(employeeArray => {
            setEmployees(employeeArray)
        })
    }, [])

    useEffect(()=>{
        const foundEmployee = employees.find(employees => employees.id === ticket.employeeTickets[0]?.employeeId)
        setAssignedEmployee(foundEmployee)
    },[employees, ticket])

    const handelClaim = () => {
        const currentUserEmployeeinfo = employees.find(employee => employee.userId === currentUser.id)
        const newEmployeeTicket = {
            employeeId: currentUserEmployeeinfo.id,
            serviceTicketId: ticket.id,
        }
        assignTicket(newEmployeeTicket).then(() =>{
            getAndSetAllTickets()
        })
    }

    const handelClose = () => {
        const closedTicket = {
            id: ticket.id,
            userId: ticket.userId,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: new Date()
        }
        updateTicket(closedTicket).then(() => {
            getAndSetAllTickets()
        })
    }


   return ( <section className="ticket" >
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
                <div>
                    <div className="ticket-info">assignee</div>
                    <div>{assignedEmployee? assignedEmployee.user?.fullName : "none"}</div>
                </div>
                <div>
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency? "yes" : "no"}</div>
                </div>
                <div className="btn-container">
                    {currentUser.isStaff && !assignedEmployee? (<button className="btn btn-secondary" onClick={handelClaim}>Claim</button> ): ("")}
                    {currentUser.id === assignedEmployee?.userId && !ticket.dateCompleted? (<button className="btn btn-warning" onClick={handelClose}>Close</button> ): ("") }

                </div>
            </footer>
            </section>)
}