import { useState } from "react";

export default function NewUkol({pridejUkol}) {
    const [ukol, nastavUkol] = useState('');




    return(
        <>
        <input
        value={ukol}
        onChange={(udalost) => nastavUkol(udalost.target.value)}
        >
        
        </input>
        <button onClick={() => pridejUkol(ukol)}>Pridej ukol broda</button>
        </>
    )
}