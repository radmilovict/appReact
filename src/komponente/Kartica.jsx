import React from 'react'
import {BsMusicNoteBeamed,BsHeartFill} from "react-icons/bs"
import {TbPlayerSkipBack,TbPlayerSkipForward} from "react-icons/tb"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {IoHeartDislike} from "react-icons/io5"


function Kartica({pesme,dodajOmiljenu,mod,izbaciIzOmiljenih}){
    return(
        <div> 
             <div className="card">
 
                <h1><BsMusicNoteBeamed></BsMusicNoteBeamed></h1>

                <p className="song">{pesme.nazivPesme}</p>
                <p className="song">{pesme.izvodjac}</p>
                <h1><TbPlayerSkipBack/><AiOutlinePlayCircle/><TbPlayerSkipForward/></h1>
                <p></p>
                {mod==1 ? 
                <p><button onClick={()=>dodajOmiljenu(pesme.id)}><BsHeartFill/></button></p>
                :
                <p><button onClick={()=>izbaciIzOmiljenih(pesme.id)}><IoHeartDislike/></button></p>
                }
            </div>
        </div>
    );
}

export default Kartica;