
import "./App.css"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeesList } from "./components/employees/EmployeesList"
import { NavBar } from "./components/nav/NavBar"
import { TicketList } from "./components/tickets/TicketList"
import { Routes, Route, Outlet } from "react-router-dom"
import { Welcome } from "./components/welcome/Welcome"
import { CustomerDetails } from "./components/customers/CustomerDetails"


export const App = () => {
  return( 
  <Routes>
    <Route 
      path="/" 
      element={
        <>
          <NavBar/>
          <Outlet />
        </>
      }
    >
      <Route path="tickets" element={<TicketList/>} />
      <Route path="employees" element={<EmployeesList/>}/>
      <Route path="customers" >
        <Route index element={<CustomerList/>}/>
        <Route path=":customerId" element={<CustomerDetails/>}/>
      </Route>
      <Route index element={<Welcome/>}/>
    </Route>
  </Routes>
  )
}
  