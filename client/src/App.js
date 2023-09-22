import "./styles/App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
