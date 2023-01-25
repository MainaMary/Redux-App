import RoutesList from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
       <ToastContainer position="top-right" autoClose={2000}/>
      <RoutesList />
    </div>
  );
}

export default App;
