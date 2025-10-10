import { useState } from "react"

function SearchBar(){
    const[search, setSearch] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(!search.trim()) return;
        console.log("Searched:",search);
        setSearch("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for recipes..." value={search} onChange={(e) =>setSearch(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}
export default SearchBar