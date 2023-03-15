export default function OnPage ({
    setNumber, 
    setPage, 
    page, 
    }) {

    const countPage = (num) => { if (page>=1 
        // get rid of page 0
        //set maximum pages
        ) return (page+num); else return 1;
    }

    return(
        <>
        <div>
       
            <button>Display on page:</button>

            <button className="active-button" id="list-5" onClick={() => setNumber(5)}>5</button>

            <button className="active-button" id="list-10" onClick={() => setNumber(10)}>10</button>

            <button className="active-button" id="list-20" onClick={() => setNumber(20)}>20</button>

        </div>
        <div>
            <button className="active-button" id="prev" onClick={() => setPage(countPage(-1))}>prev</button>

            <button className="idle-button" id="page">{page}</button>

            <button className="active-button" id="next" onClick={() => setPage(countPage(1))}>next</button>

        </div>
        </>
    )
}