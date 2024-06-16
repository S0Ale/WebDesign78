import { useState, createContext } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const CategoryContext = createContext(null);

const App = ({children}) => {
    const [category, setCategory] = useState(0);

    return (
        <div id="viewport" className="">
            <CategoryContext.Provider value={{category, setCategory}}>
                <Navbar/>{children}<Footer/>
            </CategoryContext.Provider>
        </div>
    );
};

export default App;