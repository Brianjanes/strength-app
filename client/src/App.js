import "./styles/App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* Styling will happen in App.css, within the BrowserRouter */}
      <div className="App">
        <Header />
        <SideBar />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
