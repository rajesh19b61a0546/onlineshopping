import React, { useEffect, useState } from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="con6">
            <div className="con8">
                <div className="con9">
                    <div className="con10">
                        <input id="ram" className="box" type="checkbox" />
                        <label className="lab" htmlFor="ram">CUSTOMIZABLE</label>
                    </div>
                    <div className="con11">
                        <select className="opt">
                            <option selected>IDEAL FOR</option>
                            <option>ALL</option>
                        </select>
                    </div>
                    <div className="con12">
                        <input id="ram1" className="box" type="checkbox" />
                        <label className="lab" htmlFor="ram1">MEN</label>
                    </div>
                    <div className="con12">
                        <input id="ram11" className="box" type="checkbox" />
                        <label className="lab" htmlFor="ram11">WOMEN</label>
                    </div>
                    <div className="con12">
                        <input id="ram13" className="box" type="checkbox" />
                        <label className="lab" htmlFor="ram13">BABY & KIDS</label>
                    </div>
                    <div className="con13">
                        <select className="opt">
                            <option selected>
                                <span className="m">OCCASION</span>
                                <span className="n">ALL</span>
                            </option>
                            <option>
                                <span className="m">WORK</span>
                                <span className="n">ALL</span>
                            </option>
                            <option>
                                <span className="m">FABRIC</span>
                                <span className="n">ALL</span>
                            </option>
                            <option>
                                <span className="m">SEGMENT</span>
                                <span className="n">ALL</span>
                            </option>
                            <option>
                                <span className="m">SUITABLE FOR</span>
                                <span className="n">ALL</span>
                            </option>
                            <option>
                                <span className="m">RAW MATERIALS</span>
                                <span className="n">ALL</span>
                            </option>
                            <option>
                                <span className="m">PATTERN</span>
                                <span className="n">ALL</span>
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <ul className="product-container">
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                         <div className="dis"> 
                            <p className="product-description">Sign in or create an account to see price</p>
                            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Product;
