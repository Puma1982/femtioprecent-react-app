
import React from 'react'
import './KategoriesStyles.css'
import Bread from '../video/bread.png'
import Meats from '../video/meat.png'
import Vegetables from '../video/vegetable.webp'
import Drinks from '../video/drinks.webp'
import Fruits from '../video/fruits.webp'
import Sweets from '../video/sweets.png'
import Nuts from '../video/nuts.png'

import Beanslegumes from '../video/beanslegumes.png'









function Kategories() {
    return (
        <div name='kategories' className='kategories'>
            <div className="container">
                <h1>All-Kategorier Produkter</h1>
                <h2>Halva priset(50%)</h2>
                <div className="img-container">
        
                <ul>
               
                    <img src={Bread} alt="/" /><a>Breads</a>
                    
                    <img src={Sweets} alt="/" /><a>Sweets</a>
                    <img src={Meats} alt="/" /><a>Meats</a>
                  
                    <img src={Vegetables} alt="/" /><a>Vegetables</a>
                    <img src={Fruits} alt="/" /><a>Fruits</a>
                    <img src={Nuts} alt="/" /><a>Nuts</a>
                   
                   <img src={Beanslegumes} alt="/" /><a>Beans & legumes</a>
                    <img src={Sweets} alt="/" /><a>Sweets</a>
                    <img src={Drinks} alt="/" /><a>Drinks</a>
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Kategories