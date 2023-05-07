import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex justify-center py-20 w-full">
        <Home />
      </div>
    </div>
  );
}

export default App;
