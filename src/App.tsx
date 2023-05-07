import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invoce from "./pages/Invoce";
import Sidebar from "./components/Sidebar";
function App() {
  

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex justify-center py-20 w-full">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/invoce" element={<Invoce />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
