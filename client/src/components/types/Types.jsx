//=============================================
//					Requirements
//=============================================
import React, { Fragment, useContext } from "react";
import { useState, useEffect } from "react";

// antd
import { Divider, Card } from "antd";
import { Form, Input } from "antd";
import { Col, Row } from "antd";

// Components
import Type from "./Type";

// Fontawesome
import "./Types.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// Context
import { TypeViewContext } from "../../context/TypeViewContext";

//=============================================
//					Main
//=============================================

function Types() {
	//==================
	//	  Properties
	//==================
	// Context
	const { sortArray } = useContext(TypeViewContext);
	// State
	const [types, setTypes] = useState([]);
	const [typesLoading, setTypesLoading] = useState(true);

	//==================
	//	 	Methods
	//==================
	// component did mount
	useEffect(() => {
		async function getTypes() {
			// Get Types from API
			fetch("/api/types")
				.then((data) => data.json())
				.then((data) => {
					// Sorting
					data = sortArray(data, "name");
					data = addShowProperty(data);
					// Setting state
					setTypesLoading(false);
					setTypes(data);
				})
				.catch((err) => console.log(err));
		}

		getTypes();
	}, []);

	// used to add the show property to use for hiding and showing certain types
	let addShowProperty = (arr) => {
		for (let i = 0; i < arr.length; i++) {
			arr[i].show = true;
		}
		return arr;
	};

	// ... Search dud
	let searchTypes = (e) => {
		let filter = e.target.value.toLowerCase();
		let filteredTypes = types.map((type) => {
			if (type.name.toLowerCase().includes(filter)) {
				return {
					...type,
					show: true,
				};
			} else {
				return {
					...type,
					show: false,
				};
			}
		});
		setTypes(filteredTypes);
	};

	//==================
	//	 	Return
	//==================
	return (
		<>
			{/* Search */}
			{/* Search */}
			<div>
				<br />
				<Form.Item
					label='Search'
					name='type'
					rules={[
						{
							message: "Search for the type directly",
						},
					]}
				>
					<Input onChange={searchTypes} />
				</Form.Item>
			</div>

			{/* MAPPING TYPES */}
			{/* MAPPING TYPES */}
			{typesLoading == false ? (
				<Card style={cardViewStyle} bordered={true}>
					<Row>
						{types.map((type) => {
							return (
								<Fragment key={type.name}>
									{type.show == true ? (
										<Col span={3}>
											<Type type={type} />
											<Divider />
										</Col>
									) : (
										<></>
									)}
								</Fragment>
							);
						})}
					</Row>
				</Card>
			) : (
				<Row>
					<Col span={6}></Col>
					<Col span={6}></Col>
					<Col span={6}>
						<FontAwesomeIcon icon={faSpinner} spinPulse size='2xl' />
					</Col>
					<Col span={6}></Col>
				</Row>
			)}

			{/* </Space> */}
		</>
	);
}

//=============================================
//					CSS
//=============================================
const cardViewStyle = {
	textAlign: "center",
};

export default Types;
