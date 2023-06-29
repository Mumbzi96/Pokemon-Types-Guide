import { useState } from "react";
// Antd
import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;

// Components
import Types from "./components/types/Types.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/layouts/Navbar.jsx";

// Pages
// import Home from './pages/Home'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import About from "./pages/About";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<BrowserRouter>
			<Navbar />
			{/* Nav Link */}
			{/* <NavLink to='/'>Home &ensp;</NavLink>
			<NavLink to='about'>About</NavLink> */}
			{/* Body */}
			<Routes>
				<Route index element={<><Types /></>} />
				<Route path='about' element={<About />} />
			</Routes>
			{/* <Content style={contentStyle}>
				<Types />
			</Content> */}
			{/* Footer */}
			<Footer style={footerStyle}>Made for fun</Footer>
		</BrowserRouter>
	);
}

// Styles
const contentStyle = {
	// textAlign: "center",
	// minHeight: 100,
	lineHeight: "10px",
	// color: "#fff",
	backgroundColor: "#fff",
};

const footerStyle = {
	textAlign: "center",
	color: "#fff",
	backgroundColor: "#7dbcea",
};

const siderStyle = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#3ba0e9',
  };

export default App;
