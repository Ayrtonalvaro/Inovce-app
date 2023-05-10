import { InvoiceData } from '../types.ts'
import Status from './Status'
import arrowRightIcon from '../assets/icon-arrow-right.svg'
import { Link } from 'react-router-dom'

interface InvoiceCardProps {
  invoiceData: InvoiceData
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({invoiceData}) => {

  return (
    <div className="mt-20">
      {invoiceData.map((client: InvoiceData) => {
        return (
          <div
            key={client.id}
            className="bg-ligthBlue flex justify-around items-center h-16 rounded-lg mt-5 "
          >
            <div className="flex">
              <span className="text-gray">#</span>
              <p className="text-white">{client.id}</p>
            </div>
            <p className="text-gray">{client.createdAt}</p>
            <p className="text-gray">{client.clientName}</p>
            <p className="text-white">£{client.total}</p>
            <div className="flex gap-5 items-center">
              <Status status={client.status} />
              <Link to={`/invoice/${client.id}`}>
                <img
                  className="hover:scale-150 transition duration-300"
                  src={arrowRightIcon}
                  alt="icon-arrow-right"
                />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default InvoiceCard
