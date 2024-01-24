import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Messaggistica from "./components/Messaggistica";
import MyNavigationBar from "./components/MyNavigationBar";
import Footer from "./components/Footer";
import Me from "./components/Me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <MyNavigationBar />
      <Routes>
        <Route path="/me" element={<Me />} />
        <Route path="/:userId" element={<ProfilePage />} />
      </Routes>
      <Messaggistica />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
