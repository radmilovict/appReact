import React from 'react'
import Kartica from './Kartica'
import { useState } from "react";


function Pesme({pesme,dodajOmiljenu}){
    return(

        <div>
        {pesme.map((p) => (<Kartica key={p.id} pesme={p} dodajOmiljenu={dodajOmiljenu} mod={1} ></Kartica>))}
        </div>

    );
}

export default Pesme;