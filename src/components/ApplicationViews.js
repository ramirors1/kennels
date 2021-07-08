import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./Locations"
import { CustomerCard } from "./Customers"
import { EmployeeCard } from "./Employees"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
            <Route exact path="/animals">
            <AnimalList />
            </Route>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/animals
            <Route path="/animals">
                <AnimalCard />
            </Route> */}

            {/* Render the location list when http://localhost:3000/animals */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the customer list when http://localhost:3000/animals */}
            <Route path="/customers">
                <CustomerCard />
            </Route>

            {/* Render the employee list when http://localhost:3000/animals */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    )
}