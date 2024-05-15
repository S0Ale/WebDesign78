import Navbar from "./components/Navbar";

const App = ({children}) => {
    return (
        <div id="viewport" className="">
            <Navbar />
            {children}
        </div>
    );
};

export default App;