const InvoiceInfo = () => {
  return (
    <div className="bg-ligthBlue mt-10 px-6 rounded-md pt-6 pb-10">
      <div className="flex justify-between">
        <div className="text-white">
          <p>ID</p>
          <p>Description</p>
        </div>
        <div className="text-gray">
          <p>street</p>
          <p>city</p>
          <p>postCode</p>
          <p>country</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <label className="text-gray">Inovice date</label>
          <p className="text-white">Date</p>
        </div>
        <div>
          <label className="text-gray">Bill to</label>
          <p className="text-white">Name Client</p>
        </div>
        <div>
          <label className="text-gray">Send to </label>
          <p className="text-white">Client mail</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <label className="text-gray">Payment Due</label>
          <p>Date</p>
        </div>
        <div className="text-gray mr-20">
          <p>street</p>
          <p>street</p>
          <p>Post code</p>
          <p>Country</p>
        </div>
        <div></div>
      </div>
      <div className="bg-bgInfo mt-10 grid grid-cols-6 p-5 rounded-md">
        <div className="col-span-3">
          <label className="text-gray">Item Name</label>
          <p className="text-white">name</p>
          <p className="text-white">Logo</p>
        </div>
        <div className="text-gray">
          <label>QTY.</label>
          <p>1</p>
        </div>
        <div className="text-gray">
          <label>Price</label>
          <p>100</p>
        </div>
        <div>
          <label className="text-gray">Total</label>
          <p className="text-white">100</p>
        </div>
      </div>
      <div className="bg-black rounded-b-md">
        <div className="flex  justify-between p-5 text-white text-3xl ">
          <h3>Total</h3>
          <h3>1200</h3>
        </div>
      </div>
    </div>
  )
}

export default InvoiceInfo
