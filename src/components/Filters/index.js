import React from 'react';
import './index.css'; 

const Filters = () => {
    return (
        <div className="con5"> 
            <h1 className="heading1">3425 Items</h1>
            <form>
                <select>
                    <option className="op" selected>HIDE FILTER</option>
                    <option className="op" >SHOW FILTER</option>
                </select>
            </form>
            <form>
                <select>
                    <option className="op1" selected>RECOMMENDED</option>
                    <option className="op1" >NEWEST FIRST</option>
                    <option className="op1" >POPULAR</option>
                    <option className="op1" >NEWEST FIRST</option>
                    <option className="op1" >PRICE: HIGH TO LOW</option>
                    <option className="op1" >PRICE: LOW TO HIGH</option>
                </select>
            </form>

        </div>
    );
}

export default Filters;