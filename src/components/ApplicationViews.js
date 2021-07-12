import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerProvider } from "./CustomersProvider"
import { CustomerList } from "./CustomersList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./LocationsProvider"
import { LocationList } from "./LocationsList"
import { EmployeeProvider } from "./EmployeesProvider"
import { EmployeeList } from "./EmployeesList"

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

            {/* Render the location list when http://localhost:3000/locations */} 
            <LocationProvider>
            <Route exact path="/locations">
            <LocationList />
            </Route>
            </LocationProvider>

            {/* Render the customer list when http://localhost:3000/customers */}
            <CustomerProvider>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            </CustomerProvider>    

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
            <Route exact path="/employees">
            <EmployeeList />
            </Route>
            </EmployeeProvider>
            
            {/* <Route path="/login">
                <Login />
            </Route> */}
        </>
    );
};