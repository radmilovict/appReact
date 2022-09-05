import React from 'react'
import Kartica from './Kartica';


function Omiljene({pesme,izbaciIzOmiljenih,brojOmiljenihPesama}){
    return(
        <div className="svePesme">

        {brojOmiljenihPesama==0 ? 

            <h3>Vaša lista pesama je prazna</h3>
        
            :

            pesme
                .filter((p)=>p.omiljena==1)
                .map((p)=>(<Kartica key={p.id} pesme={p} mod={0} izbaciIzOmiljenih={izbaciIzOmiljenih}></Kartica>))
        
        }
           
        </div>
    );
}

export default Omiljene;