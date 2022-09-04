import React from 'react'
import {BsMusicNoteBeamed} from "react-icons/fa"

function Kartica({pesma,preuzmiPesmu,mod,izbrisiPesmu}){
    return(
        <div> 
             <div className="card">
 
                <h1><BsMusicNoteBeamed></BsMusicNoteBeamed></h1>

                <p className="song">Pesma</p>
                <p className="song">Izvodjac</p>

                
            </div>
        </div>
    );
}

export default Kartica;