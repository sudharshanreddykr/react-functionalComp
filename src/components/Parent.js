import React, { useImperativeHandle, useRef, forwardRef, useState } from "react";

// Parent Component
export default function Parent() {
	const buttonRef = useRef();
	const handleClick = () => {
		console.log(Object.keys(buttonRef.current)); // ['someExposedProperty']
		buttonRef.current.someExposedProperty();
		console.log(buttonRef.current.username);
	};
	return <Button onClick={handleClick} ref={buttonRef} />;
}
// Child component
const Button = forwardRef((props, ref) => {
	const buttonRef = useRef();
	useImperativeHandle(ref, () => ({
		someExposedProperty: () => {
			console.log(`we're inside the exposed property function!`);
		},
		username: "Venkatesh",
	}));
	return (
		<button ref={buttonRef} {...props}>
			Button
		</button>
	);
});
