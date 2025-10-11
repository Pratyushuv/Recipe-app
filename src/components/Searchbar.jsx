import { useState } from "react"

function SearchBar({onSearch}){
    const[searchKeyword, setSearchKeyword] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        if(!searchKeyword.trim()) return;
        onSearch(searchKeyword);
        setSearchKeyword("");
    }
    return(
        <div className="flex flex-col items-center mt-8 w-full px-4">
            <form onSubmit={handleSubmit} className="flex justify-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <input className="flex-grow px-5 py-3 text-base sm:text-lg rounded-l-full border border-gray-300 caret-[rgba(114,63,95,1)] focus:outline-none bg-white" type="text" placeholder="Search for recipes..." value={searchKeyword} onChange={(e) =>setSearchKeyword(e.target.value)} />
                <button className="bg-[rgba(114,63,95,1)] hover:bg-[rgba(114,63,95,0.9)] text-white px-5 py-3 rounded-r-full font-semibold text-base sm:text-lg">Search</button>
            </form>
        </div>
    )
}
export default SearchBar