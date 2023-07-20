import React, { useState } from "react";
import { createContext } from "react";

// Context
export const TypesContext = createContext();

export const TypesProvider = (props) => {
	const [typeView, setTypeView] = useState();
	const [typeViewLoading, setTypeViewLoading] = useState(false);

	return (
		<TypesContext.Provider
			value={[typeView, setTypeView, typeViewLoading, setTypeViewLoading]}
		>
			{props.children}
		</TypesContext.Provider>
	);
};
