import './Cards.css'
function Cards({records}){
    return(
        <div id='rec_box'>
            {
                records.map((next) => (
                    <div key={next.id} className="rec">
                        <strong>{next.name}</strong> <br/><br/>
                        <strong>City: </strong><span>{next.address.city}</span>
                    </div>
                ))
            } 
        </div>
    );
}

export default Cards;