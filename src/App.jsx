import "./App.css";
import Home from "./components/Home";

function App() {
  function handleSearch(searchword) {
    console.log("Searched:", searchword);
  }
  return (
    <>
      <Home onSearch={handleSearch} />
    </>
  );
}

export default App;
