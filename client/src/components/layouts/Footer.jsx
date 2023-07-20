import { useContext } from "react";
import { Layout, Space } from "antd";
const { Footer } = Layout;

// Context
import { TypesContext } from "../../context/TypesContext";

export const AppFooter = () => {
	//
	const [typeView, setTypeView] = useContext(TypesContext);
	//
	return (
		<Footer className={typeView ? typeView.name : 'noType'} style={footerStyle}>
			Made for fun
		</Footer>
	);
};

const footerStyle = {
	textAlign: "center",
	color: "#fff",
	// backgroundColor: "#7dbcea",
};
