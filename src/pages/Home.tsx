
import Header from "../components/Header"
import InvoiceCard from "../components/InvoiceCard"
import api from '../api'
import { InvoiceData } from '../types.ts'
import { useEffect, useState } from "react"


const Home = () => {
  
  const [invoices, setInvoices] = useState<InvoiceData[]>([])
  useEffect(() => {
    api.list().then(setInvoices)
  }, [])
  return (
    <div className="w-full px-80">
      <Header />
      <InvoiceCard invoiceData={invoices}/>
    </div>
  )
}

export default Home
