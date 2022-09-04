import React from 'react'
import Kartica from './Kartica'


function Pesme({pesme,dodajOmiljenu}){
    return(

        <div className="svePesme">
        {pesme.map((p) => (<Kartica key={p.id} pesme={p} dodajOmiljenu={dodajOmiljenu} mod={1} ></Kartica>))}
        </div>

    );
}

export default Pesme;