import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import { LocationContext } from "../LocationsProvider"
import { CustomerContext } from "../CustomersProvider"
import "./Animal.css"
import { useHistory } from "react-router-dom"


export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const history = useHistory()

  useEffect(() => {
      console.log("AnimalList: Initial render before data")
      getLocations()
      .then(getCustomers)
      .then(getAnimals)
  }, [])

  return (
    <>
    <h2>Animals</h2>
      <button onClick={() => {history.push("/animals/create")}}>
          Add Animal
      </button>
      <div className="animals">
        {
          animals.map(animal => {
            const owner = customers.find(c => c.id === animal.customerId)
            const location = locations.find(l => l.id === animal.locationId)

    return <AnimalCard key={animal.id}
                location={location}
                customer={owner}
                animal={animal} />
      
          })
        }
      </div>
    </>
  )
}

  //useEffect - reach out to the world for something
//   useEffect(() => {
//     console.log("AnimalList: useEffect - getAnimals")
//     getAnimals()
//   }, [])


//   return (
//     <div className="animals">
//       {console.log("AnimalList: Render", animals)}
//       {
//         animals.map(animal => {
//           return <AnimalCard key={animal.id} animal={animal} />
//         })
//       }
//     </div>
//   )
// }