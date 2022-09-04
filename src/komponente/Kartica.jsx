import React from 'react'
import {BsMusicNoteBeamed} from "react-icons/bs"
import {TbHeartOff,TbHeart} from "react-icons/tb"

function Kartica({pesme,dodajOmiljenu,mod,izbaciIzOmiljenih}){
    return(
        <div> 
             <div className="card">
 
                <h1><BsMusicNoteBeamed></BsMusicNoteBeamed></h1>

                <p className="song">{pesme.nazivPesme}</p>
                <p className="song">{pesme.izvodjac}</p>

                {mod==1 ? 
                <p><button onClick={()=>dodajOmiljenu(pesme.id)}><TbHeart/></button></p>
                :
                <p><button onClick={()=>izbaciIzOmiljenih(pesme.id)}><TbHeartOff/></button></p>
                }
            </div>
        </div>
    );
}

export default Kartica;