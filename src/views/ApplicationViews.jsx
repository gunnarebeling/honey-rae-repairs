import { Route, Outlet, Routes} from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { EmployeesList } from "../components/employees/EmployeesList"
import { TicketList } from "../components/tickets/TicketList"
import { CustomerList } from "../components/customers/CustomerList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { useEffect, useState } from "react"
import { EmployeeForm } from "../components/forms/EmployeeForm"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"
export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    setCurrentUser(honeyUserObject)
  }, [])

  return currentUser.isStaff ? (<EmployeeViews currentUser={currentUser}/>) : (<CustomerViews currentUser={currentUser}/>)
}
