import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { LocationCard } from "./Locations"
import "./Locations.css"

export const LocationsList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationsList: useEffect - getLocations")
    getLocations()
  }, [])


  return (
    <div className="locations">
      {console.log("LocationsList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}