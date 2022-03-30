import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import AboutDetails from "./component/AboutDetails/AboutDetails";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFount/NotFound";
import Order from "./component/Order/Order";
import Shop from "./component/Shop/Shop";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                {/* Dynamic url */}
                <Route path="/about/:id" element={<AboutDetails />}></Route>

                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/shop/:id" element={<Shop />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="*" element={<NotFound></NotFound>} />
            </Routes>
        </div>
    );
}

export default App;
