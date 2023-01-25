import RoutesList from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
axios.defaults.baseURL="https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api"
function App() {
  return (
    <div className="App">
       <ToastContainer position="top-right" autoClose={2000}/>
      <RoutesList />
    </div>
  );
}

export default App;
