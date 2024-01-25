import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Messaggistica from "./components/Messaggistica";
import MyNavigationBar from "./components/MyNavigationBar";
import Footer from "./components/Footer";
import Me from "./components/Me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import Home from "./components/Home";
import Lavoro from "./components/Lavoro";

function App() {
  return (
    <BrowserRouter>
      <MyNavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Me />} />
        <Route path="/job" element={<Lavoro />} />
        <Route path="/:userId" element={<ProfilePage />} />
        <Route path="/lavoro" element={<Lavoro />}></Route>
      </Routes>
      <Messaggistica />
      <Footer />
      {/* PROVA DELLA FETCH  */}
    </BrowserRouter>
  );
}

export default App;
