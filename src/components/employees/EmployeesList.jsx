import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../../users/User"
import './Employees.css'
import { Link } from "react-router-dom"

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
                return (
                    <Link to={`/employees/${employee.id}`}>
                        <User user={employee} key={employee.id}/>  
                    </Link>
                ) 
            })}
        </div>
    )
    
}