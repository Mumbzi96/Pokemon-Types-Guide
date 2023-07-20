import React, { useState } from "react";
import { createContext } from "react";

// Context
export const TypesContext = createContext();

export const TypesProvider = (props) => {
	const [typeView, setTypeView] = useState();
	const [typeViewLoading, setTypeViewLoading] = useState(false);

	const showDetails = async (type) => {
		setTypeViewLoading(true);
		// Get type data
		fetch(`/api/types/${type}`)
			.then((data) => data.json())
			.then((data) => {
				data.strongAgainst = sortArray(data.strongAgainst);
				data.weakAgainst = sortArray(data.weakAgainst);
				data.noEffectFrom = sortArray(data.noEffectFrom);
				data.noEffectAgainst = sortArray(data.noEffectAgainst);

				//
				setTypeViewLoading(false);
				//
				setTypeView(() => {
					return data;
				});
			})
			.catch((err) => console.log(err));
		//
	};

	let sortArray = (arr, property) => {
		arr = arr.sort((a, b) => {
			if (property) {
				if (a[property] > b[property]) return 1;
				else if (a[property] < b[property]) return -1;
				else return 0;
			} else {
				if (a > b) return 1;
				else if (a < b) return -1;
				else return 0;
			}
		});
		return arr;
	};

	return (
		<TypesContext.Provider
			value={{
				typeView,
				setTypeView,
				typeViewLoading,
				setTypeViewLoading,
				showDetails,
				sortArray
			}}
		>
			{props.children}
		</TypesContext.Provider>
	);
};
