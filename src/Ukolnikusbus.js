import { useState } from "react";
import NewUkol from "./NewUkol";
import PolozkaUkolnicicku from "./PolozkaUkolnicicku";


export default function Ukolnikusbus() {

    const [seznamUkolu, nastavSeznamUkolu] = useState([
        {text: 'novy ukol', splneno: false},
        {text: 'dalsi ukol', splneno: false},
        {text: 'splneny ukol', splneno: true}
    ])

    function pridejUkol(textUkolu) {
        let novyUkol = {text: textUkolu, splneno: false}
        nastavSeznamUkolu([...seznamUkolu, novyUkol])
    }
    
    function smazatUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu, 1);
        nastavSeznamUkolu(upravenySeznamUkolu);
    }
    function splnUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu[poradiUkolu].splneno = !upravenySeznamUkolu[poradiUkolu].splneno;
        nastavSeznamUkolu(upravenySeznamUkolu);

    }
    function pocetHotovychUkolu() {
        let hotove = 0;
        for(let ukol of seznamUkolu) {
            if(ukol.splneno){
                hotove++;
            }
        }
        return hotove;
    }

    


    return (
        <>
            <div className="ukoly">
                <NewUkol pridejUkol={pridejUkol} />
                <br />
                {
                    seznamUkolu.map(
                        (ukol, poradi) =>
                            <PolozkaUkolnicicku key={poradi} ukol={ukol} poradi={poradi} fceSmazat={smazatUkol} fceSpln={splnUkol} />
                    )
                }
            </div>
            <p>pocet ukolu:{seznamUkolu.length}</p>
            <p>pocet hotovych ukolu:{pocetHotovychUkolu()}</p>
            <p>pocet TODO ukolu:{seznamUkolu.filter(ukol => !ukol.splneno).length}</p>

            <button onClick={() => pridejUkol("novy ukol")}>Pridej nahodny ukol</button>
        </>
    )
}