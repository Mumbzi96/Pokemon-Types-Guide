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
import { faSpinner, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
	const { typeView } = useContext(TypeViewContext);
	const { typeViewLoading } = useContext(TypeViewContext);
	const { sortArray, clearDetails } = useContext(TypeViewContext);
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

	// used to capitalize letter of types
	let capitalizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

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
			{/* TYPE CARD */}
			{/* TYPE CARD */}
			{typeViewLoading == true ? (
				<Row>
					<Col span={6}></Col>
					<Col span={6}></Col>
					<Col span={6}>
						<FontAwesomeIcon icon={faSpinner} spinPulse size='2xl' />
					</Col>
					<Col span={6}></Col>
				</Row>
			) : typeView == null ? (
				<></>
			) : (
				<>
					<br />
					<Card
						style={cardViewStyle}
						className={typeView.name}
						title={capitalizeFirstLetter(typeView.name)}
						extra={
							<FontAwesomeIcon
								onClick={clearDetails}
								icon={faCircleXmark}
								size='2xl'
							/>
						}
					>
						<Row>
							{/* Strong Against */}
							<Col span={5}>
								<h3>Strong Against</h3>
								{typeView.strongAgainst.map((type) => {
									return <p>{capitalizeFirstLetter(type)}</p>;
								})}
							</Col>

							{/* Weak Against */}
							<Col span={5}>
								<h3>Weak Against</h3>
								{typeView.weakAgainst.map((type) => {
									return <p>{capitalizeFirstLetter(type)}</p>;
								})}
							</Col>

							{/* No Effect From */}
							<Col span={5}>
								<h3>No Effect From</h3>
								{typeView.noEffectFrom.map((type) => {
									return <p>{capitalizeFirstLetter(type)}</p>;
								})}
							</Col>

							{/* No Effect Against */}
							<Col span={5}>
								<h3>No Effect Against</h3>
								{typeView.noEffectAgainst.map((type) => {
									return <p>{capitalizeFirstLetter(type)}</p>;
								})}
							</Col>
						</Row>
					</Card>
				</>
			)}
			<br />

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
	// minHeight: 100,
	// lineHeight: "10px",
	// color: "#fff",
	// backgroundColor: "#fff",
};

export default Types;
