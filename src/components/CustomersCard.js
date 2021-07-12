import React from "react"
import "./Customers.css"

export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="cusotmer__name">{customer.name}</h3>
        <address className="location__address">{customer.address}</address>
    </section>
)