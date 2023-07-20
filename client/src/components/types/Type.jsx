//=============================================
//					Requirements
//=============================================
import React from "react";
// Context
import { useContext } from "react";
import { TypesContext } from "../../context/TypesContext";

// SVGs
import bug from "../../assets/icons/bug.svg";
import dark from "../../assets/icons/dark.svg";
import dragon from "../../assets/icons/dragon.svg";
import electric from "../../assets/icons/electric.svg";
import fairy from "../../assets/icons/fairy.svg";
import fighting from "../../assets/icons/fighting.svg";
import fire from "../../assets/icons/fire.svg";
import flying from "../../assets/icons/flying.svg";
import ghost from "../../assets/icons/ghost.svg";
import grass from "../../assets/icons/grass.svg";
import ground from "../../assets/icons/ground.svg";
import ice from "../../assets/icons/ice.svg";
import normal from "../../assets/icons/normal.svg";
import poison from "../../assets/icons/poison.svg";
import psychic from "../../assets/icons/psychic.svg";
import rock from "../../assets/icons/rock.svg";
import steel from "../../assets/icons/steel.svg";
import water from "../../assets/icons/water.svg";

// CSS
import "./Types.css";

//=============================================
//					Main
//=============================================

function Type(props) {
	// Context
	const { showDetails } = useContext(TypesContext);

	// Getting SVGs to use in the type
	const svgs = {
		bug,
		dark,
		dragon,
		electric,
		fairy,
		fighting,
		fire,
		flying,
		ghost,
		grass,
		ground,
		ice,
		normal,
		poison,
		psychic,
		rock,
		steel,
		water,
	};

	//
	const { name } = props.type;

	// return
	return (
		<div
			onClick={() => {
				showDetails(name);
			}}
		>
			{/* type's image gets background color & source based on className  */}
			<img className={name} src={svgs[name]} width='30px' />
			{/* Show name */}
			<p> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
		</div>
	);
}

export default Type;
