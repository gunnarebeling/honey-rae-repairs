import { useParams } from 'react-router-dom'
import './Employees.css'
import { useEffect, useState } from 'react'
import { getEmployeesByUserId } from '../../services/employeeService'
import { getAllTickets } from '../../services/ticketServices'
export const EmployeeDetails = () => {
    const [employee , setEmployee] = useState({})
    const [employeeTicketCount, setEmployeeTicketCount] = useState(0)
   const {employeeId} = useParams()
   useEffect(() => {
    getEmployeesByUserId(employeeId).then(employeeObj => {
        const theemployee = employeeObj[0]
        setEmployee(theemployee)

    })
   }, [])
   useEffect(() => {
    
    getAllTickets().then(ticketObj => {
       const employeeTickets = ticketObj.filter(ticket => ticket.employeeTickets[0]?.employeeId === employee.id)
        setEmployeeTicketCount(employeeTickets.length)
    })
   }, [employee])

   return (
    <section className='employee'>
        <header className='employee-header'>{employee.user?.fullName}</header>
        <div>
            <span className='employee-info'>Email: {employee.user?.email}</span>
        </div>
        <div>
            <span className='employee-info'>Specialty: {employee.specialty}</span>
        </div>
        <div>
            <span className='employee-info'>Rate: {employee.rate}</span>
        </div>
        <div>
            <span className='employee-info'>working on {employeeTicketCount} tickets</span>
        </div>
    </section>
   )
}