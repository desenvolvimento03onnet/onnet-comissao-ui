import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageSMS from "./pages/SMS/pageSMS";
import NavBar from "./pages/NavBar/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={NavBar} />
        <Route path="/PageSMS" Component={PageSMS} />
      </Routes>
    </Router>
  );
}

export default App;
