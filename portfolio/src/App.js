import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import PortfolioList from "./pages/Portfolio/PortfolioList";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<PortfolioList />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
