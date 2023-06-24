import React from "react";

// antd
import { Card, Col, Row } from "antd";
import { Avatar, List } from "antd";

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

function Type(props) {
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
	const { name, weakAgainst, strongAgainst, noEffectFrom, noEffectAgainst } =
		props.type;

	const showDetails = () => {
		props.showDetails({
			name,
			weakAgainst,
			strongAgainst,
			noEffectFrom,
			noEffectAgainst,
		});
	};
	return (
		<div onClick={showDetails}>
			<img className={name} src={svgs[name]} width='30px' />
			<p> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
		</div>
	);
}

export default Type;
