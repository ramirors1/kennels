import React from "react"
import "./Customer.css"

export const CustomerCard = ({ cusotmer }) => (
    <section className="customer">
        <h3 className="cusotmer__name">{customer.name}</h3>
        <address className="location__address">{customer.location.name}</address>
    </section>
)