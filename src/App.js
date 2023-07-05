import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchInput from "./components/searchInput";

function App() {
  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <SearchInput />
      </div>
    </div>
  );
}

export default App;
