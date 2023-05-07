interface StatusProps {
  status: string
}

const Status: React.FC<StatusProps> = ({ status }) => {

  if (status === 'paid') {
    return (
      <div className="bg-bgStatusGreen w-20 h-9 rounded-lg  flex justify-center items-center gap-1">
        <div className="h-2 w-2 bg-green rounded-full"></div>
        <p className="text-green text-sm ">{status}</p>
      </div>
    )
  }

  else if (status === 'pending') {
    return (
      <div className="bg-bgStatusYellow w-20 h-9 rounded-lg  flex justify-center items-center gap-1">
        <div className="h-2 w-2 bg-yellow rounded-full"></div>
        <p className="text-yellow text-sm">{status}</p>
      </div>
    )
  }

  else if (status === 'draft') {
    return (
      <div className="bg-gray-800 w-20 h-9 rounded-lg  flex justify-center items-center gap-1">
        <div className="h-2 w-2 bg-white rounded-full"></div>
        <p className="text-white text-sm">{status}</p>
      </div>
    )
  }

  return (<>
  </>)
}

export default Status
