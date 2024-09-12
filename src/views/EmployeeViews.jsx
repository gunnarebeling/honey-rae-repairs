import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNavBar } from "../components/nav/EmployeeNavBar"
import { Welcome } from "../components/welcome/Welcome"
import { TicketList } from "../components/tickets/TicketList"
import { EmployeesList } from "../components/employees/EmployeesList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerList } from "../components/customers/CustomerList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeeForm } from "../components/forms/EmployeeForm"

export const EmployeeViews = ({currentUser}) => {
    return (
    <Routes>
    <Route 
      path="/" 
      element={
        <>
          <EmployeeNavBar currentUser={currentUser}/>
          <Outlet />
        </>
      }
    >
      <Route index element={<Welcome/>}/>
      <Route path="tickets" element={<TicketList currentUser={currentUser}/>} />
      <Route path="employees">
        <Route index element={<EmployeesList/>}/>
        <Route path=':employeeId' element={<EmployeeDetails/>}/>
      </Route>
      <Route path="customers" >
        <Route index element={<CustomerList/>}/>
        <Route path=":customerId" element={<CustomerDetails/>}/>
      </Route>
      <Route path="profile/" element={<EmployeeForm currentUser={currentUser}/>}/>
    </Route>
    </Routes>
    )
} 