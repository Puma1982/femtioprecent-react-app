import React from 'react'
import ProductItem from './components/ProductItem/ProductItem';
import Footer from './components/footer/Footer';
import Kategories from './components/Kategories/Kategories';
import Home from './components/navbar/home/Home';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import { products } from './asset/products';
function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Kategories />
   {products.map((product,index)=>{
        return <ProductItem key={index} product={product} />;
      })}
            <Search />
            <Selects />
            <Footer />
        </div>
    );
}
export default App;
