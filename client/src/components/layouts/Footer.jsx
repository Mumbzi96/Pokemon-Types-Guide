//=============================================
//					Requirements
//=============================================
import { useContext } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

// Context
import { TypesContext } from "../../context/TypesContext";

//=============================================
//					Main
//=============================================

export const AppFooter = () => {
	// Context
	const { typeView } = useContext(TypesContext);

	// Return
	return (
		<Footer className={typeView ? typeView.name : "noType"} style={footerStyle}>
			Made for fun
		</Footer>
	);
};

//=============================================
//					Styles
//=============================================

const footerStyle = {
	textAlign: "center",
	color: "#fff",
};
