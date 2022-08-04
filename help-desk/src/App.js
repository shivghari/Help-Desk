import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//components
import StudentSignin from "./components/SigninForms/StudentSignin/StudentSignin";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

//routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="signin" element={<StudentSignin />}></Route>
          <Route exact path="home" element={<Home />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
