import { useEffect } from "react"
import axios from "axios"
export default function Home(){
    const fetchData=async()=>{
        try{
            const res=await axios.get(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=")
                console.log(res.data)
        }catch(err){
        console.log("failed to fetch",err)
    }
};
useEffect(()=>{
    fetchData()
},[])
    return(
    <div>        
    </div>
    )
}