import React from 'react'
import {BsMusicNoteBeamed,BsFillSuitHeartFill,BsXCircle} from "react-icons/bs"

function Kartica({pesme,dodajOmiljenu,mod,izbaciIzOmiljenih}){
    return(
        <div> 
             <div className="card">
 
                <h1><BsMusicNoteBeamed></BsMusicNoteBeamed></h1>

                <p className="song">{pesme.nazivPesme}</p>
                <p className="song">{pesme.izvodjac}</p>

                {mod==1 ? 
                <p><button onClick={()=>dodajOmiljenu(pesme.id)}><BsFillSuitHeartFill/></button></p>
                :
                <p><button onClick={()=>izbaciIzOmiljenih(pesme.id)}><BsXCircle/></button></p>
                }
            </div>
        </div>
    );
}

export default Kartica;