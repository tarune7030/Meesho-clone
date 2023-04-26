import "./App.css";
import Banner from "./Components/HeroSection/Banner";
import Header from "./Components/HomePage/Header";
import Navbar from "./Components/HomePage/Navbar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Banner />
      <Products />
    </div>
  );
}

export default App;
