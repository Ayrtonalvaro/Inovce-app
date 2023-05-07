import data from '../../data/data.json'
import Status from './Status'
import arrowRightIcon from '../assets/icon-arrow-right.svg'

const InvoiceCard = () => {
  return (
    <div className="mt-20">
      {data.map((client) => {
        return (
          <div className="bg-ligthBlue flex justify-around items-center h-16 rounded-lg mt-5 ">
            <div className="flex">
              <span className="text-gray">#</span>
              <p className="text-white">{client.id}</p>
            </div>
            <p className="text-gray">{client.createdAt}</p>
            <p className="text-gray">{client.clientName}</p>
            <p className="text-white">£{client.total}</p>
            <div className="flex gap-5 items-center">
              <Status status={client.status} />
              <img src={arrowRightIcon} alt="icon-arrow-right" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default InvoiceCard
