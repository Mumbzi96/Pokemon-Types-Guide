//=============================================
//					Requirements
//=============================================
import React, { useState } from "react";
import { createContext } from "react";

// Context
export const TypeViewContext = createContext();

//=============================================
//					Main
//=============================================
export const TypeViewProvider = (props) => {
	//==================
	//	  Properties
	//==================
	const [typeView, setTypeView] = useState();
	const [typeViewLoading, setTypeViewLoading] = useState(false);

	//==================
	//	  Methods
	//==================
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

	let clearDetails = () => {
		setTypeView(() => {
			setTypeViewLoading(false);
			return null;
		});
	};

	//==================
	//	 	Return
	//==================

	return (
		<TypeViewContext.Provider
			value={{
				// State
				typeView,
				setTypeView,
				typeViewLoading,
				setTypeViewLoading,
				// methods
				showDetails,
				sortArray,
				clearDetails,
			}}
		>
			{props.children}
		</TypeViewContext.Provider>
	);
};
