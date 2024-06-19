import { useState, createContext } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const CategoryContext = createContext(null);
export const ArticleContext = createContext(null);

const App = ({children}) => {
    const [category, setCategory] = useState(0);
    const [articleId, setArticleId] = useState(0);

    return (
        <div id="viewport" className="">
            <CategoryContext.Provider value={{category, setCategory}}>
                <ArticleContext.Provider value={{articleId, setArticleId}}>
                    <Navbar/>{children}<Footer/>
                </ArticleContext.Provider>
            </CategoryContext.Provider>
        </div>
    );
};

export default App;