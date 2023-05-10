import { Link } from 'react-router-dom'

const InvoiceForm = () => {
  return (
    <div className="bg-blue ">
      <h1 className="text-white text-center text-2xl font-bold">New invoice</h1>
      <h6 className="text-violet">Bill form</h6>
      <div className="flex flex-col ">
        <label className="text-white">Street Address</label>
        <input
          className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white "
          type="text"
          placeholder="19 Union Terrace..."
        />
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex flex-col">
          <label className="text-white">City</label>
          <input
            className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2"
            type="text"
            placeholder="London"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Post code</label>
          <input
            className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2"
            type="text"
            placeholder="E1 3EZ"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Country</label>
          <input
            className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2"
            type="text"
            placeholder="United Kingdom"
          />
        </div>
      </div>
      <h6 className="text-violet mt-10">Bill to</h6>
      <div className="flex flex-col ">
        <label className="text-white">Street Address</label>
        <input
          className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white "
          type="text"
          placeholder="19 Union Terrace..."
        />
      </div>
      <div className="flex flex-col mt-5">
        <label className="text-white">Street Address</label>
        <input
          className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white "
          type="text"
          placeholder="19 Union Terrace..."
        />
      </div>
      <div className="flex flex-col mt-5">
        <label className="text-white">Street Address</label>
        <input
          className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white "
          type="text"
          placeholder="19 Union Terrace..."
        />
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex flex-col">
          <label className="text-white">City</label>
          <input
            className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2"
            type="text"
            placeholder="London"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Post code</label>
          <input
            className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2"
            type="text"
            placeholder="E1 3EZ"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Country</label>
          <input
            className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2"
            type="text"
            placeholder="United Kingdom"
          />
        </div>
      </div>
      <div className="flex gap-20 ">
        <div className="flex flex-col">
          <label className="text-white mt-10">Invoice Date</label>
          <input
            className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2 w-96"
            type="date"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white mt-10">Payment Terms</label>
          <select className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2 w-96">
            <option value="1">Net 1 Day</option>
            <option value="2">Net 2 Days</option>
            <option value="3">Net 3 Days</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-white mt-10">Project Description</label>
        <input
          className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white mt-2"
          type="text"
          placeholder="Graphic Design Service"
        />
      </div>

      <div className="flex gap-5 mt-5">
        <div className="flex flex-col">
          <label className="text-white">Item list</label>
          <input className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white " />
        </div>
        <div className="flex flex-col">
          <label className="text-white">QTY.</label>
          <input className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white w-20" />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Price</label>
          <input className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white w-20" />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Total</label>
          <input className="h-10 rounded-md border border-gray outline-none px-5 bg-ligthBlue  text-white w-20" />
        </div>
      </div>
      <button className="bg-ligthBlue text-white rounded-full h-10 mt-5  w-full">
        + Add new item
      </button>
      <div className="flex gap-10 justify-end mt-5">
        <Link to="/">
          <button className="bg-ligthBlue h-12 rounded-full w-20 text-white">
            Cancel
          </button>
        </Link>

        <button className="bg-violet h-12 rounded-full w-20 text-white">
          Save
        </button>
      </div>
    </div>
  )
}

export default InvoiceForm
