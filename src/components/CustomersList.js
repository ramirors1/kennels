import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomersProvider"
import { CustomerCard } from "./CustomersCard"
import "./Customers.css"

export const CustomerList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers") // will happen once
    getCustomers()
  }, [])

  return (
    <div className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })
      }
    </div>
  )
}