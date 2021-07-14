import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { EmployeeCard } from "./EmployeesCard"
import "./Employees.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])


  return (
    <div className="employees">
      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} 
          // location={location}
          employee={employee} />
        })
      }
    </div>
  )
}