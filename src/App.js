import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (

    //BEM
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
