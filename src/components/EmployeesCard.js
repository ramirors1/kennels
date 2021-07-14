import React from "react"
import "./Employees.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__location">{employee.location.name}</address>
    </section>
)

// export const AnimalCard = ({ animal, customer, location }) => (
//     <section className="animal">
//       <h3 className="animal__name">{animal.name}</h3>
//       <div className="animal__breed">{animal.breed}</div>
//       <div className="animal__location">Location: {location.name}</div>
//       <div className="animal__owner">Customer: {customer.name}</div>
//     </section>
//   )