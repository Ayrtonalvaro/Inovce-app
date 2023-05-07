import NewInvoceButton from "./NewInvoceButton"
import iconArrowDown from "../assets/icon-arrow-down.svg"

const Header = () => {
  return (
    <div className="text-white flex justify-between items-center">
      <div>
        <h3 className="text-3xl font-semibold">Inovices</h3>
        <h6 className="text-sm text-gray-300">There are 7 total invoices</h6>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-5 items-center">
          <label>Filter by status</label>
          <img src={iconArrowDown} alt="icon-arrow" />
        </div>
        <NewInvoceButton />
      </div>
    </div>
  )
}

export default Header
