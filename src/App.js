
import './App.css';
import Footer from './komponente/Footer';
import Home from './komponente/Home';
import NavBar from './komponente/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pesme from './komponente/Pesme';
import Omiljene from './komponente/Omiljene';
import { useState } from "react";


function App() {

  const [brojOmiljenihPesama, setBrOmPesama] = useState(0);
 
  const [pesme] = useState([

    {
      id:1,
      nazivPesme:"Poker Face",
      izvodjac:"Lady Gaga",
      omiljena:0
    },
    {
      id:2,
      nazivPesme:"Umbrella",
      izvodjac:"Rihanna",
      omiljena:0

    },
    {
      id:3,
      nazivPesme:"The Real Slim Shady",
      izvodjac:"Eminem",
      omiljena:0
    },
    {
      id:4,
      nazivPesme:"Yeah!",
      izvodjac:"Usher",
      omiljena:0

    }, 
    {
      id:5,
      nazivPesme:"Crazy In Love",
      izvodjac:"Beyonce",
      omiljena:0

    }, 
    {
      id:6,
      nazivPesme:"Black and Yellow",
      izvodjac:"Wiz Khalifa",
      omiljena:0

    }, 
    {
      id:7,
      nazivPesme:"Dynamite",
      izvodjac:"Taio Cruz", 
      omiljena:0

    }, 
    {
      id:8,
      nazivPesme:"I Gotta Feeling",
      izvodjac:"Black Eyed Peas",
      omiljena:0

    }, 
    {
      id:9,
      nazivPesme:"Gold Digger",
      izvodjac:"Kanye West",
      omiljena:0

    }, 
    {
      id:10,
      nazivPesme:"Temperature",
      izvodjac:"Sean Paul",
      omiljena:0

    }, 
    {
      id:11,
      nazivPesme:"Toxic",
      izvodjac:"Britney Spears",
      omiljena:0

    },
    {
      id:12,
      nazivPesme:"Survivor",
      izvodjac:"Destiny's Child",
      omiljena:0

    } 
  ]);

function dodajOmiljenu(id){
    pesme.forEach((p)=>{
      if(p.id==id){
        p.omiljena=1;
        setBrOmPesama(brojOmiljenihPesama+1)
        
      }
    })
}

function izbaciIzOmiljenih(id){
  pesme.forEach((p)=>{
    if(p.id==id){
      p.omiljena=0;
      setBrOmPesama(brojOmiljenihPesama-1)
       
    }
  })
}



  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/listaPesama" element={<Pesme pesme={pesme} dodajOmiljenu={dodajOmiljenu}/>} />
          <Route path="/omiljene" element={<Omiljene pesme={pesme} izbaciIzOmiljenih={izbaciIzOmiljenih} brojOmiljenihPesama={brojOmiljenihPesama}/>} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
