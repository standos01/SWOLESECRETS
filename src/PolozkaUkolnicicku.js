export default function PolozkaUkolnicicku({ ukol, poradi, fceSmazat, fceSpln }) {
    return (
        <>
            <div className="ukol">
                <span>{poradi} </span>
                {!ukol.splneno && <span className="text-ukolu">{ukol.text} </span>}
                {ukol.splneno && <span className="splneny-ukol">{ukol.text} </span>}
                <button onClick={() => fceSmazat(poradi)}>Smazat</button>
                <button onClick={() => fceSpln(poradi)}>Hotovo</button>
                <br />

            </div>
            <br></br> </>)
}

