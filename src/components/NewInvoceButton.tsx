import iconPlus from '../assets/icon-plus.svg'

const NewInvoceButton = () => {
  return (
    <div className="bg-violet-600 w-36 h-12 rounded-full flex justify-center items-center hover:bg-violet-500 hover:cursor-pointer transition duration-300">
      <div className="flex items-center justify-center gap-3">
        <div className='bg-white rounded-full flex items-center justify-center w-8 h-8'>
          <img src={iconPlus} alt="icon-plus" />
        </div>
        <p className='font-semibold'>New invoice</p>
      </div>
    </div>
  )
}

export default NewInvoceButton
