import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invoce from "./pages/Invoce";
import Sidebar from "./components/Sidebar";
import NewInvoice from "./pages/NewInvoice";
function App() {
  

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex justify-center py-20 w-full">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/invoice/:id" element={<Invoce />} />
            <Route path="/newInvoice" element={<NewInvoice />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
