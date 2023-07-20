import React, { useContext } from "react";

// Antd
import { Layout } from "antd";
const { Header } = Layout;

// CSS
import "../types/Types.css";

// Context
import { TypesContext } from "../../context/TypesContext";

function Navbar() {
	//
	const { typeView, setTypeView } = useContext(TypesContext);
	//
	return (
		<Header className={typeView ? typeView.name : "noType"} style={headerStyle}>
			<h1>Pokemon Types Guide</h1>
		</Header>
	);
}

// Design
const headerStyle = {
	textAlign: "center",
	color: "#fff",
	height: 64,
	paddingInline: 50,
	lineHeight: "64px",
	// backgroundColor: "#7dbcea",
};

export default Navbar;
