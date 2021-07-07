import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import "./Kennel.css"
import { CustomerCard } from "./Customers"
import { EmployeeCard } from "./Employees"
import { LocationCard } from "./Locations"
import "./Customers.css"
import "./Employees.css"
import "./Locations.css"


//Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </article>
    </>
)