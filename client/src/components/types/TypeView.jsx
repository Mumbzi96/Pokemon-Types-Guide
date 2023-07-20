//=============================================
//					Requirements
//=============================================
import React, { useContext } from "react";

// antd
import { Card } from "antd";
import { Col, Row } from "antd";

// Fontawesome
import "./Types.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// Context
import { TypeViewContext } from "../../context/TypeViewContext";

//=============================================
//					Main
//=============================================

const TypeView = () => {
	//==================
	//	  Properties
	//==================
	// Context
	const { typeView } = useContext(TypeViewContext);
	const { typeViewLoading } = useContext(TypeViewContext);
	const { clearDetails, capitalizeFirstLetter } = useContext(TypeViewContext);

	//==================
	//	 	Return
	//==================
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
		</>
	);
};

//=============================================
//					CSS
//=============================================
const cardViewStyle = {
	textAlign: "center",
};

export default TypeView;
