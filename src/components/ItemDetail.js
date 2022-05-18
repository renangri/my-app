import React from "react";
import { Card, Container } from "react-bootstrap";

import ItemCount from "./ItemCount";

const ItemDetail = item => {
	return (
		<div className="itemDetail">
			<div className="theItems">
				<Card bg="secondary" text="light" style={{ width: "18rem" }}>
					<Card.Text>
						<br />
						<span>{item.items.title}</span>
						<br />
						<span>
							<span>${item.items.price}</span>
						</span>
					</Card.Text>

					<Card.Img
						variant="top"
						src={item.items.pictureUrl}
						alt="foto de producto"
					/>

					<Card.Body>
						<span>{item.items.description}</span> <br /> <br />
						{/* aquí llamo el componente ItemCount */}
						<ItemCount
							stock={item.items.stock}
							initial={item.items.initial}
						></ItemCount>
					</Card.Body>
				</Card>
			</div>
			<div className="detailText">
				<Container>
					<h3>Detalles del producto:</h3>
					<p> {item.items.details} </p>
				
					
				</Container>
			</div>
		</div>
	);
};

export default ItemDetail;
