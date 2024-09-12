export const FilterBar = ({setSearchTerm,setShowEmergency, currentUser}) => {
    return (<div className="filter-bar">
        {currentUser.isStaff ? 
        (<>
        <button className="filter-btn btn-primary" onClick={()=>setShowEmergency(true)}>Emergency</button>
        <button className="filter-btn btn-info" onClick={() => setShowEmergency(false)}>Show All</button>
        <input 
        type="text"
        placeholder="search Tickets"
        className="ticket-search"
        onChange={(event) =>{
            setSearchTerm(event.target.value)

        }}
        />
        </>): (
            <>
               <button className="filter-btn btn-primary" >Create Ticket</button> 
               <button className="filter-btn btn-info">Open Tickets</button>
               <button className="filter-btn btn-secondary">All My Tickets</button>
            </>
        )}
    </div>)
}