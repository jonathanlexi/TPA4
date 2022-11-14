import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Rout from "./rout/Rout";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Rout />

      <Footer />
    </div>
  );
}

export default App;
