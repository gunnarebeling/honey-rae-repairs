import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService"
import './customers.css'
import { User } from "../../users/User"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    useEffect(()=>{
        getNonStaffUsers().then(custmoersArray => {
            setCustomers(custmoersArray)
        }) 
    }, [])

    return (
        <div className="customers">
            {customers.map(customer => {
                return(
                    <User user={customer} key={customer.id}/>

                )
            })}
        </div>
    )
}