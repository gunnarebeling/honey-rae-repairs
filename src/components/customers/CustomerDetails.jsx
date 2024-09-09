import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomer } from "../../services/customerService"

export const CustomerDetails = () => {
    
    const [customer, setCustomer] =useState({})
    const {customerId} = useParams()
    useEffect(() => {
        getCustomer(customerId).then(data =>{
            const customerObj = data[0]
            setCustomer(customerObj)})
        }, [])
        return (
            <section className="customer">
                <header className="customer-header">{customer.user?.fullName}</header>
                <div>
                <span className="customer-info">Email: {customer.user?.email}</span>
                </div>
                <div >
                    <span className="customer-info">Address: {customer.address}</span>
                </div>
                <div>
                    <span className="customer-info">Phone: {customer.phoneNumber}</span>
                </div>
            </section>
        )
}