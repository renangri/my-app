import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = props => {
	const [count, setCount] = useState(parseInt(props.initial));

	const onAdd = () => {
		// comprobación de stock
		if (count < props.stock) {
			setCount(count + 1);
		}
	};

	const onSubtraction = () => {
		// comprobación para que el inicial no sea menor a 1
		if (count > props.initial) {
			setCount(count - 1);
		}
	};

	return (
		<div className="itemcount-container">
			<Button variant="danger" onClick={onSubtraction}>
				-
			</Button>
			<span> {count} </span>
			<Button variant="success" onClick={onAdd}>
				+
			</Button>
			<br />
			<br />
			<Button variant="secondary">Agregar al carrito</Button>
			<br />
			<br />
		</div>
	);
};

export default ItemCount;
