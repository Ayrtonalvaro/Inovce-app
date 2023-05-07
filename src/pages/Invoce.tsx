import HeaderInvoce from "../components/HeaderInvoce"
import { Link } from 'react-router-dom'
const Invoce = () => {
  return (
    <>
      <div className="w-full px-80">
        <Link to="/">
          <button className="bg-indigo-800 rounded-md text-white hover:bg-indigo-600 duration-300 transition px-3">
            Go back
          </button>
        </Link>
        <HeaderInvoce />
      </div>
    </>
  )
}

export default Invoce
