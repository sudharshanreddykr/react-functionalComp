import React from "react";
import { useDetails } from "./Chat";

export default function GrandChild() {
	const value = useDetails();
	return (
		<div>
			<h1>Grand Child Component</h1>
			Name is {value.username}
			<input type="text" value={value.username} onChange={(e) => value.setUsername(e.target.value)} />
		</div>
	);
}
