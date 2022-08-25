import React from "react";
import Header from "./components/header/header"
import Banner from "./components/banner/Banner";
import Cards from "./components/cards/Cards"
import Podcast from "./components/army-podcast/Podcast";
import Nutritional from "./components/nutritional-yeast/Nutritional";
import Shop from "./components/shop/Shop"
import About from "./components/about/About";
import Blog from "./components/blog/Blog"
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Cards />
      <Podcast />
      <Nutritional />
      <Shop />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;