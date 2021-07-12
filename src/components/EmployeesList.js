import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { EmployeeCard } from "./Employees"
import "./Employees.css"

export const EmployeesList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeesList: useEffect - getEmployees")
    getEmployees()
  }, [])


  return (
    <div className="employees">
      {console.log("EmployeesList: Render", employees)}
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee} />
        })
      }
    </div>
  )
}