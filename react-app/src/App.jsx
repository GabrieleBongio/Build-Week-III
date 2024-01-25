import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Messaggistica from "./components/Home/Messaggistica";
import MyNavigationBar from "./components/Home/MyNavigationBar";
import Footer from "./components/Home/Footer";
import Me from "./components/Profile/Me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";
import Home from "./components/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<MyNavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/me" element={<Me />} />
				<Route path="/:userId" element={<ProfilePage />} />
			</Routes>
			<Messaggistica />
			<Footer />
			{/* PROVA DELLA FETCH  */}
		</BrowserRouter>
	);
}

export default App;
