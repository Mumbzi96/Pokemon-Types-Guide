import React from "react";

// Antd
import { Layout, Space } from "antd";
const { Header } = Layout;

// React Router
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Navbar() {
	return (
		<Header style={headerStyle}>
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
	backgroundColor: "#7dbcea",
};

export default Navbar;
