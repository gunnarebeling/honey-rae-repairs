import { Route, Outlet } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { EmployeesList } from "../components/employees/EmployeesList"
import { TicketList } from "../components/tickets/TicketList"
import { CustomerList } from "../components/customers/CustomerList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
export const ApplicationViews = () => {
  return ( <>
    <Route 
      path="/" 
      element={
        <>
          <NavBar/>
          <Outlet />
        </>
      }
    >
      <Route index element={<Welcome/>}/>
      <Route path="tickets" element={<TicketList/>} />
      <Route path="employees">
        <Route index element={<EmployeesList/>}/>
        <Route path=':employeeId' element={<EmployeeDetails/>}/>
      </Route>
      <Route path="customers" >
        <Route index element={<CustomerList/>}/>
        <Route path=":customerId" element={<CustomerDetails/>}/>
      </Route>
      </Route>
  </>
  )
}
