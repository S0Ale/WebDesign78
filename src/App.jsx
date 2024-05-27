import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = ({children}) => {
    return (
        <div id="viewport" className="">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default App;