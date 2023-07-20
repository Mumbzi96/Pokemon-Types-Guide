// Components
import Types from "./components/types/Types.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/layouts/Navbar.jsx";
import { AppFooter } from "./components/layouts/Footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
								<Types />
							</>
						}
					/>
					{/* ABOUT PAGE */}
					<Route path='about' element={<About />} />
				</Routes>
				{/* FOOTER */}
				<AppFooter />
			</BrowserRouter>
		</TypeViewProvider>
	);
}

export default App;
