export default function OnPage ({
    setNumber, 
    displayNumber, 
    setPage, 
    page, 
    //length
}) {

    const countPage = (num) => { if (page+num>=0 
        // & (page+num+1)*displayNumber<=length
        ) return (page+num); else return 0;
    } //

    console.log(page);
    // console.log(length); I never know, need to think

    return(
        <>
        <div>
       
            <button>Display on page:</button>

            <button className="active-button" id="list-5" onClick={() => setNumber(5)}>5</button>

            <button className="active-button" id="list-10" onClick={() => setNumber(10)}>10</button>

            <button className="active-button" id="list-20" onClick={() => setNumber(20)}>20</button>

        </div>
        <br></br>
        {/* <div>
            <button className="active-button" id="prev" onClick={() => setPage(countPage(-1))}>prev</button>

            <button className="idle-button" id="page">{page}</button>

            <button className="active-button" id="next" onClick={() => setPage(countPage(1))}>next</button>

        </div> */}
        </>
    )
}