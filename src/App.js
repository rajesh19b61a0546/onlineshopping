import React from 'react';
import Nav from './components/Nav'
import TitleAndDescription from './components/TitleAndDescription';
import Filters from './components/Filters'
import Product from './components/Product'
import './App.css'

const App = () => {
    return (
        <>
            <Nav />
            <TitleAndDescription />
            <Filters/>
            <Product/>
        </>
    );
}

export default App;
