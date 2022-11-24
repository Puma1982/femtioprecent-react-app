import React from 'react';
import "./ProductItem.css";

const ProductItem = (props) => {
    const { companyName,   Product, Price1, Price, ExpiryDate, Address} =
        props.product;
    return (
        <div className="product-item__root">
            <div className="product-item__top">
                <span>{companyName}</span>
             
                <a href="https://www.willys.se/sortiment/brod-och-kakor/brod">{Product}</a>
               
                <span>{ExpiryDate}</span>
            </div>
            <div className="cross">
            <span>{Price1}</span>
            </div>
            <span>{Price}</span>
            <div className="product-item__dates">
              <a href="https://goo.gl/maps/nAJof1QiWCT7tcJV6">{Address}</a>
            </div>
        </div>
    );
};
export default ProductItem;