import ResultCard from "./components/ResultCard";
import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div>
      <SearchBar />
      <Tabs />
      <ResultGrid />
      <ResultCard />
    </div>
  );
};

export default App;
