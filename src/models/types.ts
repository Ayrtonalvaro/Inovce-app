import { Items } from "./Items"

export interface InvoiceData {
  id: string,
  createdAt: string,
  paymentDue: string,
  description: string,
  paymentTerms: number,
  clientName: string,
  clientEmail: string,
  status: string,
  senderAddress: {
    street: string,
    city: string,
    postCode: string,
    country: string
  },
  clientAddress: {
    street: string,
    city: string,
    postCode: string,
    country: string
  },
  items: Items[],
  total: number
}