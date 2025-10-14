import "./App.css";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RecipeDetails from "./pages/ViewDetails";
import Favourites from "./pages/Favourites";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/favourites" element={<Favourites />} />
    <Route path="/recipe/:id" element={<RecipeDetails/>}/>
   </Routes>
   </BrowserRouter>
  );
}
export default App;
