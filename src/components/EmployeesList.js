import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { EmployeeCard } from "./EmployeesCard"
import "./Employees.css"
import { useHistory } from "react-router-dom"
// import { LocationContext } from "./LocationsProvider"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  // const { locations, getLocations } = useContext(LocationContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
    // .then(getLocations)
  }, [])


  return (
    <>
    <h2>Employees</h2>
      <button onClick={() => {history.push("/employees/create")}}>
          Add Employee
      </button>

      <div className="employees">
        {employees.map((employee) => {
          return (
            <EmployeeCard key={employee.id} employee={employee} />
          );
        })}
      </div>
    </>
  )
}






      {/* <div className="employees"></div>
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
    </>
  )
} */}