//=============================================
//					Requirements
//=============================================
import { useContext } from "react";
import { Card, Space, Tag } from "antd";

// CSS
import "../types/Types.css";

// Context
import { TypeViewContext } from "../../context/TypeViewContext";

//=============================================
//					Main
//=============================================
const Pokemon = () => {
	//==================
	//	  Properties
	//==================
	// Data
	let pokemon = { name: "Bulbasaur", number: 1, type: ["grass", "poison"] };
	// Context
	const { showDetails } = useContext(TypeViewContext);

	// return
	return (
		<Space direction='vertical' size={16}>
			<Card
				title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
				extra={<p>{pokemon.number}</p>}
				style={{ width: 300 }}
			>
				{pokemon.type.map((type) => {
					return (
						<Tag
							className={type}
							onClick={() => {
								showDetails(type);
							}}
						>
							{type}
						</Tag>
					);
				})}
			</Card>
		</Space>
	);
};

export default Pokemon;
