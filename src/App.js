
import './App.css';
import Footer from './komponente/Footer';
import Home from './komponente/Home';
import NavBar from './komponente/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
