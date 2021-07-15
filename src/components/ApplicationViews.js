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
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./EmployeesForm"
import { LocationForm } from "./LocationsForm"
import { AnimalDetail } from "./animal/AnimalDetail"

export const ApplicationViews = () => {
    return (
        <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      <AnimalProvider>
      <LocationProvider>
        <CustomerProvider>
            <Route exact path="/animals">
                <AnimalList />
            </Route>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>  
            <Route exact path="/animals/detail/:animalId(\d+)">
		          <AnimalDetail />
	          </Route>
        </CustomerProvider>
      </LocationProvider>
      </AnimalProvider>
     
      <CustomerProvider>
          <Route exact path="/customers">
             <CustomerList />
          </Route>
      </CustomerProvider>    

      <LocationProvider>
          <Route exact path="/locations">
            <LocationList />
          </Route>
          <Route exact path="/locations/create">
            <LocationForm />
          </Route>
      </LocationProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>


      {/* <Route path="/login">
        <Login />
      </Route> */}
    </>
  );
};
          
          
          
          
          
          
            // {/* Render the location list when http://localhost:3000/ */}
            // <Route exact path="/">
            //     <Home />
            // </Route>

            // {/* <AnimalProvider>
            // <Route exact path="/animals">
            // <AnimalList />
            // </Route>
            // </AnimalProvider> */}

            // {/* Render the location list when http://localhost:3000/locations */} 

        //     {/* Render the customer list when http://localhost:3000/customers */}

        //     {/* Render the employee list when http://localhost:3000/employees */}
            
        //     {/* <Route path="/login">
        //         <Login />
        //     </Route> */}
        // </>
//     );
// }; 
// */}