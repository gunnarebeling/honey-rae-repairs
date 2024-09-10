import { useEffect, useState } from "react"
import "./Form.css"
import { getEmployeesByUserId, updateEmployee } from "../../services/employeeService"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = ({currentUser}) => {
    const [employee, setEmployee] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        getEmployeesByUserId(currentUser.id).then(data => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [currentUser])
    const changeEmployee = (event) => {
        event.preventDefault()
        const employeeObj = {
            id: employee.id,
            specialty: employee.specialty,
            rate: employee.rate,
            userId: 4

        }
        updateEmployee(employeeObj).then(() =>{
            navigate(`/employees/${currentUser.id}`)
        })
    }
    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty</label>
                    <input 
                        type="text" 
                        value={employee.specialty} 
                        onChange={(event) => {
                            const copy = {...employee}
                            copy.specialty = event.target.value
                            setEmployee(copy)
                        }} 
                        required 
                        className="form-control" />
                </div>          
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate</label>
                    <input 
                        type="number" 
                        value={employee.rate} 
                        onChange={(event) => {
                            const copy = {...employee}
                            copy.rate = event.target.value
                            setEmployee(copy)
                        }} 
                        required className="form-control" />
                </div>          
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button 
                        className="form-btn btn-primary"
                        onClick={changeEmployee}>Save Profile</button>
                </div>          
            </fieldset>

        </form>
    )
}