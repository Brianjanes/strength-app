import "./styles/App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      {/* Styling will happen in App.css, within the BrowserRouter */}
      <div className="App">
        <Header />
        <SideBar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
