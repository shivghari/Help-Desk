import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//components
import StudentSignin from "./components/SigninForms/StudentSignin/StudentSignin";

//routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="signin" element={<StudentSignin />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
