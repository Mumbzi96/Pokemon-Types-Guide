import React, { Fragment } from "react";
import { useState, useEffect } from "react";
// antd
import { Divider, Space, Card } from "antd";
import { Col, Row } from "antd";
// Components
import Type from "./Type";
// import data from "../../data/pokemon_types.json";
// CSS
import "./Types.css";
// SVG
// font/fort awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Types() {
	const [typeView, setTypeView] = useState();
	const [typeViewLoading, setTypeViewLoading] = useState(false);
	const [types, setTypes] = useState([]);
	const [typesLoading, setTypesLoading] = useState(true);

	useEffect(() => {
		async function getTypes() {
			// Get Types from API
			fetch("/api/types")
				.then((data) => data.json())
				.then((data) => {
					setTypesLoading(false);
					setTypes(data);
				})
				.catch((err) => console.log(err));
		}

		getTypes();
	}, []);

	let showDetails = async (type) => {
		setTypeViewLoading(true);
		// Get type data
		fetch(`/api/types/${type}`)
			.then((data) => data.json())
			.then((data) => {
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

	let clearDetails = () => {
		setTypeView(() => {
			setTypeViewLoading(false);
			return null;
		});
	};

	let capitalizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	return (
		<>
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
						extra={<label onClick={clearDetails}>X</label>}
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
									<Col span={3}>
										<Type showDetails={showDetails} type={type} />
										<Divider />
									</Col>
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

// Styles
const cardViewStyle = {
	textAlign: "center",
	// minHeight: 100,
	// lineHeight: "10px",
	// color: "#fff",
	// backgroundColor: "#fff",
};

export default Types;
