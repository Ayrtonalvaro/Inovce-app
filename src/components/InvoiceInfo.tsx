import { InvoiceData } from "../models/types"

interface InvoiceInfoProps {
  invoiceInfoProps: InvoiceData
}

const InvoiceInfo: React.FC<InvoiceInfoProps> = ( {invoiceInfoProps}) => {
  
  return (
    <div className="bg-ligthBlue mt-10 px-6 rounded-md pt-6 pb-10">
      <div className="flex justify-between">
        <div className="text-white">
          <p>{invoiceInfoProps.id}</p>
          <p>{invoiceInfoProps.description}</p>
        </div>
        <div className="text-gray">
          <p>{invoiceInfoProps.senderAddress.street}</p>
          <p>{invoiceInfoProps.senderAddress.city}</p>
          <p>{invoiceInfoProps.senderAddress.postCode}</p>
          <p>{invoiceInfoProps.senderAddress.country}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <label className="text-gray">Inovice date</label>
          <p className="text-white">{invoiceInfoProps.createdAt}</p>
        </div>
        <div>
          <label className="text-gray">Bill to</label>
          <p className="text-white">{invoiceInfoProps.clientName}</p>
        </div>
        <div>
          <label className="text-gray">Send to </label>
          <p className="text-white">{invoiceInfoProps.clientEmail}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <label className="text-gray">Payment Due</label>
          <p className="text-white">{invoiceInfoProps.paymentDue}</p>
        </div>
        <div className="text-gray mr-20">
          <p>{invoiceInfoProps.clientAddress.street}</p>
          <p>{invoiceInfoProps.clientAddress.city}</p>
          <p>{invoiceInfoProps.clientAddress.postCode}</p>
          <p>{invoiceInfoProps.clientAddress.country}</p>
        </div>
        <div></div>
      </div>
      <div className="bg-bgInfo mt-10 grid grid-cols-6 p-5 rounded-md">
        <div className="col-span-3">
          <label className="text-gray">Item Name</label>
          {invoiceInfoProps.items.map((item) => {
            return (
              <>
                <p className="text-white">{item.name}</p>
              </>
            )
          })}
        </div>
        <div className="text-gray">
          <label>QTY.</label>
          {invoiceInfoProps.items.map((item) => {
            return (
              <>
                <p className="text-white">{item.quantity}</p>
              </>
            )
          })}
        </div>
        <div className="text-gray">
          <label>Price</label>
          {invoiceInfoProps.items.map((item) => {
            return (
              <>
                <p className="text-white">{item.price}</p>
              </>
            )
          })}
        </div>
        <div>
          <label className="text-gray">Total</label>
          {invoiceInfoProps.items.map((item) => {
            return (
              <>
                <p className="text-white">{item.total}</p>
              </>
            )
          })}
        </div>
      </div>
      <div className="bg-black rounded-b-md">
        <div className="flex  justify-between p-5 text-white text-3xl ">
          <h3>Total</h3>
          <h3>£{invoiceInfoProps.total}</h3>
        </div>
      </div>
    </div>
  )
}

export default InvoiceInfo
