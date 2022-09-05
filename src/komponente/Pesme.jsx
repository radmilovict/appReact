import React from 'react'
import Kartica from './Kartica'
import {FaSearch} from "react-icons/fa"
import {useState} from "react"


function Pesme({pesme,dodajOmiljenu}){
    const [searchTerm, setSearchTerm] = useState('');
    function handleInput(e){
        setSearchTerm(e.target.value.toLowerCase() );
        console.log(e.target.value);
    }
      
  return (
    <div className='pesme'>
        <input className='search' type="text" placeholder='Šta želite da slušate?' onChange={handleInput}/><FaSearch className='icon'/>
   
    <div className='svePesme'>

    {searchTerm=='' ?  

        pesme.map((p) => (<Kartica key={p.id} pesme={p} dodajOmiljenu={dodajOmiljenu} mod={1} ></Kartica>))

        :

        pesme
        .filter((p)=> (p.izvodjac.toLowerCase().includes(searchTerm) || p.nazivPesme.toLowerCase().includes(searchTerm)) )
        .map((p) => (<Kartica key={p.id} pesme={p} dodajOmiljenu={dodajOmiljenu} mod={1} ></Kartica>))
    }
    </div>
    </div> 
    );
}

export default Pesme;