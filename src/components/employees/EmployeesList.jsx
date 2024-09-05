import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../../users/User"
import './Employees.css'

export const EmployeesList = () =>{
    const [employees, setEmployees] = useState([])

    useEffect(() =>{
        getStaffUsers().then(staffArray => {
            setEmployees(staffArray)
        })
    }, [])
    return (
        <div className="employees">
            {employees.map(employee => {
                return <User user={employee} key={employee.id}/>
            })}
        </div>
    )
    
}