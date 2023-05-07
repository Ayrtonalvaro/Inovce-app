import data from '../../data/data.json'
import Paid from './Paid'
import arrowRightIcon from '../assets/icon-arrow-right.svg'

const InvoiceCard = () => {
  return (
    <div className='mt-20'>
    {
      data.map(client => {
        return (
          <div className="bg-indigo-800 flex justify-around items-center h-16 rounded-lg mt-5 ">
            <div className="flex">
              <span className="text-blue-400">#</span>
              <p className="text-white">{client.id}</p>
            </div>
            <p className="text-gray-400">{client.createdAt}</p>
            <p className="text-gray-400">{client.clientName}</p>
            <p className="text-white">£{client.total}</p>
            <div className='flex gap-5 items-center'>
              <Paid status={client.status} />
              <img src={arrowRightIcon} alt='icon-arrow-right' />
            </div>
          </div>
        )
      })
    }
      
    </div>
  )
}

export default InvoiceCard
