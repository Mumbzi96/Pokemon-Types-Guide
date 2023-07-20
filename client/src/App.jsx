import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import TypeView from "./components/types/TypeView";
import Types from "./components/types/Types.jsx";
import Pokemon from "./components/pokemon/Pokemon";
import About from "./pages/About.jsx";

// Layout Components
import Navbar from "./components/layouts/Navbar.jsx";
import { AppFooter } from "./components/layouts/Footer.jsx";

// Context
import { TypeViewProvider } from "./context/TypeViewContext.jsx";

function App() {
	return (
		<TypeViewProvider>
			<BrowserRouter>
				{/* NAVBAR */}
				<Navbar />
				<Routes>
					{/* MAIN PAGE */}
					<Route
						index
						element={
							<>
								<TypeView />
								<Types />
							</>
						}
					/>
					{/* ABOUT PAGE */}
					<Route path='about' element={<About />} />
					{/* ABOUT PAGE */}
					<Route
						path='pokemon'
						element={
							<>
								<TypeView />
								<Pokemon />
							</>
						}
					/>
				</Routes>
				{/* FOOTER */}
				<AppFooter />
			</BrowserRouter>
		</TypeViewProvider>
	);
}

export default App;
